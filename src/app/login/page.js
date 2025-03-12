"use client";

import {React,useState, useContext} from "react";
import { useRouter } from 'next/navigation';


const Login = () => {
    const API_URL = process.env.NEXT_PUBLIC_URL;
    
    //const token = localStorage.getItem('token');
    const router = useRouter();
    const [usuario, setUsuario] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null)
    const CambioUsuario = (e) =>{
        setUsuario(e.target.value);
        setError(e.target.value ? null : 'Este campo es requerido');
    }

    const CambioPassword = (e) =>{
        setPassword(e.target.value)
    }

    const Enviar = async () =>{
        const Enviar = {
            "nombre":usuario,
            "password":password
        }
        try{
            const response = await fetch(`${API_URL}/Login`,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(Enviar),
                  credentials: 'include'

            });

            if (response.ok) {
                const data = await response.json();
                console.log('Datos enviados correctamente');
                console.log(data)
                let id = data.token
                await fetch("/api/login", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { "Content-Type": "application/json" },
                  });
                  window.location.href = "/home";
                // Puedes redirigir al usuario o mostrar un mensaje de éxito
              } else {
                // La petición falló
                alert("Usuario o contraseña incorrecta");
                console.log('Error al enviar datos'+response);
              }


        }catch(error){
            console.log("El error fue"+error)
        }
           

    }
  
    return (
        <div className="Home">
            <h1>Inicia Sesión</h1>
        <div className="Login Container">
            <div className="login-element">
            <label>Usuario</label>
            <input
            type="email"
            name="usuario"
            className="form-control"
            placeholder=""
            value={usuario}
            onChange={CambioUsuario} required/>
            {error && <div className="error">{error}</div>}
            </div>
            <div className="login-element">
                <label>Contraseña</label>
            <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={CambioPassword}
            />
            </div>
            <div className="btn-element">
                <button 
                className="btn btn-primary"
                onClick={Enviar}
                >Enviar</button>
            </div>
        </div>
        </div>
    )
}

export default Login;