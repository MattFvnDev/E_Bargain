import React from "react"
import { Link } from "react-router-dom"
import { Rating } from "../components"
import { addToCart } from "../features/cartSlice"
import { useDispatch } from "react-redux"

const PhoneCard = ({ phone }) => {
  const dispatch = useDispatch()
  return (
    <div className="border-2 rounded-md group overflow-hidden hover:border-gray-500 duration-300 ease-in">
      <Link onClick={() => window.top(0.0)} to={`/products/phone/${phone.id}`}>
        <div className="relative w-full">
          <img
            src={phone.img}
            alt={`An Image of ${phone.model}`}
            className="object-contain py-6"
          />
        </div>
      </Link>
      <div className="p-6 bg-white">
        <p className="text-lg font-semibold">
          {phone.brand} {phone.model}
        </p>
        <Rating rating={phone.rating} ratingLeft={phone.ratingLeft} />
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-600">Price</p>
            <p className="text-lg font-semibold">${phone.price}.00</p>
          </div>
          <button
            onClick={() => dispatch(addToCart(phone))}
            className="bg-lime-500 border mt-2 rounded-lg py-1 px-4 font-semibold hover:bg-lime-600 duration-300 ease-in-out text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhoneCard
