import React from "react"
import { Link } from "react-router-dom"

const BannerReverse = ({ title, text, img }) => {
  return (
    <section className="pb-40">
      <div className="max-w-screen-lg lg:max-w-screen-2xl mx-auto px-6">
        <div className="flex h-[40rem] justify-between overflow-hidden">
          <div className="hidden sm:flex sm:w-1/2 bg-gray-300">
            <img
              src={img}
              alt="Banner"
              className="h-full w-full object-cover rounded-tr-lg rounded-br-lg"
            />
          </div>
          <div className="w-full px-8 justify-center flex flex-col text-start sm:w-1/2 bg-gray-300">
            <div className="w-full text-start justify-center flex flex-col">
              <h2 className="text-3xl font-semibold mb-8">{title}</h2>
              <p className="text-lg">{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="products">
                <button className="mt-8 cursor-pointer font-semibold uppercase border-lime-500 p-2 text-xl bg-lime-500 hover:scale-110 focus:ring-4 focus:ring-opacity-50 focus:ring-lime-500 text-white ease-in-out duration-300">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerReverse
