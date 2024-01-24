import React from "react"
import { smartPhones } from "../constants"
import { PhoneCard } from "../components"

const Products = () => {
  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {smartPhones.map((phone) => (
          <PhoneCard key={phone.id} {...phone} phone={phone}  />
        ))}
      </div>
    </div>
  )
}

export default Products
