import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
  address: string
}

const initialState: initialState = {
  address: "",
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: initialState,
  reducers: {
    set: (state, address: PayloadAction<string>) => {
      state.address = address.payload
    },
    reset: (state) => {
      state.address = ""
    }
  },
})

export const { set, reset } = walletSlice.actions
export default walletSlice.reducer