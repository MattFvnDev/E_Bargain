import { FaRegCheckCircle } from "react-icons/fa"
import {
  TechSpecs,
  SmallImages,
  AddToCartToast,
  RemoveFromCartToast,
} from "../components"
import { addToCart, removeFromCart } from "../features/cartSlice"
import { useSelector, useDispatch } from "react-redux"
import toast from "react-hot-toast"

const Details = ({
  id,
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
  quantity,
}) => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const addToast = () =>
    toast.custom(<AddToCartToast brand={brand} model={model} img={img} />)
  const removeToast = () =>
    toast.custom(<RemoveFromCartToast brand={brand} model={model} img={img} />)
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
          className="w-full font-semibold uppercase mt-4 boder border-lime-500 py-2 px-6 text-lg bg-lime-500 hover:bg-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white"
        >
          Add to cart
        </button>
        {cart.findIndex((item) => item.id === id) < 0 ? (
          <div className="mt-[60px]"></div>
        ) : (
          <button
            onClick={() => {
              dispatch(removeFromCart(id))
              removeToast()
            }}
            type="button"
            className="w-full font-semibold uppercase mt-4 boder border-lime-500 py-2 px-6 text-lg bg-lime-500 hover:bg-lime-600 hover:border-lime-600 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white"
          >
            Remove <span className="hidden sm:inline-flex">from cart</span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Details
