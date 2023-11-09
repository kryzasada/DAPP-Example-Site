import RadioInput from "./RadioInput"

export default {
  title: "Components/Input/RadioInput",
  component: RadioInput,
  argTypes: {
    onClick: {
      action: "onClick",
    }
  }
}

const Template = (args) => <RadioInput {...args} />

export const Default = Template.bind({})

Default.args = {
  value: "0.5",
  checked: true
}
