import { configureStore } from '@reduxjs/toolkit'
import auth from './features/authSlice'
import wishlist from "./features/wishlistSlice"
import cart from "./features/cartSlice"
import orders from "./features/ordersSlice"

export const store = configureStore({
  reducer: {
    auth,
    wishlist,
    cart,
    orders
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch