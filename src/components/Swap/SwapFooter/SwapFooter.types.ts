export type SwapFooterProps = {
    mainToken: string
    swapToken: string
    ratio?: number
    transactionPending?: boolean
    isNetwork: boolean
    isConnection: boolean
    handleClick: () => void
}