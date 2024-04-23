import React from "react"
import { BsFillCartCheckFill, BsCartXFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { addToCart, removeFromCart } from "../features/cartSlice"
import { useDispatch, useSelector } from "react-redux"

const Product = ({ filteredSmartPhone }) => {
  const { cart } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  return (
    <div className="border-2 hover:border-gray-500 duration-300 ease-in-out">
      <Link
        onClick={() => window.top(0.0)}
        to={`/products/phone/${filteredSmartPhone.id}`}
      >
        <div className="p-4 w-full">
          <img
            src={filteredSmartPhone.otherImgs[0]}
            alt={`An Image of ${filteredSmartPhone.brand} ${filteredSmartPhone.model}`}
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex items-center bg-white justify-between p-4 ">
        <div className="">
          <p className="text-lg text-lime-600 font-semibold">
            {filteredSmartPhone.brand} {filteredSmartPhone.model}
          </p>
          <p className="mt-1 text-xl font-semibold text-red-800">
            ${filteredSmartPhone.price.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-2 self-end">
          {cart.findIndex((item) => item.id === filteredSmartPhone.id) < 0 ? (
            <button
              onClick={() => dispatch(addToCart(filteredSmartPhone))}
              className="text-yellow-500 hover:text-red-800 "
            >
              <BsFillCartCheckFill className="w-8 h-8" />
            </button>
          ) : (
            <button
              onClick={() => dispatch(removeFromCart(filteredSmartPhone.id))}
              className="text-gray-500 hover:text-red-800 "
            >
              <BsCartXFill className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
