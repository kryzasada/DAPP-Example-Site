import { NetworkIconProps } from "./NetworkIcon.types"
import './NetworkIcon.css'

export const NetworkIcon = (props: NetworkIconProps) => {
    return (
        <svg
            viewBox={props.viewBox}
            className="networkIcon"
            fill={props.fill}
            stroke="currentColor"
            strokeWidth={props.strokeWidth}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={props.d} />
        </svg>
    )
}
