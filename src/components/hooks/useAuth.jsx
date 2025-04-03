import { useContext } from "react";
import { AuthContex } from "../../context/CartContext";

export const useAuth = () => useContext(AuthContex);
