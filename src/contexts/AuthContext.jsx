import React, { createContext, useState, useContext, useEffect } from 'react';
import JWTServices from '../services/JWTSevice';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [location, setLocation] = useState("");
  const [quitDate, setQuitDate] = useState("");

  const navigate = useNavigate();

  const login = () => {
    // Logic to authenticate user
    const decodedToken = JWTServices.isLoggedIn()
    if(decodedToken){
        setUser(decodedToken.username);
        setLocation(decodedToken.location);
        setQuitDate(decodedToken.quitDate);
        setLoggedIn(true);
    }
  };

  const logout = () => {
    // Logic to logout user
    JWTServices.removeToken();
    setLoggedIn(false);

    navigate("/");
  };

  const refreshJWT = () => {
    JWTServices.refreshJWT();

    const decodedToken = JWTServices.isLoggedIn()

    setUser(decodedToken.username);
    setLocation(decodedToken.location);
    setQuitDate(decodedToken.quitDate);
    setLoggedIn(true);

  };

    useEffect(() => {
        login();
    }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, user, location, quitDate, refreshJWT }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

