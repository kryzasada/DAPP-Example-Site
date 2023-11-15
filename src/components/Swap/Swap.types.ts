import { ethers } from "ethers"

export type NetworkToken = {
    name: string
    symbol: string
    decimals: number
    address: string
}

export type Network = {
    name: string
    chainId: string
    viewBox: string
    d: string
    disable: boolean
    tokens: Array<NetworkToken>
}

export type Price = {
    data: string
    value: string
    gasPrice: ethers.BigNumber
    quoteAmountOut: string
    ratio: string
}

export type TransactionData = {
    data: string
    value: string
    gasPrice: ethers.BigNumber
}

export type Transaction = {
    data: string
    to: string
    value: string
    from: string
    gasPrice: ethers.BigNumber
    gasLimit: string
}
