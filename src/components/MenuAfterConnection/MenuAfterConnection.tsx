import { useMemo, useState } from "react"
import { reset, setChainId } from '../../store/reducer'
import { useAppSelector, useAppDispatch } from '../../hooks/store'
import cropWalletAddress from "../../functions/cropWalletAddress"
import { switchEthereumChain } from "../../functions/walletMethods"
import DropdownMenu from "./DropdownMenu/DropdownMenu"
import { MenuAfterConnectionProps } from "./MenuAfterConnection.types"
import CurrentNetworkIcon from "./CurrentNetworkIcon/CurrentNetworkIcon"
import "./MenuAfterConnection.css"

const MenuAfterConnection = (props: MenuAfterConnectionProps) => {
    const { networks } = props
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const wallet = useAppSelector((state) => state.address)
    const chainId = useAppSelector((state) => state.chainId)
    const dispatch = useAppDispatch()

    const croppedWalletAddress = useMemo(() =>
        cropWalletAddress(wallet),
        [wallet])

    const handleChangeNetwork = async (btn: React.MouseEvent<HTMLButtonElement>) => {
        try {
            let chainId = btn.currentTarget.value
            await switchEthereumChain(chainId)
            dispatch(setChainId(chainId))
            setOpenMenu(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleDisconnect = async () => dispatch(reset())

    return (
        <div className="menu-after-connection">
            <button
                className="menu-after-connection__button"
                onClick={() => setOpenMenu(!openMenu)}
            >
                <CurrentNetworkIcon
                    chainId={chainId}
                    networks={networks} />
                <span>
                    {croppedWalletAddress}
                </span>
                <svg
                    className={`menu-after-connection__arrow ${openMenu && "rotate-180"}`}
                    viewBox="0 0 24 24"
                    fill="none">
                    <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="currentColor" />
                </svg>
            </button>
            {
                openMenu &&
                <DropdownMenu
                    networks={networks}
                    activeNetworkId={chainId}
                    handleChangeNetwork={handleChangeNetwork}
                    handleDisconnect={handleDisconnect}
                />
            }
        </div>

    )
}

export default MenuAfterConnection
