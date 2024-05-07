import { useState } from "react"
import { Link} from "react-router-dom"
import { CheckoutItem } from "../components"
import { useSelector } from "react-redux"
import { PiArrowFatLinesLeftFill } from "react-icons/pi"

const Checkout = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [cardholdersName, setCardholderName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [securityCode, setSecurityCode] = useState("")
  const [consent, setConsent] = useState(false)

  const { cart, shippingEstimate, price } = useSelector((state) => state.cart)
 

  const submitOrder = (e) => {
    e.preventDefault()
    const orderDetails = {
      firstName,
      lastName,
      emailAddress,
      phoneNumber,
      address,
      country,
      city,
      zipCode,
      cardholdersName,
      cardNumber,
      expirationDate,
      securityCode,
      consent,
    }
    
  }

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
            onSubmit={submitOrder}
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
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    id="emailAddress"
                    name="emailAddress"
                    className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                    autoComplete="no"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    name="phoneNumber"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                    className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                    autoComplete="no"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  required
                  type="text"
                  placeholder="Country"
                  id="country"
                  name="country"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  autoComplete="no"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
                <input
                  required
                  type="text"
                  placeholder="City"
                  id="city"
                  name="city"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  autoComplete="no"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  required
                  type="text"
                  placeholder="Zip Code"
                  id="zipCode"
                  name="zipCode"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  autoComplete="no"
                  pattern="[0-9]{2}-[0-9]{3}"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
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
                  autoComplete="no"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  value={cardholdersName}
                  onChange={(e) => setCardholderName(e.target.value)}
                />
                <input
                  required
                  type="tel"
                  placeholder="Card Number"
                  id="cardNumber"
                  name="cardNumber"
                  autoComplete="no"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  pattern="[\d| ]{16,19}"
                  maxLength="19"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <input
                  required
                  type="tel"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="Expiration Date"
                  pattern="\d\d/\d\d"
                  autoComplete="no"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                />
                <input
                  required
                  type="tel"
                  id="securityCode"
                  name="securityCode"
                  placeholder="CVV"
                  autoComplete="no"
                  minLength={3}
                  maxLength={3}
                  pattern="\d{3}"
                  className="p-2 text-gray-600 w-full text-md border-b-2 focus:border-blue-600 outline-none"
                  value={securityCode}
                  onChange={(e) => setSecurityCode(e.target.value)}
                />
              </div>
            </div>
            <div className="flex mb-4 lg:mb-6">
              <input
                required
                id="consent"
                name="consent"
                type="checkbox"
                checked={consent}
                autoComplete="no"
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-1 md:mr-2 xl:mr-3"
                onChange={(e) => setConsent(e.target.checked)}
              />
              <p className="text-gray-600">
                By placing this order I accept{" "}
                <em className="text-blue-600 font-semibold hover:underline cursor-pointer">
                  Terms and Conditions
                </em>
                .
              </p>
            </div>
            <button
              className="bg-lime-500 hover:bg-lime-600 text-white text-xl font-bold p-2 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
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
