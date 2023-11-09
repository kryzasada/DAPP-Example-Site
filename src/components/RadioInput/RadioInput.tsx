import { RadioInputProps } from "./RadioInput.types"
import "./RadioInput.css"

const RadioInput = (props: RadioInputProps) => {
    const { value, checked, onClick } = props

    return (
        <div className="radio-input">
            <input
                type="radio"
                name="option"
                id={`spread-radio-${value}`}
                value={value}
                className="radio-input__input"
                onChange={onClick}
                checked={checked}
            />
            <label
                htmlFor={`spread-radio-${value}`}
                className={`radio-input__label ${checked ? 'radio-input__label--checked' : ''}`}
            >
                {value}
            </label>
        </div>
    )
}


export default RadioInput