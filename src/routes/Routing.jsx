import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/CheckoutPage";
import ErrorNotFound from "../pages/ErrorNotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};

export default Routing;
