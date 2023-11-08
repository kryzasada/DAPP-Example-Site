import MenuAfterConnection from "./MenuAfterConnection"
import networks from "../../json/networks.json"

export default {
    title: "Components/Menu/MenuAfterConnection",
    component: MenuAfterConnection
}

export const Default = (args) => <MenuAfterConnection {...args} />

Default.args = {
    networks: networks
}
