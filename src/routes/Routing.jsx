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
import ProtectedRoutes from "../components/ProtectedRoutes";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoutes>
            <Cart />
          </ProtectedRoutes>
        }
      />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route
        path="/payment"
        element={
          <ProtectedRoutes>
            <PaymentForm />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/checkout"
        element={
          <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        }
      />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};

export default Routing;
