import SwapHeader from "./SwapHeader"

export default {
  title: "Components/Swap/SwapHeader",
  component: SwapHeader
}

const Template = (args) => <SwapHeader {...args} />

export const Default = Template.bind({})

Default.args = {
  currentSpread: 1
}
