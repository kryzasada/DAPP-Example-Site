import Button from "./Button"

export default {
  title: "Components/Button/Button",
  component: Button,
  argTypes: {
    onClick: {
      action: "onClick",
    }
  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
export const Swap = Template.bind({})


Default.args = {
  type: "default",
  text: "Click me",
  disabled: false
}

Swap.args = {
  type: "swap",
  text: "Swap me",
  disabled: false
}
