import React from "react"
// import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs"
import { smartPhones } from "../constants"
import { TrendingPhone } from "./"

const TrendingSlider = () => {
  const trendingPhones = smartPhones.filter(
    (trendingPhone) => trendingPhone.id >= 8
  )
  return (
    <div className="pb-40">
      <div className="mx-auto py-0 px-6 max-w-screen-2xl">
        <div className="flex justify-between">
          <h3 className="font-semibold mb-16 text-2xl">Trending Now</h3>
          <div className="flex gap-2 items-start xl:gap-4">
            <button>
              <BsArrowLeftSquareFill className="w-10 h-10 hover:text-red-800" />
            </button>
            <button>
              <BsArrowRightSquareFill className="w-10 h-10 hover:text-red-800" />
            </button>
          </div>
        </div>
        <div className="flex gap-7 overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth relative">
          {trendingPhones.map((trendingPhone) => (
            <TrendingPhone key={trendingPhone.id} {...trendingPhone} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingSlider
