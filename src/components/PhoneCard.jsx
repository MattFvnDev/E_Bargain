import { Link } from "react-router-dom"
import { Rating, AddToCartToast } from "../components"
import { addToCart } from "../features/cartSlice"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"

const PhoneCard = ({
  id,
  img,
  model,
  brand,
  rating,
  ratingLeft,
  price,
  memoryCapacity,
  quantity,
}) => {
  const addToast = () =>
    toast.custom(<AddToCartToast brand={brand} model={model} img={img} />)

  const dispatch = useDispatch()
  return (
    <div className="border-2 rounded-md group overflow-hidden hover:border-gray-500 duration-300 ease-in">
      <Link to={`/products/phone/${id}`}>
        <div className="relative">
          <img
            src={img}
            alt={`An Image of ${model}`}
            className="object-contain w-full h-full py-6"
          />
        </div>
      </Link>
      <div className="p-6 bg-white">
        <p className="text-lg font-semibold">
          {brand} {model}
        </p>
        <Rating rating={rating} ratingLeft={ratingLeft} />
        <div className="mt-4 flex items-center justify-between space-x-2">
          <div>
            <p className="text-gray-600">Price</p>
            <p className="text-lg font-semibold">${price.toFixed(2)}</p>
          </div>
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id,
                  brand,
                  model,
                  price,
                  img,
                  quantity,
                  memoryCapacity,
                })
              )
              addToast()
            }}
            type="button"
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