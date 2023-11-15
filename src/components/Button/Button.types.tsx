export type ButtonType = "default" | "swap"

export type ButtonProps = {
    type: ButtonType
    text: string
    disabled?: boolean
    pending?: boolean
    onClick: () => void
}
