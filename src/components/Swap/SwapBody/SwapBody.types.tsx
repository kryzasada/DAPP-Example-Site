export type SwapBodyProps = {
    mainTokenName: string
    swapTokenName: string
    mainTokenAmount?: number
    swapTokenAmount: number
    swapTokenLoading: boolean
    mainTokenBalance: number
    swapTokenBalance: number
    balanceLoading?: boolean
    disabled: boolean
    onBlur: (amount: number) => void
    changeTokens: () => void
}
