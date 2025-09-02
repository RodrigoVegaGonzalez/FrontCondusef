"use client";
import { createContext, useContext, useState } from "react";

// Creamos el contexto
const TokenContext = createContext();

// Hook para consumir el contexto fácilmente
export const useToken = () => useContext(TokenContext);

// Componente proveedor del contexto
export const TokenProvider = ({ children, initialToken = null }) => {
  const [token, setToken] = useState(initialToken);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
