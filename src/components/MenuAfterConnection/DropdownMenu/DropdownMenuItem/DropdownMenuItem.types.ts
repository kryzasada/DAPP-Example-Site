import { Networks } from "../../MenuAfterConnection.types"

export type DropdownMenuItemProps = Networks & {
    disabled: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
