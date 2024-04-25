import React from "react"
import { FaRegCheckCircle } from "react-icons/fa"
import { TechSpecs, SmallImages } from "../components"

const Details = ({
  model,
  brand,
  price,
  img,
  otherImgs,
  memoryCapacity,
  display,
  ram,
  chip,
  cameraMain,
  cameraFront,
  operatingSystem,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center space-y-48 md:space-y-0 md:space-x-4 lg:space-x-16">
      <SmallImages img={img} otherImgs={otherImgs} model={model} />
      <div className="w-full flex-1 max-w-md border border-opacity-50 rounded-md shadow-lg p-6 bg-white">
        <h2 className="text-3xl font-semibold">
          {brand} {model}
          <p className="pt-3 flex items-center space-x-2">
            <FaRegCheckCircle className="text-lime-500" />
            <span className="font-semibold">In stock</span>
          </p>
        </h2>
        <TechSpecs
          memoryCapacity={memoryCapacity}
          display={display}
          ram={ram}
          chip={chip}
          cameraMain={cameraMain}
          cameraFront={cameraFront}
          operatingSystem={operatingSystem}
        />
        <div className="my-4 border-y py-4">
          <p className="text-gray-500">Price:</p>
          <p className="text-xl font-semibold">${price.toFixed(2)}</p>
        </div>
        <button
          type="button"
          className="w-full font-semibold uppercase mt-4 boder border-lime-500 py-2 px-6 text-lg bg-lime-500 hover:bg-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Details
