import { useEffect, useState } from "react"
import { Networks } from "../MenuAfterConnection.types"
import { networkFromNetworksList } from "../MenuAfterConnection.functions"
import { CurrentNetworkIconProps } from "./CurrentNetworkIcon.types"
import { NetworkIcon } from "./NetworkIcon/NetworkIcon"

const CurrentNetworkIcon = (props: CurrentNetworkIconProps) => {
    const { chainId, networks } = props
    const [currentNetwork, setCurrentNetwork] = useState<Networks>()

    useEffect(() => {
        let network = networkFromNetworksList(chainId, networks)
        if (network !== undefined)
        setCurrentNetwork(network)
    }, [chainId, networks])

    return (
        currentNetwork === undefined
            ? <NetworkIcon
                strokeWidth={"2"}
                viewBox={"0 0 22 24"}
                d={"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}
                fill="none"
            />
            : <NetworkIcon
                strokeWidth={"1"}
                viewBox={currentNetwork.viewBox}
                d={currentNetwork.d}
                fill="currentColor"
            />
    )
}

export default CurrentNetworkIcon
