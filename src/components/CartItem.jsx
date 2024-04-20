import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { HiOutlineTruck } from "react-icons/hi2"
import { RxCross1 } from "react-icons/rx"
import { FaMinus, FaPlus } from "react-icons/fa"
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  cartTotal,
} from "../features/cartSlice"

const CartItem = () => {
  const { cart } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cartTotal())
  }, [cart, dispatch])

  return (
    <ul className="divide-y divide-gray-300 border-y border-gray-300">
      {cart?.map((item, id) => (
        <li className="flex py-6 sm:py-10" key={id}>
          <div className="shrink-0">
            <img
              src={item.img}
              alt={`An image of ${item.brand} ${item.model} `}
              className="rounded-md object-cover object-center h-24 w-24 sm:h-36 sm:w-36"
            />
          </div>
          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm md:text-lg">
                    <Link
                      to={`/products/phone/${item.id}`}
                      className="font-medium"
                    >
                      {item.brand} {item.model}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-bold md:text-base text-yellow-500">
                  ${item.price.toFixed(2)}&nbsp;
                </p>
                <p className="mt-1 text-sm font-medium md:text-base ">
                  Storage:
                  <strong className="text-lime-600">
                    {" "}
                    {item.memoryCapacity} GB
                  </strong>
                </p>
                <div className="mt-2 sm:mt-3">
                  <p className="text-gray-500">Quantity:</p>
                  <div className="mt-2 flex items-center space-x-2">
                    <button
                      disabled={item.quantity <= 1}
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      type="button"
                      className="p-1 rounded-md hover:bg-red-100 hover:text-red-500"
                    >
                      <FaMinus className="w-6 h-6 flex-shrink-0" />
                    </button>
                    <p className="font-semibold text-xl">{item.quantity}</p>
                    <button
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      type="button"
                      className="p-1 rounded-md hover:bg-green-100 hover:text-green-500"
                    >
                      <FaPlus className="w-6 h-6 flex-shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:pr-10">
                <div className="absolute right-1 top-0">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    type="button"
                    className="items-center justify-center rounded-md font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background h-10 -mr-2 inline-flex p-2 hover:bg-gray-500 hover:text-white"
                  >
                    <span className="sr-only">Remove</span>
                    <RxCross1 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-2 flex space-x-2 text-sm">
              <HiOutlineTruck className="h-5 w-5 shrink-0" />
              <span>Ships in 1 week</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CartItem