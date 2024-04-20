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
    decreaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    },
    increaseQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    },
  },
})

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } =
  cartSlice.actions

export default cartSlice.reducer
