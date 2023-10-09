import { DropdownMenuItemProps } from "./DropdownMenuItem.types"
import "./DropdownMenuItem.css"

const DropdownMenuItem = (props: DropdownMenuItemProps) => {
    return (
        <button
            onClick={props.onClick}
            className="dropdownMenuItem"
            value={props.chainId}
            disabled={props.disabled}
        >
            <svg
                className="dropdownMenuItem__svg"
                fill="currentColor"
                viewBox={props.viewBox}
            >
                <path d={props.d} />
            </svg>
            <span className="dropdownMenuItem__name">
                {props.name}
            </span>
        </button>
    )
}

export default DropdownMenuItem