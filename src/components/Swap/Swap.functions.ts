import { CurrencyAmount, Percent, Token, TradeType } from "@uniswap/sdk-core"
import { AlphaRouter, SwapOptionsSwapRouter02, SwapType } from "@uniswap/smart-order-router"
import JSBI from "jsbi"
import { ethers, BigNumber, ContractInterface } from "ethers"
import { Network, NetworkToken, Price, Transaction } from "./Swap.types"
import { toast } from "react-toastify"

export const createToken = (
    chainId: number,
    token: NetworkToken
): Token => new Token(chainId,
    token.address,
    token.decimals,
    token.symbol,
    token.name)

export const getPrice = async (
    inputAmount: number,
    decimals: number,
    slippageAmount: number,
    walletAddress: string,
    mainToken: Token,
    swapToken: Token,
    router: AlphaRouter
): Promise<Price> => {
    const percentSlippage = new Percent(Number(slippageAmount), 100)
    const inputAmountWei = ethers.utils.parseUnits(inputAmount.toString(), decimals)
    const currencyAmount = CurrencyAmount.fromRawAmount(mainToken, JSBI.BigInt(inputAmountWei))
    const deadline = Math.floor(Date.now() / 1000 + (5 * 60))

    let swapConfig: SwapOptionsSwapRouter02 = {
        recipient: walletAddress,
        slippageTolerance: percentSlippage,
        deadline: deadline,
        type: SwapType.SWAP_ROUTER_02
    }

    const route = await router.route(
        currencyAmount,
        swapToken,
        TradeType.EXACT_INPUT,
        swapConfig
    ).catch((error) => {
        toast.error("Error getting token price")
        throw new Error(error.name)
    })

    const quoteAmountOut = route!.quote.toFixed(6)
    const ratio = (Number(quoteAmountOut) / inputAmount).toFixed(3)

    return {
        data: route!.methodParameters!.calldata,
        value: route!.methodParameters!.value,
        gasPrice: BigNumber.from(route!.gasPriceWei),
        quoteAmountOut: quoteAmountOut,
        ratio
    }
}

export const getTransaction = (
    walletAddress: string,
    data: string,
    value: string,
    gasPrice: ethers.BigNumber
): Transaction => {
    const V3_SWAP_ROUTER_ADDRESS = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"

    return {
        data,
        to: V3_SWAP_ROUTER_ADDRESS,
        value,
        from: walletAddress,
        gasPrice,
        gasLimit: ethers.utils.hexlify(1000000)
    }
}

export const runSwap = async (
    transaction: Transaction,
    wallet: string,
    amount: number,
    contract: any
): Promise<void> => {
    const V3_SWAP_ROUTER_ADDRESS = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45"
    const provider = new ethers.providers.Web3Provider(window.ethereum as any)
    const signer = provider.getSigner();

    let allowance = await contract.connect(signer).allowance(
        wallet,
        V3_SWAP_ROUTER_ADDRESS
    )
    let allowanceFormat = Number(ethers.utils.formatEther(allowance))
    if (allowanceFormat <= amount) {
        const approvalAmount = ethers.utils.parseUnits(amount.toString(), 18)
        let contractApprove = await contract.connect(signer).approve(
            V3_SWAP_ROUTER_ADDRESS,
            approvalAmount
        )
        let recipient = await contractApprove.wait()
        if (recipient.status == 1) {
            const txn_receipt = await signer.sendTransaction(transaction)
            await txn_receipt.wait()
        }
    }
    else {
        const txn_receipt = await signer.sendTransaction(transaction)
        await txn_receipt.wait()
    }
}

export const getNetworkByChainId = (
    networks: Array<Network>,
    chainId: string
): Network => {
    let network = networks.filter(
        network => network.chainId === chainId.toString()
    )[0]

    if (network !== undefined && network.tokens == undefined)
        throw new RangeError(`Insufficient tokens in ${network.name} network`)

    return network
}

export const isDisabled = (
    networks: Array<Network>,
    chainId: string,
    address: string
): boolean => (!!getNetworkByChainId(networks, chainId) && !!address)

export const getTokenBalance = async (
    walletAddress: string,
    tokenAddress: string,
    ERC20ABI: ContractInterface,
    web3Provider: ethers.providers.JsonRpcProvider
): Promise<number> => {
    const contract = new ethers.Contract(tokenAddress, ERC20ABI, web3Provider)
    return await contract.balanceOf(walletAddress)
        .then((res: string) =>
            Number(ethers.utils.formatEther(res))
        )
}

export const changeTokens = (
    networks: Array<Network>,
    chainId: string,
    currentToken: string
) => {
    let network = getNetworkByChainId(networks, chainId)
    return currentToken == network.tokens[0].symbol
        ? {
            "mainToken": network.tokens[1],
            "swapToken": network.tokens[0]
        } : {
            "mainToken": network.tokens[0],
            "swapToken": network.tokens[1]
        }
}