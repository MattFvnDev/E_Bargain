import React from "react"
import { Link, useLocation } from "react-router-dom"
import { FaCircleCheck } from "react-icons/fa6"

const Success = () => {
  const location = useLocation()
  const {firstName, emailAddress} = location.state.orderDetails

  return (
    <section className="fixed inset-0 px-4 flex flex-wrap justify-center items-center w-full h-full z-50 before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.7)] overflow-auto">
      <div className="max-w-md bg-white shadow-lg rounded-md p-6 relative mx-auto text-center">
        <FaCircleCheck
          className="w-16 h-16 fill-green-500 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"
        />
        <div className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex-1 mt-2">Success!</h2>
            <h3 className="text-xl text-gray-600 font-semibold">
              Thank you {firstName}
            </h3>
            <p className="text-base text-gray-500">
              We have sent you a confirmation over at{" "}
              {emailAddress}
            </p>
            <p className="text-base text-gray-500">
              Check your email for further details.
            </p>
          </div>
          <Link
            to="/"
            reloadDocument={true}
            className="px-6 py-3 w-full rounded-sm text-white text-lg font-semibold border-none outline-none bg-green-500 hover:bg-green-600"
          >
            Got it
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Success
