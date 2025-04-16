// context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ✅ Add this interface
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token);

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        try {
          const decoded: any = jwtDecode(storedToken);
          if (decoded.exp * 1000 > Date.now()) {
            setToken(storedToken);
            await setIsAuthenticated(true);
          } else {
            logout(); // Token expired, log out user
          }
        } catch (error) {
          console.error("Invalid token", error);
          logout();
        }
      } else {
        logout();
      }
    };

    checkToken(); // Run only once on mount
  }, []); // Empty dependency array ensures this runs once


  const login = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    
    
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
    
  };

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
