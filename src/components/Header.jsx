import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "./"
import { HiMiniShoppingCart } from "react-icons/hi2"

const Header = () => {
  return (
    <header className="sticky top-0, bg-white z-20 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <Link
          to="/cart"
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-800"
        >
          <div className="relative">
            <HiMiniShoppingCart className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-xl">
            $0.00 <span className="text-sm text-gray-500">(0)</span>
          </p>
        </Link>
      </div>
    </header>
  )
}

export default Header
