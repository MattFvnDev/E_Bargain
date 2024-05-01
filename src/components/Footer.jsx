import {
  FaPinterestSquare,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa"

import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-100 p-6 text-center container mx-auto">
      <div className="flex flex-col-reverse items-center sm:justify-between justify-center sm:flex-row ">
        <p className="text-sm font-medium text-gray-500 xl:text-lg">
          &copy; {currentYear} Bargain. All rights reserved.
        </p>
        <div className="flex flex-row items-center justify-center space-x-5 py-3 ">
          <Link
            to="https://https://pl.pinterest.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaPinterestSquare className="h-[28px] w-[28px] text-gray-600 hover:hover:text-red-800 xl:h-[32px] xl:w-[32px] " />
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare className="h-[28px] w-[28px] text-gray-600 hover:hover:text-red-800 xl:h-[32px] xl:w-[32px] " />
          </Link>
          <Link
            to="https://www.facebook.com/?locale=pl_PL"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="h-[28px] w-[28px] text-gray-600 hover:hover:text-red-800 xl:h-[32px] xl:w-[32px] " />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
