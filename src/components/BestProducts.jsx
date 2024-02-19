import React from "react"
import { smartPhones } from "../constants"
import { Product } from "./"

const BestProducts = () => {
  const filteredSmartPhones = smartPhones.filter(
    (filteredSmartPhone) => filteredSmartPhone.id <= 8
  )
  return (
    <div className="py-32 max-w-screen-xl mx-auto lg:max-w-screen-2xl">
      <h2 className="text-2xl font-semibold mb-16 px-6">Our best products</h2>
      <div className="mx-auto max-w-screen-xl px-6 lg:max-w-screen-2xl">
        <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {filteredSmartPhones.map((filteredSmartPhone) => (
            <Product
              key={filteredSmartPhone.id}
              {...filteredSmartPhone}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestProducts
