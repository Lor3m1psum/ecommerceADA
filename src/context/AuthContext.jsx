import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/config";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const registerUser = async ({ email, password }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser(user);
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <AuthContext.Provider value={{ user, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};
