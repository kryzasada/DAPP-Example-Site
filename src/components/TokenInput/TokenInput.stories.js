import TokenInput from "./TokenInput"

export default {
  title: "Components/Input/TokenInput ",
  component: TokenInput
}

const Template = (args) => <TokenInput {...args} />

export const Default = Template.bind({})

Default.args = {
  field: "input",
  tokenName: "ETH",
  balance: 0
}
