import React from "react"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { smartPhones } from "../constants"
import { TrendingPhone } from "./"

const TrendingSlider = () => {
  const trendingPhones = smartPhones.filter(
    (trendingPhone) => trendingPhone.id >= 7
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
        <div className="flex justify-between">
          <h3 className="font-semibold mb-12 text-2xl text-lime-600 underline">Trending Now</h3>
          <div className="flex gap-2 items-start xl:gap-4">
            <button title="scroll left" onClick={slideBackward}>
              <BsArrowLeftSquareFill className="w-10 h-10 hover:text-red-800" />
            </button>
            <button title="scroll right" onClick={slideForward}>
              <BsArrowRightSquareFill className="w-10 h-10 hover:text-red-800" />
            </button>
          </div>
        </div>
        <div
          className="flex gap-11 overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth relative"
          id="slider"
        >
          {trendingPhones.map((trendingPhone) => (
            <TrendingPhone key={trendingPhone.id} {...trendingPhone} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingSlider
