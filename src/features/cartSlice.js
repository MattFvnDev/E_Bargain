import { createSlice } from "@reduxjs/toolkit"
import { smartPhones } from "../constants"

const initialState = {
  cart: [],
  smartPhones: smartPhones,
  quantity: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let itemInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      )
      {
        itemInCart >= 0
          ? (state.cart[itemInCart].quantity += 1)
          : state.cart.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = action.payload
      state.cart = state.cart.filter((item) => item.id !== itemInCart)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
