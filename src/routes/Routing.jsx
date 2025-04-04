import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Register from "../components/pages/auth/Register";
import ProductList from "../components/pages/ProductList";
import ProductDetail from "../components/pages/ProductDetail";
import Checkout from "../components/pages/Checkout";
import ErrorNotFound from "../components/pages/ErrorNotFound";
import Login from "../components/pages/auth/Login";
import Cart from "../components/pages/Cart";
import About from "../components/pages/About";
import PaymentForm from "../components/pages/PaymentForm";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/payment" element={<PaymentForm />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};

export default Routing;
