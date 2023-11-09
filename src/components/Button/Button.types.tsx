export type ButtonType = "default" | "swap"

export type ButtonProps = {
    type: ButtonType
    text: string
    onClick: () => void
}
