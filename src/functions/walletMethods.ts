import { toast } from "react-toastify";

export async function switchEthereumChain(chainId: string) {
    const address = await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
            "chainId": chainId
        }]
    }).catch((error) => {
        if (error.code == 4001)
            toast.error("Chain chang rejected")
        throw new Error(error.name)
    })

    if (address === undefined)
        throw new TypeError("Chain change failed");

    return address;
}
