import RadioInput from "../../../RadioInput/RadioInput"
import { SwapSettingsProps } from "./SwapSettings.types"
import "./SwapSettings.css"

const SwapSettings = (props: SwapSettingsProps) => {

    const onChange = (e: any) => {
        props.onChangeSpread(Number(e.target.value))
    }

    return (
        <div
            className="swap-settings"
        >
            <div className="swap-settings__title">
                Spread
            </div>

            <div className="swap-settings__list">
                {props.swapSpreadList.map((data) =>
                    <RadioInput
                        value={data.value}
                        checked={props.currentSpread === data.value}
                        onClick={onChange}
                    />
                )}
            </div>
        </div>
    )
}

export default SwapSettings