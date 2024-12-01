// src/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    user: null,
    token: sessionStorage.getItem("token") || null,
  });

  const setAuthInfo = ({ user, token }) => {
    sessionStorage.setItem("token", token);
    setAuthState({ user, token });
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setAuthState({ user: null, token: null });
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (authState.token && !authState.user) {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/auth/profile",
            {
              headers: { Authorization: authState.token },
            }
          );
          setAuthState({ user: response.data, token: authState.token });
        } catch {
          logout();
        }
      }
    };
    fetchUser();
  }, [authState.token]);

  return (
    <AuthContext.Provider value={{ authState, setAuthInfo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
