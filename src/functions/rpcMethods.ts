import { toast } from "react-toastify"

export async function requestAccounts() {

    const address = await window.ethereum.request({
        method: "eth_requestAccounts",
    }).catch((error) => {
        if (error.code == 4001)
            toast.error("Metamask connections rejected")
        throw new Error(error.name)
    })

    if (address === undefined || address === null)
        throw new TypeError("Wallet address is an undefined type")

    return address.toString()
}

export async function chainId() {
    const address = await window.ethereum.request({
        method: "eth_chainId",
    })

    if (address === undefined || address === null)
        throw new TypeError("Chain id is an undefined type")

    return address.toString()
}

