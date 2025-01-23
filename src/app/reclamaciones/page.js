"use client"; 
import Enviar from './enviarReclamacion'
const Reclamaciones = () => {
    return(
        <>
        <h1>Reclamaciones</h1>
        <ul>
            <li>Enviar</li>
            <li>Consultar</li>
        </ul>
        <Enviar/>
        </>
    );
}

export default Reclamaciones;