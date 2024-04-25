import React from "react"
import { Link } from "react-router-dom"

const TrendingPhone = ({ id, img, brand, model, price }) => {
  return (
    <>
      <Link
        to={`/products/phone/${id}`}
        className="cursor-pointer border-2 border-gray-300 hover:border-gray-500 duration-300 ease-in-out"
      >
        <div className="w-64 pt-5 ">
          <img
            src={img}
            alt={`An Image of ${brand} ${model}`}
            className="object-contain"
          />
        </div>
        <div className="p-6">
          <p className="text-red-800 font-medium text-lg">
            {brand} {model}
          </p>
          <p className="mt-1 text-2xl font-semibold text-black">
            ${price.toFixed(2)}
          </p>
        </div>
      </Link>
    </>
  )
}

export default TrendingPhone
