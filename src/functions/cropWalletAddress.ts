export default function cropWalletAddress(address: string) {
    const start = address.slice(0, 6)
    const end = address.slice(-4)
    return `${start}...${end}`
}
