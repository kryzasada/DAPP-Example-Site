import Button from "../../Button/Button"
import { SwapFooterProps } from "./SwapFooter.types"
import { getButtonText } from "./SwapFooter.functions"
import "./SwapFooter.css"

const SwapFooter = (props: SwapFooterProps) => {
    const { mainToken, swapToken, ratio, isNetwork, isConnection, transactionPending, handleClick } = props
    const disabled = !isNetwork || !isConnection || transactionPending

    const buttonText = getButtonText(isConnection, isNetwork)

    return (
        <div className="swap-footer">
            {!!ratio &&
                <div className="swap-footer__ratio">
                    {`1 ${mainToken} = ${ratio} ${swapToken}`}
                </div>
            }

            <div className="swap-footer__button">
                <Button
                    type={"swap"}
                    text={buttonText}
                    disabled={disabled}
                    pending={transactionPending}
                    onClick={handleClick} />
            </div>
        </div>
    )
}

export default SwapFooter
