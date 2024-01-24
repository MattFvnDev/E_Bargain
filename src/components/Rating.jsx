import React from "react"
import { HiStar, HiOutlineStar } from "react-icons/hi2"

const Rating = ({rating, ratingLeft}) => {
  return (
    <div className="flex items-center-ml-1">
      {Array.from({ length: rating }).map((_, index) => (
        <HiStar key={index} className="w-6 h-6 flex-shrink-0 text-yellow-400" />
      ))}
      {Array.from({ length: ratingLeft}).map((_, index) => (
        <HiOutlineStar
          key={index}
          className="w-6 h-6 flex-shrink-0 text-yellow-400"
        />
      ))}
    </div>
  )
}

export default Rating
