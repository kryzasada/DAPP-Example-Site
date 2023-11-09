import CurrencyInput from "../../TokenInput/TokenInput"
import { SwapBodyProps } from "./SwapBody.types"
import "./SwapBody.css"

const SwapBody = (props: SwapBodyProps) => {
    const { mainToken, swapToken, changeTokens } = props

    return (
        <div className="swap-body">
            <CurrencyInput
                field="input"
                tokenName={mainToken}
                getSwapPrice={() => { }}
                balance={0}
            />

            <div className="swap-body__arrow">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="swap-body__icon"
                    onClick={changeTokens}
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
                tokenName={swapToken}
                // value={0}
                balance={0}
                loading={false}
            />
        </div>
    )
}

export default SwapBody