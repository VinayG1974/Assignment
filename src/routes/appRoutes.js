import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Shop } from "../pages/shop/shop";
import { Cart } from "../pages/cart/cart";
import Checkout from "../pages/checkout/checkout";
import { ShopContextProvider } from "../context/shopContext";
import { Wishlist } from "../pages/wishlist/wishlist";
import Login from "../pages/login/login";

function AppRoutes() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default AppRoutes;
