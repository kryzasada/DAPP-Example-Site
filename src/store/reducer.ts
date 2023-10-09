import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
  address: string
  chainId: string
}

const initialState: initialState = {
  address: "",
  chainId: "",
}

type setPayloadAction = {
  address: string
  chainId: string
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    set: (state, data: PayloadAction<setPayloadAction>) => {
      state.address = data.payload.address
      state.chainId = data.payload.chainId
    },
    setChainId: (state, chainId: PayloadAction<string>) => {
      state.chainId = chainId.payload
    },
    reset: (state) => {
      state.address = ""
      state.chainId = ""
    }
  }
})

export const { set, setChainId, reset } = walletSlice.actions
export default walletSlice.reducer