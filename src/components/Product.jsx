import { BsFillCartCheckFill, BsCartXFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { addToCart, removeFromCart } from "../features/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import toast from "react-hot-toast"
import { AddToCartToast, RemoveFromCartToast } from "../components"

const Product = ({
  img,
  model,
  brand,
  otherImgs,
  price,
  id,
  memoryCapacity,
  quantity,
}) => {
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const addToast = () =>
    toast.custom(<AddToCartToast brand={brand} model={model} img={img} />)
  const removeToast = () =>
    toast.custom(<RemoveFromCartToast brand={brand} model={model} img={img} />)

  return (
    <div className="border-2 border-gray-300 hover:border-gray-500 duration-300 ease-in-out">
      <Link to={`/products/phone/${id}`}>
        <div className="p-4 relative">
          <img
            src={otherImgs[0]}
            alt={`An Image of ${brand} ${model}`}
            className="object-contain w-full h-full"
          />
        </div>
      </Link>
      <div className="flex items-center bg-white justify-between p-4 ">
        <div className="">
          <p className="text-lg text-lime-600 font-semibold">
            {brand} {model}
          </p>
          <p className="mt-1 text-lg font-semibold text-red-800">
            ${price.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-2 self-end">
          {cart.findIndex((item) => item.id === id) < 0 ? (
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
              aria-label="Add to cart icon"
              className="text-yellow-500 hover:text-red-800 "
            >
              <BsFillCartCheckFill className="w-8 h-8" />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(removeFromCart(id))
                removeToast()
              }}
              type="button"
              className="text-gray-500 hover:text-red-800 "
              aria-label="Remove from cart icon"
            >
              <BsCartXFill className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
