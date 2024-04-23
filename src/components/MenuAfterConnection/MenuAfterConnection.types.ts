export type Networks = {
    name: string
    chainId: string
    viewBox: string
    d: string
    disable?: boolean
}

export type MenuAfterConnectionProps = {
    networks: Array<Networks>
}
