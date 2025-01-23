'use client'
import {React,useState} from "react";
import { useRouter } from 'next/router';

const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null)
    const router = useRouter();
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
            const response = await fetch('https://localhost:7030/api/Login',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(Enviar)

            });

            if (response.ok) {
                const data = await response.json();
                console.log('Datos enviados correctamente');
                console.log(data)
                router.push('/home');
                // Puedes redirigir al usuario o mostrar un mensaje de éxito
              } else {
                // La petición falló
                alert("Usuario o contraseña incorrecta");
                console.log('Error al enviar datos'+response);
                // Puedes mostrar un mensaje de error al usuario
              }


        }catch(error){
            console.log("El error fue"+error)
        }
           

    }
  
    return (
        <div className="Login Container">
            <div >
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
            <div>
                <label>Contraseña</label>
            <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={CambioPassword}
            />
            </div>
            <div>
                <button 
                className="btn btn-primary"
                onClick={Enviar}
                >Enviar</button>
            </div>
        </div>
            
    )
}

export default Login;