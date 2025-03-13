'use client';
import Link from 'next/link'
import React,{useEffect,useState, useContext } from "react";
import { useRouter } from 'next/navigation';

const nav = () => {
    const [token, setToken] = useState(null);
    useEffect(() => {
        async function fetchToken() {
          const res = await fetch("/api/token");
          const data = await res.json();
          setToken(data.token || null);
        }
        fetchToken();
      }, []);
   
    const router = useRouter();
    // const [token, setToken] = useState(null);
    

    const handleLogout = async () => {
        await fetch("/api/logout", {
            method: "POST",
          });
          window.location.href = "/"; // O a donde quieras llevar al usuario después de cerrar sesión
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home">Info 100</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                   {token ? (
                        <>
                            <li className="nav-item">
                        <Link className="nav-link" href="redeco">Redeco</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Reune
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/reune">Reune</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/reclamaciones">Reclamaciones</Link>
                    </li>
                    <li className="nav-item">
                        <button onClick={handleLogout} className="btn btn-danger">cerrar_sesion</button>
                    </li>
                        </>
                   ) : (
                    <>
                    <li className="nav-item">
                        <Link className="nav-link" href="/login">Login</Link>
                    </li>
                    </>)

                   }
                    
                </ul>
            </div>
        </nav>
    );
}

export default nav;