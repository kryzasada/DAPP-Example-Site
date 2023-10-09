export type Networks = {
    name: string
    chainId: string
    viewBox: string
    d: string
}

export type MenuAfterConnectionProps = {
    networks: Array<Networks>
}
