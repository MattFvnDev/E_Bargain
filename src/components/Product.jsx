import React from "react"
import { BsFillCartPlusFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const Product = ({ filteredSmartPhone }) => {
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
            ${filteredSmartPhone.price}.00
          </p>
        </div>
        <div className="flex gap-2 self-end">
          <button className="text-yellow-500 hover:text-red-800 ">
            <BsFillCartPlusFill className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
