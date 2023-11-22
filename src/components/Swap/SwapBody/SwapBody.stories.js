import SwapBody from "./SwapBody"

export default {
  title: "Components/Swap/SwapBody",
  component: SwapBody,
  argTypes: {
    changeTokens: {
      action: "onClick",
    }
  }
}

const Template = (args) => <SwapBody {...args} />

export const Default = Template.bind({})

Default.args = {
  mainToken: "UNI",
  swapToken: "WETH"
}
