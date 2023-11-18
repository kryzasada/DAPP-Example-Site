import { useState } from 'react'
import { toast } from 'react-toastify'
import { metamaskInstalled } from './ButtonMetamask.functions'
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
        if (!metamaskInstalled()) {
            toast.error("Metamask not detected")
            return
        }

        const address = requestAccounts()
            .catch((error) => {
                if (error.code == 4001)
                    toast.error("Metamask connections rejected")
                throw new Error(error.message)
            })

        try {
            setLoading(true)
            let data = {
                address: await address,
                chainId: await chainId()
            }
            dispatch(set(data))
        } catch (error) {
            console.error(error)
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