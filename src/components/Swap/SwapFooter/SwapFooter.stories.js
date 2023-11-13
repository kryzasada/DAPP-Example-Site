import SwapFooter from "./SwapFooter"

export default {
  title: "Components/Swap/SwapFooter",
  component: SwapFooter,
  argTypes: {
    handleClick: {
      action: "onClick",
    }
  }
}

const Template = (args) => <SwapFooter {...args} />

export const Default = Template.bind({})

Default.args = {
  mainToken: "ETH",
  swapToken: "WETH",
  ratio: 1.01,
  isNetwork: true,
  isConnection: true,
}