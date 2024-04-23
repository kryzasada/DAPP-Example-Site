# NextJS Example Site


Decentralized application for cryptocurrency swapping, combining ethers.js for blockchain interaction and the Uniswap API for accessing liquidity pools.

[Demo](https://swap-dapp-kryzasada.vercel.app/)

## Important notes

Please note that this demo operates on the Sepolia test network. You will require Wrapped Ethereum (WETH). For swapping ETH for WETH, you can use the Uniswap platform: https://app.uniswap.org/swap?chain=sepolia.

Currently, the demo allows you to convert WETH to UNI and vice versa.

## Download and run

### Main app
1. Clone repository
    ```cmd
    git clone https://github.com/kryzasada/Swap-DApp
    ```

2. Change to the cloned repository's directory
    ```cmd
    cd Swap-DApp
    ```

3. Install dependencies
    ```cmd
    npm install
    ```

4. Start the application
    ```cmd
    npm run start
    ```

5. Open a web browser and go to [http://localhost:3000](http://localhost:3000/)

### Storybook

1. Start the storybook
    ```cmd
    npm run storybook
    ```
2. Open a web browser and go to [http://localhost:6006](http://localhost:6006/)


## Environment Variable

```js
// Infura API URL key
REACT_APP_INFURA_URL = "https://sepolia.infura.io/v3/YOUR_INFURA_KEY"
```
