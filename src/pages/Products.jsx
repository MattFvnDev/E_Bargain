import React from "react"
import { PhoneCard } from "../components"
import { useSelector } from "react-redux"

const Products = () => {
  const smartPhones = useSelector((state) => state.products.smartPhones)

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      <div className="grid gap-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {smartPhones.map((phone) => (
          <PhoneCard key={phone.id} phone={phone} {...phone} />
        ))}
      </div>
    </div>
  )
}

export default Products
