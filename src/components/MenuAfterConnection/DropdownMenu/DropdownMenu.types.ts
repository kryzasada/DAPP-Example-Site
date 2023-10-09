import { Networks } from "../MenuAfterConnection.types"

export type DropdownMenuProps = {
    activeNetworkId: string
    networks: Array<Networks>
    handleChangeNetwork: React.MouseEventHandler<HTMLButtonElement>
    handleDisconnect: React.MouseEventHandler<HTMLButtonElement>
}
