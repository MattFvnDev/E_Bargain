import { Outlet, useLocation } from "react-router-dom"
import { Header, Footer, Newsletter, ScrollToTop } from "../components"

const AppLayout = () => {
  const location = useLocation()
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow bg-[#f5f5f5]">
        <Outlet />
      </main>
      {location.pathname !=="/success" && <Newsletter />}
      <Footer />
    </div>
  )
}

export default AppLayout
