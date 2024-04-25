import React from "react"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { TrendingPhone } from "./"
import { useSelector } from "react-redux"

const TrendingSlider = () => {
  const { smartPhones } = useSelector((state) => state.products)
  const trendingPhones = smartPhones.filter(
    (phone) => phone.rating >= 4
  )

  const slideBackward = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft - 304
  }

  const slideForward = () => {
    let slider = document.getElementById("slider")
    slider.scrollLeft = slider.scrollLeft + 304
  }

  return (
    <div className="pb-40">
      <div className="mx-auto py-0 px-6 max-w-screen-2xl">
        <h3 className="font-semibold mb-6 text-2xl text-lime-600 underline">
          Trending Now
        </h3>
        <div
          className="flex gap-11 overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth relative"
          id="slider"
        >
          {trendingPhones.map((phone) => (
            <TrendingPhone key={phone.id} {...phone} />
          ))}
        </div>
        <div className="flex gap-2 items-start xl:gap-4 mt-6 justify-end mr-2">
          <button title="scroll left" type="button" onClick={slideBackward}>
            <BsArrowLeftSquareFill className="w-10 h-10 hover:text-red-800" />
          </button>
          <button title="scroll right" type="button" onClick={slideForward}>
            <BsArrowRightSquareFill className="w-10 h-10 hover:text-red-800" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrendingSlider
