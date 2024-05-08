import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Cart, Checkout, Home, Products, PhoneDetails, Success } from "./pages"
import { AppLayout } from "./layouts"

export function Router() {
  const BrowserRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/phone/:id" element={<PhoneDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
  return <BrowserRoutes />
}
