import { ButtonProps } from "./Button.types"
import "./Button.css"

const Button = (props: ButtonProps) => {
    const { type, text, onClick } = props

    return (
        <button
            onClick={onClick}
            className={`button button--${type}`}
        >
            {text}
        </button>
    )
}

export default Button
