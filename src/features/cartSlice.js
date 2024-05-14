import { createSlice, createSelector } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

const selectedPhones = (state) => state.products
const cart = (state) => state.cart

export const selectedPhonesCart = createSelector(
  selectedPhones,
  cart,
  (phones, cart) => {
    return phones.filter((phone) => cart.includes(phone.id))
  }
)

const initialState = {
  cart: [],
  shippingEstimate: 25,
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
    clearCart: (state) => {
      state.cart = []
      toast.success("Cart has been cleared")
    },
    cartTotal: (state) => {
      let { quantity, price } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem
          const itemTotal = price * quantity
          cartTotal.price += itemTotal
          cartTotal.quantity += quantity
          return cartTotal
        },
        {
          price: 0,
          quantity: 0,
        }
      )
      state.price = parseInt(price)
      state.quantity = quantity
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
  cartTotal,
} = cartSlice.actions

export default cartSlice.reducer
