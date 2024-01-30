import React from "react"
import { Link } from "react-router-dom"
import { Xiaomi, Samsung, OnePlus, Apple } from "../assets"

const Hero = () => {
  return (
    <div className="max-w-screen-lg lg:max-w-screen-2xl mx-auto my-10 px-6">
      <div className="h-[500px] grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-3">
        <div className="cursor-pointer overflow-hidden relative md:row-span-2">
          <Link to="/products/phone/1" className="group">
            <div className="h-full absolute left-0 top-0 w-full"></div>
            <img
              src={Apple}
              alt=""
              className="h-full object-cover w-full group-hover:scale-110 ease-in-out duration-300"
            />
          </Link>
        </div>
        <div className="cursor-pointer overflow-hidden relative md:row-span-2">
          <Link to="/products/phone/8" className="group">
            <div className="h-full absolute left-0 top-0 w-full"></div>
            <img
              src={OnePlus}
              alt=""
              className="h-full object-cover w-full object-[0,35%] group-hover:scale-110 ease-in-out duration-300"
            />
          </Link>
        </div>
        <div className="cursor-pointer overflow-hidden relative md:col-span-1">
          <Link to="/products/phone/13" className="group">
            <div className="h-full absolute left-0 top-0 w-full"></div>
            <img
              src={Samsung}
              alt=""
              className="h-full object-cover w-full group-hover:scale-110 ease-in-out duration-300"
            />
          </Link>
        </div>
        <div className="cursor-pointer overflow-hidden relative md:col-span-1">
          <Link to="/products/phone/14" className="group">
            <div className="h-full absolute left-0 top-0 w-full"></div>
            <img
              src={Xiaomi}
              alt=""
              className="h-full object-cover w-full lg:object-[10%,55%] group-hover:scale-110 ease-in-out duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
