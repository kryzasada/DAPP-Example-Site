import { configureStore } from '@reduxjs/toolkit'
import walletAddressReducer from './reducer'

const store = configureStore({
  reducer: walletAddressReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store