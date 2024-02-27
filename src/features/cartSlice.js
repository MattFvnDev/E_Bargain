import { createSlice } from "@reduxjs/toolkit"
import { smartPhones } from "../constants"

const initialState = {
  cart: [],
  products: smartPhones,
  quantity: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
})

export default cartSlice.reducer
