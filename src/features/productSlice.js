import { createSlice } from "@reduxjs/toolkit"
import { smartPhones } from "../constants"

const initialState = {
  smartPhones: smartPhones,
}

const productSlice = createSlice({
  name: "smartPhones",
  initialState,
})

export default productSlice.reducer
