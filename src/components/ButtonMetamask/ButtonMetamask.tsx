import { useState } from 'react'
import { chainId, requestAccounts } from '../../functions/rpcMethods'
import { useAppSelector, useAppDispatch } from '../../hooks/store'
import { set } from '../../store/reducer'
import './ButtonMetamask.css'

const ButtonMetamask = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const wallet = useAppSelector((state) => state.address)
    const message = !!wallet ? "Connected" : "Connect MetaMask"

    const dispatch = useAppDispatch()

    const handleConnect = async () => {
        try {
            setLoading(true)
            let data = {
                address: await requestAccounts(),
                chainId: await chainId()
            }
            dispatch(set(data))
        } catch (error) {
            alert("Error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <button className="button-metamask" onClick={handleConnect}>
            {
                loading
                    ? <div className="button-metamask__loading" />
                    : message
            }
        </button>
    )
}

export default ButtonMetamask