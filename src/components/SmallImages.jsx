import { useState } from "react"

const SmallImages = ({ img, otherImgs, model}) => {
  const [image, setImage] = useState(img)
  const changeImage = (e) => {
    setImage(e.target.src)
  }
  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] md:mb-24 lg:mb-40">
      <img
        src={image}
        alt={`An Image of ${model}`}
        className="w-90 h-90"
      />
      <div className="flex justify-center items-center mt-16 lg:mt-20">
        <img
          onMouseOver={changeImage}
          src={img}
          alt={`An Image of ${model}`}
          className="w-24 h-24 lg:w-28 lg:h-28 object-cover cursor-pointer hover:scale-110 ease-in-out duration-300"
        />
        <img
          onMouseOver={changeImage}
          src={otherImgs[0]}
          alt={`An Image of ${model}`}
          className="w-24 h-24 lg:w-28 lg:h-28 object-cover cursor-pointer hover:scale-110 ease-in-out duration-300"
        />
        <img
          onMouseOver={changeImage}
          src={otherImgs[1]}
          alt={`An Image of ${model}`}
          className="w-24 h-24 lg:w-28 lg:h-28 object-cover cursor-pointer hover:scale-110 ease-in-out duration-300"
        />
      </div>
    </div>
  )
}

export default SmallImages
