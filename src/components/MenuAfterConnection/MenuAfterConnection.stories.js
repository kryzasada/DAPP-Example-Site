import MenuAfterConnection from "./MenuAfterConnection"
import networks from "../../json/networks.json"

export default {
    title: "Components/Controls/MenuAfterConnection",
    component: MenuAfterConnection
}

export const Main = (args) => <MenuAfterConnection {...args} />

Main.args = {
    networks: networks
}
