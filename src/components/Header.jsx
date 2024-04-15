import React from "react"
import { Logo } from "./"

const Header = () => (
  <header className="sticky top-0, bg-white z-20 shadow">
    <div className="container mx-auto p-6 flex justify-between">
      <Logo />
    </div>
  </header>
)

export default Header
