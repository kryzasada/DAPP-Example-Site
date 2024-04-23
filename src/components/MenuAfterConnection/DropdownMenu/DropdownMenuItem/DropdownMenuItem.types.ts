import { Networks } from "../../MenuAfterConnection.types"

export type DropdownMenuItemProps = Networks & {
    current: boolean
    disabled: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
