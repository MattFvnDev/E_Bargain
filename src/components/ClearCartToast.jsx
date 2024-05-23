import { HiCheckCircle } from "react-icons/hi"
function ClearCartToast() {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-lg flex ring-1 ring-black ring-opacity-5 pointer-events-auto">
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <HiCheckCircle className="fill-lime-500 h-10 w-10" />
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">
              Cart has been cleared
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Browse products to fill the cart.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClearCartToast
