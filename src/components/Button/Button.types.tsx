export type ButtonType = "default" | "swap"

export type ButtonProps = {
    type: ButtonType
    text: string
    disabled?: boolean
    onClick: () => void
}
