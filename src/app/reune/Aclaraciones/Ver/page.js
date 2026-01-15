"use client"
import React, { useEffect,useState } from 'react';
import { useToken } from "../../../context/TokenContext";


const AclaracionesVer = () => {

     const { token } = useToken();
     const API_URL = process.env.NEXT_PUBLIC_URL;
     console.log("Token en Aclaraciones Ver:", token);
     const AMBIENTE = process.env.NEXT_PUBLIC_AMBIENTE;
     const tipo = 3; //Tipo 3 Aclaraciones

    const [aclaraciones, setAclaraciones] = useState([]);

    useEffect(() => {
        if (!token) return;
            
               

        const fetchAclaraciones = async () => {
            try {
                const response = await fetch(`${API_URL}/Reune/Aclaracion/Ver`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setAclaraciones(data);
                console.log("Aclaraciones obtenidas:", data);
            } catch (error) {
                console.error("Error al obtener las aclaraciones:", error);
            }
        }
        
         fetchAclaraciones();
    }, [token]);

//     const aclaraciones = [
//     {
//         "id": 22,
//         "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
//         "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
//         "sector": "Uniones de crédito",
//         "periodoTrimestre": 2,
//         "periodoAnio": 2025,
//         "numero": 1,
//         "folioAtencion": "",
//         "estatusAclaracion": 1,
//         "fechaAclaracion": "2025-09-09",
//         "fechaAtencion": "2025-09-10",
//         "medioId": 2,
//         "nivelAt": 1,
//         "producto": "028212711376",
//         "causasId": "3991",
//         "fechaResolucion": null,
//         "fechaNotificacion": null,
//         "idEstado": 2,
//         "idMunicipio": 2,
//         "idColonia": 41,
//         "idLocalidad": 0,
//         "cp": "21130",
//         "monetario": "NO",
//         "montoReclamado": 0.00,
//         "pori": "NO",
//         "tipoPersona": 2,
//         "sexo": "",
//         "edad": null,
//         "folioCondusef": "",
//         "reversa": false,
//         "operacionExtranjero": "NO",
//         "fechaSubida": null,
//         "respuestaJson": null
//     },
//     {
//         "id": 23,
//         "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
//         "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
//         "sector": "Uniones de crédito",
//         "periodoTrimestre": 1,
//         "periodoAnio": 2025,
//         "numero": 1,
//         "folioAtencion": "Prueba1",
//         "estatusAclaracion": 1,
//         "fechaAclaracion": "2025-09-18",
//         "fechaAtencion": "2025-09-10",
//         "medioId": 2,
//         "nivelAt": 1,
//         "producto": "028212711376",
//         "causasId": "3991",
//         "fechaResolucion": null,
//         "fechaNotificacion": null,
//         "idEstado": 1,
//         "idMunicipio": 1,
//         "idColonia": 53,
//         "idLocalidad": 0,
//         "cp": "20089",
//         "monetario": "NO",
//         "montoReclamado": 0.00,
//         "pori": "NO",
//         "tipoPersona": 2,
//         "sexo": "",
//         "edad": null,
//         "folioCondusef": "",
//         "reversa": false,
//         "operacionExtranjero": "NO",
//         "fechaSubida": null,
//         "respuestaJson": null
//     },
//     {
//         "id": 24,
//         "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
//         "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
//         "sector": "Uniones de crédito",
//         "periodoTrimestre": 1,
//         "periodoAnio": 2025,
//         "numero": 1,
//         "folioAtencion": "Prueba1",
//         "estatusAclaracion": 1,
//         "fechaAclaracion": "2025-09-18",
//         "fechaAtencion": "2025-09-10",
//         "medioId": 2,
//         "nivelAt": 1,
//         "producto": "028212711376",
//         "causasId": "3991",
//         "fechaResolucion": null,
//         "fechaNotificacion": null,
//         "idEstado": 1,
//         "idMunicipio": 1,
//         "idColonia": 53,
//         "idLocalidad": 0,
//         "cp": "20089",
//         "monetario": "NO",
//         "montoReclamado": 0.00,
//         "pori": "NO",
//         "tipoPersona": 2,
//         "sexo": "",
//         "edad": null,
//         "folioCondusef": "",
//         "reversa": false,
//         "operacionExtranjero": "NO",
//         "fechaSubida": null,
//         "respuestaJson": null
//     }
// ];
    return (
        <div>
            <h1>Ver Aclaraciones</h1>
            <table className="table table-bordered table-striped">
            <thead className="table-dark">
                    <tr>
                        <th>Folio</th>
                        <th>Editar</th>
                        <th>Enviar</th>
                        <th>Ver Detalle</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(aclaraciones) && aclaraciones.map(aclaracion => (
                        <tr key={aclaracion.id}>
                            <td>{aclaracion.folioAtencion}</td>
                            <td><button className="btn btn-primary">Enviar</button></td>
                            <td><button className="btn btn-warning">Editar</button></td>
                            <td><button className="btn btn-secondary">Ver Detalle</button></td>
                            <td><button className="btn btn-danger">Eliminar</button></td>
                        </tr>
                    ))}

                    
                </tbody>
            </table>
        </div>
    );
};

export default AclaracionesVer;