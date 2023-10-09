
export async function switchEthereumChain(chainId: string) {
    const address = await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
            "chainId": chainId
        }]
    })

    if (address === undefined)
        throw new TypeError("Chain change failed");

    return address;
}
