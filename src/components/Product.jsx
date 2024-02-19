import React from "react"
import { Link } from "react-router-dom"

const Product = ({ id, otherImgs, brand, model, price }) => {
  return (
    <div className="border-2 hover:border-gray-500 duration-300 ease-in-out">
      <Link onClick={() => window.top(0.0)} to={`/products/phone/${id}`}>
        <div className="p-4 w-full">
          <img
            src={otherImgs[0]}
            alt={`An Image of ${model}`}
            className="object-contain"
          />
        </div>
        <div className="p-4 bg-white">
          <p className="text-lg text-lime-600 font-semibold">
            {brand} {model}
          </p>
          <p className="mt-1 text-xl font-semibold text-red-800">
            ${price}.00
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Product
