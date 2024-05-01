import { Link } from "react-router-dom"
import { logo } from "../assets"

const Logo = () => {
  return (
    <Link className="flex items-center space-x-2" to="/">
      <img src={logo} alt="Logo" className="h-[42px] w-[42px] object-contain" />
      <span className="hidden text-3xl font-extrabold text-gray-600 sm:inline-block">
        Bargain
      </span>
    </Link>
  )
}

export default Logo
