import { useEffect, useState } from "react"
import { ethers } from "ethers"
import { toast } from "react-toastify"
import { AlphaRouter } from "@uniswap/smart-order-router"
import networks from "../../json/networks.json"
import ERC20ABI from "../../json/abi.json"
import { useAppSelector } from "../../hooks/store"
import SwapBody from "./SwapBody/SwapBody"
import SwapHeader from "./SwapHeader/SwapHeader"
import SwapFooter from "./SwapFooter/SwapFooter"
import { changeTokens, createToken, getNetworkByChainId, getPrice, getTokenBalance, getTransactionData, isDisabled, runSwap } from "./Swap.functions"
import { NetworkToken, Price, TransactionData } from "./Swap.types"
import "./Swap.css"

const Swap = () => {
    const [mainToken, setMainToken] = useState<NetworkToken>()
    const [swapToken, setSwapToken] = useState<NetworkToken>()
    const [mainTokenAmount, setMainTokenAmount] = useState(0)
    const [swapTokenAmount, setSwapTokenAmount] = useState(0)
    const [mainTokenBalance, setMainTokenBalance] = useState(0)
    const [swapTokenBalance, setSwapTokenBalance] = useState(0)
    const [balanceLoading, setBalanceLoading] = useState(false)
    const [transactionPending, setTransactionPending] = useState(false)
    const [ratio, setRatio] = useState<number>(0)
    const [currentSpread, setCurrentSpread] = useState(1)
    const [loading, setLoading] = useState(false)
    const [transactionData, setTransactionData] = useState<TransactionData>()
    const { address, chainId } = useAppSelector((state) => state)

    const INFURA_URL = process.env.REACT_APP_INFURA_URL
    const web3Provider = new ethers.providers.JsonRpcProvider(INFURA_URL)

    useEffect(() => {
        if (chainId !== "" && address !== "") {
            let network = getNetworkByChainId(networks, chainId)
            if (network !== undefined) {
                setMainToken(network?.tokens[0])
                setSwapToken(network?.tokens[1])
                setBalance(network?.tokens[0].address, network?.tokens[1].address)
            }
        }
    }, [chainId, address])

    const setBalance = (mainTokenAddress: string, swapTokenAddress: string) => {
        setBalanceLoading(true)
        const getMainTokenBalance =
            getTokenBalance(address, mainTokenAddress, ERC20ABI, web3Provider)
                .then(balance => setMainTokenBalance(balance))

        const getSwapTokenBalance =
            getTokenBalance(address, swapTokenAddress, ERC20ABI, web3Provider)
                .then(balance => setSwapTokenBalance(balance))

        Promise.all([getMainTokenBalance, getSwapTokenBalance])
            .then(() => setBalanceLoading(false))
    }

    const handleChangeTokens = () => {
        let tokens = changeTokens(networks, chainId, mainToken!.symbol)
        setMainToken(tokens.mainToken)
        setSwapToken(tokens.swapToken)
        setMainTokenBalance(swapTokenBalance)
        setSwapTokenBalance(mainTokenBalance)
        setMainTokenAmount(swapTokenAmount)
        setSwapTokenAmount(mainTokenAmount)
        if (ratio !== 0)
            setRatio(Number((1 / ratio).toFixed(6)))
    }

    const getSwapPrice = (amount: number) => {
        setLoading(true)
        setTransactionPending(true)

        const alphaRouter = new AlphaRouter({
            chainId: parseInt(chainId),
            provider: web3Provider
        })
        const createdMainToken = createToken(parseInt(chainId), mainToken!)
        const createdSwapToken = createToken(parseInt(chainId), swapToken!)

        getPrice(amount,
            mainToken!.decimals,
            currentSpread,
            address,
            createdMainToken,
            createdSwapToken,
            alphaRouter,
        ).catch((error) => {
            toast.error("Error getting token price")
            throw new Error(error.name)
        }).then((price: Price) => {
            setTransactionData({
                data: price.data,
                value: price.value,
                gasPrice: price.gasPrice,
            })
            setSwapTokenAmount(Number(price.quoteAmountOut))
            setMainTokenAmount(amount)
            setRatio(Number(price.ratio))
        }).finally(() => {
            setLoading(false)
            setTransactionPending(false)
        })
    }

    const handleSwap = async () => {
        if (transactionData !== undefined && !loading) {
            const transaction = getTransactionData(address,
                transactionData.data,
                transactionData.value,
                transactionData.gasPrice)
            const contract = new ethers.Contract(mainToken!.address, ERC20ABI, web3Provider)

            setTransactionPending(true)

            const swap = runSwap(transaction, address, mainTokenAmount, contract)
                .then(() => {
                    setBalance(mainToken!.address, swapToken!.address)
                }).finally(() => {
                    setTransactionPending(false)
                })

            toast.promise(
                swap,
                {
                    pending: 'Transaction is pending',
                    success: 'Transaction confirmed',
                    error: 'Denied transaction signature'
                }
            )
        }
    }

    return (
        <div className="swap">
            <SwapHeader
                currentSpread={currentSpread}
                onChangeSpread={(spread) => setCurrentSpread(spread)}
            />

            <SwapBody
                mainTokenName={mainToken?.symbol ?? "UNI"}
                swapTokenName={swapToken?.symbol ?? "WETH"}
                mainTokenAmount={mainTokenAmount}
                swapTokenAmount={swapTokenAmount}
                swapTokenLoading={loading}
                mainTokenBalance={mainTokenBalance}
                swapTokenBalance={swapTokenBalance}
                balanceLoading={balanceLoading}
                disabled={isDisabled(networks, chainId, address)}
                changeTokens={handleChangeTokens}
                onBlur={getSwapPrice}
            />

            <SwapFooter
                mainToken={mainToken?.symbol ?? "WETH"}
                swapToken={swapToken?.symbol ?? "UNI"}
                isConnection={!!address}
                transactionPending={transactionPending}
                isNetwork={!!getNetworkByChainId(networks, chainId)}
                ratio={ratio}
                handleClick={handleSwap}
            />
        </div >
    )
}

export default Swap