import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../components/pages/auth/Register";
import ProductList from "../components/pages/ProductList";
import ProductDetail from "../components/pages/ProductDetail";
import Checkout from "../components/pages/CheckoutPage";
import ErrorNotFound from "../components/pages/ErrorNotFound";

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
