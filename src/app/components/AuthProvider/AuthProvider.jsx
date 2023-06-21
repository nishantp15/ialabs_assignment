"use client";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    let token;
    let name;
  useEffect(() => {
    // token = localStorage.getItem("userToken");
    // name = localStorage.getItem("userName");
  });

  const [authState, setAuthState] = useState({
    isAuth: false,
    token: token || null,
    name: name || null,
  });
  const loginUser = (token, name) => {
    token !== undefined &&
      setAuthState({
        isAuth: true,
        token: token,
        name: name,
      });
  };
  const logoutUser = () => {
    setAuthState({
      isAuth: false,
      token: null,
    });
  };
  return (
    <AppContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
