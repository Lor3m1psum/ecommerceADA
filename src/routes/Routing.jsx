import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/auth/Register";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
