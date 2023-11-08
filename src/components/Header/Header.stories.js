import Header from "./Header"

export default {
  title: "Components/Header/Header",
  component: Header,
  parameters: {
    layout: "padded"
  },
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {
  children: <></>,
}