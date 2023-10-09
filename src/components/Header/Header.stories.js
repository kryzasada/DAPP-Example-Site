import Header from "./Header"

export default {
  title: "Components/Controls/Header",
  component: Header
}

const Template = (args) => <Header {...args} />

export const Main = Template.bind({})

Main.args = {
  backgroundColor: "#888",
  children: <></>,
}