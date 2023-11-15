import { ButtonProps } from "./Button.types"
import "./Button.css"

const Button = (props: ButtonProps) => {
    const { type, text, disabled = false, pending = false, onClick } = props

    return (
        <button
            onClick={onClick}
            className={`button button--${type}`}
            disabled={disabled || pending}
        >
            {pending
                ? "Loading"
                : text
            }
        </button>
    )
}

export default Button
