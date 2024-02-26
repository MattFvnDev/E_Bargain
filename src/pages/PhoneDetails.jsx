import { React, useState } from "react"
import { useParams } from "react-router-dom"
import { SmallImages, TechSpecs } from "../components"
import { smartPhones } from "../constants"
import { FaRegCheckCircle, FaMinus, FaPlus } from "react-icons/fa"

const PhoneDetails = () => {
  const { id } = useParams()
  const phoneDetails = smartPhones.filter(
    (phoneDetails) => phoneDetails.id === parseInt(id)
  )
  const [count, setCount] = useState(1)
  const [image, setImage] = useState(phoneDetails[0].img)
  const changeImage = (e) => {
    setImage(e.target.src)
  }

  return (
    <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-48 md:space-y-0 md:space-x-4 lg:space-x-16">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] md:mb-24 lg:mb-40">
          <img src={image} alt="" className="w-90 h-90" />
          <div className="w-full flex justify-center items-center mt-16 lg:mt-20">
            <SmallImages
              changeImage={changeImage}
              phoneDetails={phoneDetails}
            />
          </div>
        </div>
        <div className="w-full flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 bg-white">
          <h2 className="text-3xl font-semibold">
            {phoneDetails[0].brand} {phoneDetails[0].model}
            <p className="pt-3 flex items-center space-x-2">
              <FaRegCheckCircle className="text-lime-500" />
              <span className="font-semibold">In stock</span>
            </p>
          </h2>
          <TechSpecs phoneDetails={phoneDetails} />
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-500">Price:</p>
            <p className="text-xl font-semibold">${phoneDetails[0].price}.00</p>
          </div>
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-500">Quantity:</p>
            <div className="mt-2 flex items-center space-x-3">
              <button
                disabled={count <= 1}
                onClick={() => setCount(count - 1)}
                className="p-1 rounded-md hover:bg-red-100 hover:text-red-500"
              >
                <FaMinus className="w-6 h-6 flex-shrink-0" />
              </button>
              <p className="font-semibold text-xl">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="p-1 rounded-md hover:bg-green-100 hover:text-green-500"
              >
                <FaPlus className="w-6 h-6 flex-shrink-0" />
              </button>
            </div>
          </div>
          <button className="w-full font-semibold uppercase mt-4 boder border-lime-500 py-2 px-6 text-lg bg-lime-500 hover:bg-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default PhoneDetails
