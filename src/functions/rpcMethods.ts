export async function requestAccounts() {
    const address = await window.ethereum.request({
        method: "eth_requestAccounts",
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

