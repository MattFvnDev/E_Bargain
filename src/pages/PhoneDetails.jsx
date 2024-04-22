import React from "react"
import { useParams } from "react-router-dom"
import { Details } from "../components"

import { useSelector } from "react-redux"

const PhoneDetails = () => {
  const { smartPhones } = useSelector((state) => state.products)
  const { id } = useParams()
  const phoneDetail = smartPhones.filter(
    (phoneDetail) => phoneDetail.id === parseInt(id)
  )
 
  return (
    <div className="container lg:max-w-screen-lg mx-auto py-12 px-6">
      {phoneDetail.map((phone) => {
        return <Details key={phone.id} {...phone} />
      })}
    </div>
  )
}

export default PhoneDetails
