import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { HiMiniShoppingCart } from "react-icons/hi2"
import { BsBoxes } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { cartTotal } from "../features/cartSlice"

const Navbar = () => {
  const { cart, quantity, price } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cartTotal())
  }, [dispatch, cart, quantity, price])
  return (
    <nav className="flex flex-row space-x-4 md:space-x-6">
      <NavLink
        className="flex items-center text-gray-600 hover:text-red-800 group"
        to="products"
      >
        <span className="hidden text-2xl font-bold md:inline-flex">
          Products
        </span>
        <BsBoxes className="w-7 h-7 flex-shrink-0 md:hidden group-hover:scale-110" />
      </NavLink>
      <NavLink
        to="cart"
        className="flex items-center space-x-1 text-gray-600 hover:text-red-800"
      >
        <div className="relative">
          <HiMiniShoppingCart className="w-7 h-7 flex-shrink-0" />
        </div>
        <p className="text-xl">
          ${price} <span className="text-base text-gray-500">({quantity})</span>
        </p>
      </NavLink>
    </nav>
  )
}

export default Navbar