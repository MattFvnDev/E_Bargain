import React from "react"
import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Product = ({ model, brand, otherImgs, price, id }) => {
  return (
    <div className="border-2 border-gray-300 hover:border-gray-500 duration-300 ease-in-out">
      <Link onClick={() => window.top(0.0)} to={`/products/phone/${id}`}>
        <div className="p-4 w-full">
          <img
            src={otherImgs[0]}
            alt={`An Image of ${brand} ${model}`}
            className="object-contain"
          />
        </div>
      </Link>
      <div className="flex items-center bg-white justify-between p-4 ">
        <div className="">
          <p className="text-lg text-lime-600 font-semibold">
            {brand} {model}
          </p>
          <p className="mt-1 text-lg font-semibold text-red-800">
            ${price.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-2 self-end">
          <button className="text-yellow-500 hover:text-red-800 ">
            <BsFillCartCheckFill className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product