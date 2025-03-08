"use client";  // Esto es clave en Next.js App Router

import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        setToken(savedToken);
    }, []);

    const login = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
