import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { EmptyCart, CartItem, ClearCartToast } from "../components"
import { clearCart, cartTotal } from "../features/cartSlice"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Cart = () => {
  const { cart, price, shippingEstimate } = useSelector((state) => state.cart)
  const clearToast = () => toast.custom(<ClearCartToast />)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(cartTotal())
  }, [cart, price, shippingEstimate, dispatch])
  return (
    <div>
      <main className="mx-auto max-w-xl md:max-w-2xl px-6 pb-16 pt-16 lg:max-w-5xl xl:max-w-7xl lg:px-8">
        <h1 className="font-semibold text-4xl xl:text-3xl">Shopping Cart</h1>
        {cart.length > 0 ? (
          <button
            onClick={() => {
              dispatch(clearCart())
              clearToast()
            }}
            type="button"
            className="mt-1 shrink-0"
          >
            <span className="italic text-2xl xl:text-xl hover:text-red-800">
              (Clear cart)
            </span>
          </button>
        ) : (
          ""
        )}
        <form
          value=""
          action=""
          className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
        >
          <section className="lg:col-span-7">
            <h2 className="sr-only">Products in your shopping cart</h2>
            {cart <= 0 ? <EmptyCart /> : <CartItem />}
          </section>
          <section className="mt-16 rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-6 shadow-md sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium">Order summary</h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm">Subtotal</dt>
                <dd className="text-sm font-medium">${price}&nbsp;</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                <dt className="flex items-center text-sm">
                  <span>Shipping estimate</span>
                </dt>
                <dd className="text-sm font-medium">
                  ${cart <= 0 ? 0 : price <= 1200 ? shippingEstimate : 0}
                  &nbsp;
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-300 pt-4">
                <dt className="text-base font-medium">Order total</dt>
                <dd className="text-base font-medium">
                  $
                  {cart <= 0
                    ? 0
                    : price <= 1200
                      ? `${price + shippingEstimate}`
                      : price}
                  &nbsp;
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <button
                onClick={() =>
                  navigate("/checkout", {
                    replace: true,
                  })
                }
                type="button"
                disabled={cart <= 0}
                className="text-white inline-flex items-center justify-center rounded-md text-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 py-2 px-4 w-full bg-gray-700 hover:bg-red-800 ease-in-out duration-300 disabled:bg-gray-700/70"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </main>
    </div>
  )
}

export default Cart
