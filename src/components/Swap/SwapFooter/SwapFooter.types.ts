export type SwapFooterProps = {
    mainToken: string
    swapToken: string
    ratio?: number
    isNetwork: boolean
    isConnection: boolean
    handleClick: () => void
}