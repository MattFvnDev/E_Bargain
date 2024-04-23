import React from "react"
import { Product } from "./"
import { useSelector } from "react-redux"

const BestProducts = () => {
  const smartPhones = useSelector((state) => state.products.smartPhones)
  const filteredSmartPhones = smartPhones.filter(
    (filteredSmartPhone) => filteredSmartPhone.price >= 998
  )
  return (
    <div className="py-32 max-w-screen-xl mx-auto lg:max-w-screen-2xl">
      <h2 className="text-2xl font-semibold mb-8 px-6 text-red-800 underline">
        Our best products
      </h2>
      <div className="mx-auto max-w-screen-xl px-6 lg:max-w-screen-2xl">
        <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {filteredSmartPhones.map((filteredSmartPhone) => (
            <Product
              key={filteredSmartPhone.id}
              filteredSmartPhone={filteredSmartPhone}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestProducts
