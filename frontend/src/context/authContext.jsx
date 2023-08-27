// create the context

import { createContext, useState } from "react";

export const auth = createContext();

// provide the context

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");

  return (
    <>
      <auth.Provider value={{ setIsAuth ,isAuth}}>{children}</auth.Provider>
    </>
  );
};
