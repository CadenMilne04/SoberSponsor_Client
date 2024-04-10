import React, { createContext, useState, useContext, useEffect } from 'react';
import JWTServices from '../services/JWTSevice';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const login = () => {
    // Logic to authenticate user
    const decodedToken = JWTServices.isLoggedIn()
    if(decodedToken){
        setUser(decodedToken.username);
        setLoggedIn(true);
    }
  };

  const logout = () => {
    // Logic to logout user
    JWTServices.removeToken();
    setLoggedIn(false);

    navigate("/");
  };

    useEffect(() => {
        login();
    }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

