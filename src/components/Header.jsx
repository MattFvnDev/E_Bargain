import React from "react"
import { NavLink } from "react-router-dom"
import { Logo } from "./"
import { HiMiniShoppingCart } from "react-icons/hi2"
import { BsBoxes } from "react-icons/bs"

const Header = () => {
  return (
    <header className="sticky top-0, bg-white z-20 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />

        <div className="flex flex-row space-x-4 md:space-x-6">
          <NavLink
            className="flex items-center text-gray-600 hover:text-red-800 group"
            to="products"
          >
            <span className="hidden text-2xl font-bold md:inline-block">
              Products
            </span>
            <BsBoxes className="w-7 h-7 flex-shrink-0 md:hidden group-hover:scale-110" />
          </NavLink>
          <NavLink
            to="cart"
            className="flex items-center space-x-2 text-gray-600 hover:text-red-800"
          >
            <div className="relative">
              <HiMiniShoppingCart className="w-7 h-7 flex-shrink-0" />
            </div>
            <p className="text-xl">
              $0.00 <span className="text-sm text-gray-500">(0)</span>
            </p>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header
