import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart, Home, Products, PhoneDetails } from "./pages"
import { AppLayout } from "./components"

export function Router() {
  // Defining all routes
  const BrowserRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/phone/:id" element={<PhoneDetails />} />
          <Route path="cart" element={<Cart/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  return <BrowserRoutes/>
}
