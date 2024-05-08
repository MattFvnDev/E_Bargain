import { Logo, Navbar } from "./"

const Header = () => (
  <header className="sticky top-0, bg-white z-20 shadow">
    <div className="container mx-auto p-6 flex justify-between max-w-screen-lg lg:max-w-screen-2xl">
      <Logo />
      <Navbar/>
    </div>
  </header>
)

export default Header
