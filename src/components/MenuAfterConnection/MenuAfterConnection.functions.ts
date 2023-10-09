import { Networks } from "./MenuAfterConnection.types";

export function networkFromNetworksList(chainId: string, networks: Array<Networks>) {
    return networks.filter(obj => {
        return obj.chainId === chainId
    })[0]
}
