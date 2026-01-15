'use client'
import { useToken } from "../../../context/TokenContext";
import { useEffect,useState } from "react";
    
const VerConsultas = () => {
    const { token } = useToken();
    const [data,setData] = useState([]);
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const AMBIENTE = process.env.NEXT_PUBLIC_AMBIENTE;
    useEffect( () =>{
        if(!token) return;
        const solicitud = async () => {
            try {
                const response = await fetch(`${API_URL}/Reune/Aclaracion/Ver?ambiente=${AMBIENTE}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) throw new Error('Error en la solicitud');
                const request = await response.json();
                setData(request);
            } catch (error) {
                console.error(error);
            }
        };
        solicitud();
    },[token]);

    // const consultas = [
    //         {
    //             "id": 22,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 2,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-09",
    //             "fechaAtencion": "2025-09-10",
    //             "medioId": 2,
    //             "nivelAt": 1,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 2,
    //             "idMunicipio": 2,
    //             "idColonia": 41,
    //             "idLocalidad": 0,
    //             "cp": "21130",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 0
    //         },
    //         {
    //             "id": 23,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 1,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "Prueba1",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-18",
    //             "fechaAtencion": "2025-09-10",
    //             "medioId": 2,
    //             "nivelAt": 1,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 1,
    //             "idMunicipio": 1,
    //             "idColonia": 53,
    //             "idLocalidad": 0,
    //             "cp": "20089",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 0
    //         },
    //         {
    //             "id": 24,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 1,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "Prueba1",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-18",
    //             "fechaAtencion": "2025-09-10",
    //             "medioId": 2,
    //             "nivelAt": 1,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 1,
    //             "idMunicipio": 1,
    //             "idColonia": 53,
    //             "idLocalidad": 0,
    //             "cp": "20089",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 0
    //         },
    //         {
    //             "id": 25,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 1,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "Prueba1",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-18",
    //             "fechaAtencion": "2025-09-10",
    //             "medioId": 2,
    //             "nivelAt": 1,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 1,
    //             "idMunicipio": 1,
    //             "idColonia": 53,
    //             "idLocalidad": 0,
    //             "cp": "20089",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 0
    //         },
    //         {
    //             "id": 26,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 1,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "Prueba1",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-08",
    //             "fechaAtencion": "2025-09-20",
    //             "medioId": 2,
    //             "nivelAt": 1,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 2,
    //             "idMunicipio": 1,
    //             "idColonia": 2005,
    //             "idLocalidad": 0,
    //             "cp": "21135",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 0
    //         },
    //         {
    //             "id": 27,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 1,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "Prueba1",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-08",
    //             "fechaAtencion": "2025-09-20",
    //             "medioId": 2,
    //             "nivelAt": 1,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 2,
    //             "idMunicipio": 1,
    //             "idColonia": 2005,
    //             "idLocalidad": 0,
    //             "cp": "21135",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 1
    //         },
    //         {
    //             "id": 28,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 1,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "Prueba2",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-08",
    //             "fechaAtencion": "2025-09-20",
    //             "medioId": 2,
    //             "nivelAt": 1,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 2,
    //             "idMunicipio": 1,
    //             "idColonia": 2005,
    //             "idLocalidad": 0,
    //             "cp": "21135",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 1
    //         },
    //         {
    //             "id": 29,
    //             "idEmpresa": "00478d76-b3e5-423c-8171-0c13f36b5eb1",
    //             "institucionClave": "Unión de Crédito Agropecuaria de Guanajuato, S.A. de C.V.",
    //             "sector": "Uniones de crédito",
    //             "periodoTrimestre": 1,
    //             "periodoAnio": 2025,
    //             "numero": 1,
    //             "folioAtencion": "Prueba20",
    //             "estatusAclaracion": 1,
    //             "fechaAclaracion": "2025-09-18",
    //             "fechaAtencion": "2025-09-20",
    //             "medioId": 2,
    //             "nivelAt": 2,
    //             "producto": "028212711376",
    //             "causasId": "3991",
    //             "fechaResolucion": null,
    //             "fechaNotificacion": null,
    //             "idEstado": 1,
    //             "idMunicipio": 2,
    //             "idColonia": 3,
    //             "idLocalidad": 0,
    //             "cp": "20700",
    //             "monetario": "NO",
    //             "montoReclamado": 0.00,
    //             "pori": "NO",
    //             "tipoPersona": 2,
    //             "sexo": "",
    //             "edad": null,
    //             "folioCondusef": "",
    //             "reversa": false,
    //             "operacionExtranjero": "NO",
    //             "fechaSubida": null,
    //             "respuestaJson": null,
    //             "ambiente": 1
    //         }
    //     ]
    return (
        <div>
            <h1>Ver Consultas</h1>
            <button className="btn btn-primary">Enviar todas las consultas</button>
           <div>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Institución</th>
            <th>Sector</th>
            <th>Trimestre</th>
            <th>Año</th>
            <th>Folio Atención</th>
            <th>Fecha Aclaración</th>
            <th>Fecha Atención</th>
            <th>Ambiente</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.institucionClave}</td>
              <td>{item.sector}</td>
              <td>{item.periodoTrimestre}</td>
              <td>{item.periodoAnio}</td>
              <td>{item.folioAtencion || "-"}</td>
              <td>{item.fechaAclaracion}</td>
              <td>{item.fechaAtencion}</td>
              <td>{item.ambiente === 1 ? "Producción" : "Pruebas"}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  
                >
                  Editar
                </button>
                <button
                  className="btn btn-sm btn-danger me-2"
                 
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-sm btn-success"
                  
                >
                  Enviar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
                
           </div>
        </div>
    );
}

export default VerConsultas;