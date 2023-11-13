export const getButtonText = (
    isConnection: boolean,
    isNetwork: boolean
): string => {
    if (!isConnection)
        return "Connect metamask"
    else if (!isNetwork)
        return "Change network"
    else
        return "Swap"
}