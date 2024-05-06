import { Link } from "react-router-dom"
import { CheckoutItem } from "../components"
import { useSelector } from "react-redux"
import { PiArrowFatLinesLeftFill } from "react-icons/pi"

const Checkout = () => {
  const { cart, shippingEstimate, price } = useSelector((state) => state.cart)
  return (
    <section className="container xl:max-w-screen-xl mx-auto p-6">
      <Link
        to="/cart"
        className="flex mb-1 font-medium text-gray-600 hover:text-red-800 group text-lg"
      >
        <PiArrowFatLinesLeftFill className="w-7 h-7 group-hover:-translate-x-1 transition-transform duration-500 ease-in-out" />
        Cart
      </Link>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-600 mb-8 border-b-2">
        Checkout
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20">
        <div className="mt-4">
          <h3 className="text-3xl font-medium text-red-800 mb-4 md:mb-6">
            Cart summary
          </h3>
          <ul className="divide-y divide-gray-300 border-y border-gray-300">
            {cart.map((item) => (
              <CheckoutItem key={item.id} {...item} />
            ))}
          </ul>
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-2xl font-medium text-gray-500">Subtotal:</h3>
            <p className="text-2xl font-medium text-yellow-500">${price}</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-medium text-gray-500">Shipping: </h3>
            <p className="text-2xl font-medium text-yellow-500">
              ${cart <= 0 ? 0 : price <= 1200 ? shippingEstimate : 0}
            </p>
          </div>
          <div className="mt-4 flex justify-between items-center border-b-2 border-gray-400 ">
            <h3 className="text-3xl font-bold text-gray-600">Total: </h3>
            <p className="text-3xl font-bold text-yellow-500">
              $
              {cart <= 0
                ? 0
                : price <= 1200
                  ? `${(price + shippingEstimate).toFixed(2)}`
                  : price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-3xl font-medium text-red-800 mb-4 md:mb-6">
            Complete your order
          </h3>
          <form
            action=""
            className="border rounded-md shadow-sm p-6 border-gray-300 bg-white"
          >
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-600 mb-4">
                Personal Details
              </h3>
              <div className="grid grid-col-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="relative flex items-center">
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                    autoComplete="no"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                    className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                    autoComplete="no"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                    autoComplete="no"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    required
                    type="number"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                    autoComplete="no"
                  />
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-600 mb-4">
                Shipping Address
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  placeholder="Address"
                  id="address"
                  name="address"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  autoComplete="no"
                />
                <input
                  required
                  type="text"
                  placeholder="Country"
                  id="country"
                  name="country"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  autoComplete="no"
                />
                <input
                  required
                  type="text"
                  placeholder="City"
                  id="city"
                  name="city"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  autoComplete="no"
                />
                <input
                  required
                  type="text"
                  placeholder="Zip Code"
                  id="zipCode"
                  name="zipCode"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  autoComplete="no"
                />
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-600 mb-4">
                Payment Information
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  placeholder="Cardholder's Name"
                  id="cardholdersName"
                  name="cardholdersName"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                />
                <input
                  required
                  type="number"
                  placeholder="Card Number"
                  id="cardNumber"
                  name="cardNumber"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                />
                <input
                  required
                  type="number"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="Expiration Date"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                />
                <input
                  required
                  type="number"
                  id="securityCode"
                  name="securityCode"
                  placeholder="CVV"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                />
              </div>
            </div>
            <div className="flex mb-4 lg:mb-6">
              <input
                required
                id="consent"
                name="consent"
                type="checkbox"
                value="checked"
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-1 md:mr-2 xl:mr-3"
              />
              <label htmlFor="" className="text-gray-600">
                By placing this order I accept{" "}
                <em className="text-blue-600 font-semibold hover:underline cursor-pointer">
                  Terms and Conditions
                </em>
                .
              </label>
            </div>
            <button
              className="bg-lime-500 hover:bg-lime-600 text-white text-xl font-bold p-2 rounded focus:outline-none focus:shadow-outline w-full"
              type="button"
            >
              Place order
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Checkout
