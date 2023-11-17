import ButtonMetamask from "../../components/ButtonMetamask/ButtonMetamask"
import Header from "../../components/Header/Header"
import MenuAfterConnection from "../../components/MenuAfterConnection/MenuAfterConnection"
import { useAppSelector } from "../../hooks/store"
import networks from '../../json/networks.json'
import { DefaultPageProps } from "./DefaultPage.types"
import "./DefaultPage.css"

const DefaultPage = (props: DefaultPageProps) => {
    const wallet = useAppSelector((state) => state.address)

    return (
        <div className="defaultPage">
            <Header>
                {
                    !!wallet
                        ? <MenuAfterConnection networks={networks} />
                        : <ButtonMetamask />
                }
            </Header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default DefaultPage