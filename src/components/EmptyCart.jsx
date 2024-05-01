import { Link } from "react-router-dom"
import { FaPlus } from "react-icons/fa6"
import { RxCrossCircled } from "react-icons/rx"


const EmptyCart = () => {
  return (
      <div className="flex h-[450px] shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
        <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
          <RxCrossCircled className="h-10 w-10 text-gray-500" />
          <h3 className="mt-4 text-xl font-semibold">No products added</h3>
          <p className="mb-4 mt-2 text-base">Add products to your cart.</p>
          <Link to="/products">
            <button
              type="button"
              className="hover:bg-lime-600 inline-flex items-center justify-center text-sm font-medium h-9 px-3 rounded-md relative border-lime-500 p-2 bg-lime-500 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white ease-in-out duration-300"
            >
              <FaPlus className="mr-2 h-4 w-4" />
              Add Products
            </button>
          </Link>
        </div>
      </div>
  )
}

export default EmptyCart