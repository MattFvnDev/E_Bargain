import React from "react"
import { Link } from "react-router-dom"
import { Rating } from "../components"

const PhoneCard = ({id, img, brand, model, price, rating, ratingLeft}) => {
  return (
    <Link
      onClick={() => window.top(0.0)}
      to={`/products/phone/${id}`}
      className="border-2 rounded-md group overflow-hidden hover:border-gray-500"
    >
      <div className="relative w-full">
        <img
          src={img}
          alt={`An Image of ${model}`}
          className="object-contain py-6"
        />
      </div>
      <div className="p-6 bg-white">
        <p className="text-lg font-semibold">
          {brand} {model}
        </p>
        <Rating rating={rating} ratingLeft={ratingLeft} />
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-600">Price</p>
            <p className="text-lg font-semibold">${price}.00</p>
          </div>
          <button className="border rounded-lg py-1 px-4 font-semibold hover:bg-lime-500 hover:border-lime-500 focus:ring-4 focus: ring-opacity-50 focus:ring-lime-500 hover:text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default PhoneCard
