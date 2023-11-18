import { SwapSpreadList } from "../SwapHeader.types"

export type SwapSettingsProps = {
    currentSpread: number
    swapSpreadList: Array<SwapSpreadList>
    onChangeSpread: (spread: number) => void
}
