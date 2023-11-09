import { useState } from "react"
import Button from "../Button/Button"
import SwapBody from "./SwapBody/SwapBody"
import SwapHeader from "./SwapHeader/SwapHeader"
import "./Swap.css"

let tokens = [
    {
        "name": "WETH"
    },
    {
        "name": "UNI"
    }
]

const Swap = () => {
    const [mainToken, setMainToken] = useState(tokens[0].name)
    const [swapToken, setSwapToken] = useState(tokens[1].name)
    const [currentSpread, setCurrentSpread] = useState(1)

    const changeTokens = () => {
        if (mainToken == "WETH") {
            setMainToken(tokens[1].name)
            setSwapToken(tokens[0].name)
        }
        else {
            setMainToken(tokens[0].name)
            setSwapToken(tokens[1].name)
        }
    }

    const onChangeSpread = (spread: number) => {
        setCurrentSpread(spread)
    }

    return (
        <div className="swap">
            <SwapHeader
                currentSpread={currentSpread}
                onChangeSpread={onChangeSpread}
            />

            <SwapBody
                mainToken={mainToken}
                swapToken={swapToken}
                changeTokens={changeTokens}
            />

            <div className="swap__ratio">
                {`1 WETH = ${0.001} UNI`}
            </div>

            <div className="swap__button">
                <Button
                    type={"swap"}
                    text={"Swap"}
                    onClick={() => console.log("123")} />
            </div >
        </div >
    )
}

export default Swap