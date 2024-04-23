import { DropdownMenuItemProps } from "./DropdownMenuItem.types"
import "./DropdownMenuItem.css"

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
    return (
        <button
            onClick={props.onClick}
            className="dropdown-menu-item"
            value={props.chainId}
            disabled={props.current || props.disabled}
        >
            <svg
                className="dropdown-menu-item__svg"
                fill="currentColor"
                viewBox={props.viewBox}
            >
                <path d={props.d} />
            </svg>
            <span className={`dropdown-menu-item__name ${props.disabled && "disabled"}`}>
                {props.name}
            </span>
        </button>
    )
}

export default DropdownMenuItem