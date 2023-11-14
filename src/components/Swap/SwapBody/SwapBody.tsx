import CurrencyInput from "../../TokenInput/TokenInput"
import { SwapBodyProps } from "./SwapBody.types"
import "./SwapBody.css"

const SwapBody = (props: SwapBodyProps) => {
    const handleClickArrow = () => props.disabled && props.changeTokens()

    return (
        <div className="swap-body">
            <CurrencyInput
                field={props.disabled ? "input" : "output"}
                tokenName={props.mainTokenName}
                balance={props.mainTokenBalance}
                value={props.mainTokenAmount}
                balanceLoading={props.balanceLoading}
                onBlur={props.onBlur}
            />

            <div className="swap-body__arrow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="swap-body__icon"
                    onClick={handleClickArrow}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                    />
                </svg>
            </div>

            <CurrencyInput
                field="output"
                tokenName={props.swapTokenName}
                value={props.swapTokenAmount}
                balance={props.swapTokenBalance}
                balanceLoading={props.balanceLoading}
                loading={props.swapTokenLoading}
            />
        </div>
    )
}

export default SwapBody