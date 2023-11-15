import { TokenInputProps } from "./TokenInput.types"
import { useEffect, useRef, useState } from "react"
import "./TokenInput.css"

const TokenInput = (props: TokenInputProps) => {
    const [value, setValue] = useState(props.value?.toString())
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false)
    const timer = useRef<any>(null)

    useEffect(() => {
        setValue(props.value?.toString())
        setLoading(false)
    }, [props.value])

    useEffect(() => {
        clearTimeout(timer.current)
        if (props.value !== value)
            timer.current = setTimeout(() => {
                if (props.onBlur && amount !== 0 && amount !== undefined) {
                    setLoading(true)
                    return props.onBlur(amount)
                }
            }, 500)
        return () => clearTimeout(timer.current)
    }, [amount])

    const onClickBalance = () => {
        if (props.onBlur && Number(props.balance) > 0)
            props.onBlur(props.balance)

        setValue(props.balance.toString())
        setLoading(true)
    }

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value
        let numberInput = Number(input)
        if (!loading)
            if (input == "")
                setValue("")
            else if (!(isNaN(numberInput) || input.includes("-") || input.includes("e"))) {
                setValue(input)
                setAmount(numberInput)
            }
    }

    return (
        <div className="token-input">
            <div className="token-input__left_panel">
                {props.loading ? (
                    <div className="token-input__spinner">
                        "loading..."
                    </div>
                ) : (
                    <input
                        className="token-input__input"
                        placeholder="0.0"
                        value={value}
                        disabled={props.field == "input" ? false : true}
                        // onBlur={e => (props.field === 'input' ? getPrice(e.target.value) : null)}
                        onChange={onChangeValue}
                    />
                )}
            </div>
            <div className="token-input__right_panel">
                <span className="token-input__token-name">
                    {props.tokenName}
                </span>
                <div
                    className={`token-input__balance token-input__balance--${props.field}`}
                    onClick={props.field == "input" ? onClickBalance : () => { }}
                >
                    <span>
                        {props.balanceLoading
                            ? "loading"
                            : props.balance?.toFixed(3)
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}

export default TokenInput