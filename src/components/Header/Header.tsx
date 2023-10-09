import { HeaderProps } from "./Header.types"

const Header = (props: HeaderProps) => {
  const { children, backgroundColor = "#888" } = props
  const className = `bg-[${backgroundColor}] h-20 flex justify-end px-5 items-center`

  return (
    <header className={className}>
      {children}
    </header>
  )
}

export default Header
