import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { HiOutlineTruck } from "react-icons/hi2"
import { RxCross1 } from "react-icons/rx"

const CartItem = () => {
  const itemInCart = useSelector((state) => state.products.cart)
  return (
    <ul className="divide-y divide-gray-300 border-y border-gray-300">
      {itemInCart.map((item, id) => (
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
                    <Link to={`/products/phone/${id}`} className="font-medium">
                      {item.brand} {item.model}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-bold md:text-base">
                  ${item.price.toFixed(2)}&nbsp;
                </p>
                <p className="mt-1 text-sm font-medium md:text-base">
                  Storage:
                  <strong> {item.memoryCapacity} GB</strong>
                </p>
              </div>
              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor="quantity-1" className="sr-only"></label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  className="flex h-10 rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 w-16"
                />
                <div className="absolute right-0 top-0">
                  <button className="items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background h-10 -mr-2 inline-flex p-2">
                    <span className="sr-only">Remove</span>
                    <RxCross1 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <p className="mt-4 flex space-x-2 text-sm">
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
