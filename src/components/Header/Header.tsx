import { HeaderProps } from "./Header.types"
import './Header.css'

const Header = (props: HeaderProps) => {

  return (
    <header
      className="header"
    >
      {props.children}
    </header>
  )
}

export default Header
