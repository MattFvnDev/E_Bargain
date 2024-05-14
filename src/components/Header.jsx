import { useState } from "react"
import { Logo, Navbar } from "./"

const Header = () => {
  const [sticky, setSticky] = useState(false)
  const stickyHeader = () => {
    if (window.scrollY >= 90) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }
  window.addEventListener("scroll", stickyHeader)

  return (
    <header
      className={
        sticky
          ? "sticky top-0 bg-white z-20 shadow-md"
          : "sticky top-0, bg-white z-20 shadow"
      }
    >
      <div className="container mx-auto p-6 flex justify-between max-w-screen-lg lg:max-w-screen-2xl">
        <Logo />
        <Navbar />
      </div>
    </header>
  )
}

export default Header
