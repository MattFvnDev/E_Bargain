import { React } from "react"

const SmallImages = ({ changeImage, phoneDetails }) => {
  return (
    <>
      <img
        onMouseOver={changeImage}
        src={phoneDetails[0].img}
        alt=""
        className="w-24 h-24 lg:w-28 lg:h-28 object-cover cursor-pointer"
      />
      <img
        onMouseOver={changeImage}
        src={phoneDetails[0].otherImgs[0]}
        alt=""
        className="w-24 h-24 lg:w-28 lg:h-28 object-cover cursor-pointer"
      />
      <img
        onMouseOver={changeImage}
        src={phoneDetails[0].otherImgs[1]}
        alt=""
        className="w-24 h-24 lg:w-28 lg:h-28 object-cover cursor-pointer"
      />
    </>
  )
}

export default SmallImages
