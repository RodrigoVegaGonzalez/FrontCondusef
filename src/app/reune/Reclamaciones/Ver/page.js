const verReclamaciones = () => {

    const reclamaciones = [
            {
                "id": 1,
                "idEmpresa": "483e8f13-f3da-4db0-8598-45bf28babf1c",
                "institucionClave": "Mex-Factor, S.A. de C.V. SOFOM E.N.R.",
                "sector": "Sociedades Financieras de Objeto Múltiple E.N.R.",
                "periodoTrimestre": 1,
                "periodoAnio": 2024,
                "numeroReclamacion": 1,
                "folioAtencion": "REUNE_FOLIORec6",
                "estatusReclamacion": 2,
                "fechaReclamacion": "2024-03-16",
                "fechaAtencion": "2024-03-18",
                "medioId": 1,
                "nivelAt": 1,
                "producto": "026911791256",
                "causasId": "0162",
                "fechaResolucion": "2024-03-20",
                "fechaNotificacion": "2024-03-21",
                "idEstado": 9,
                "idMunicipio": 7,
                "idColonia": 0,
                "idLocalidad": 9,
                "cp": "09070",
                "monetario": "SI",
                "montoReclamado": 1,
                "importeAbonado": 1,
                "fechaAbonoImporte": "2024-03-22",
                "pori": "NO",
                "tipoPersona": 1,
                "sexo": "H",
                "edad": 18,
                "sentidoResolucion": 1,
                "folioCondusef": "",
                "reclamacionReversa": false,
                "fechaSubida": null,
                "estatus": false,
                "respuestaJson": null
            },
            {
                "id": 2,
                "idEmpresa": "483e8f13-f3da-4db0-8598-45bf28babf1c",
                "institucionClave": "Mex-Factor, S.A. de C.V. SOFOM E.N.R.",
                "sector": "Sociedades Financieras de Objeto Múltiple E.N.R.",
                "periodoTrimestre": 1,
                "periodoAnio": 2024,
                "numeroReclamacion": 1,
                "folioAtencion": "5PO8-BSU5-E4O7-BJMX",
                "estatusReclamacion": 2,
                "fechaReclamacion": "2024-03-16",
                "fechaAtencion": "2024-03-18",
                "medioId": 1,
                "nivelAt": 1,
                "producto": "026911791256",
                "causasId": "0162",
                "fechaResolucion": "2024-03-20",
                "fechaNotificacion": "2024-03-21",
                "idEstado": 9,
                "idMunicipio": 7,
                "idColonia": 0,
                "idLocalidad": 9,
                "cp": "09070",
                "monetario": "SI",
                "montoReclamado": 1,
                "importeAbonado": 1,
                "fechaAbonoImporte": "2024-03-22",
                "pori": "NO",
                "tipoPersona": 1,
                "sexo": "H",
                "edad": 18,
                "sentidoResolucion": 1,
                "folioCondusef": "",
                "reclamacionReversa": false,
                "fechaSubida": "2024-05-21T15:27:41.487",
                "estatus": false,
                "respuestaJson": "{\"Número total de envios\":1,\"Reclamaciones enviadas\":[\"5PO8-BSU5-E4O7-BJMX\"]}"
            },
            {
                "id": 3,
                "idEmpresa": "483e8f13-f3da-4db0-8598-45bf28babf1c",
                "institucionClave": "Mex-Factor, S.A. de C.V. SOFOM E.N.R.",
                "sector": "Sociedades Financieras de Objeto Múltiple E.N.R.",
                "periodoTrimestre": 1,
                "periodoAnio": 2024,
                "numeroReclamacion": 1,
                "folioAtencion": "IOBI-7H7R-88IG-YWZ2",
                "estatusReclamacion": 2,
                "fechaReclamacion": "2024-03-16",
                "fechaAtencion": "2024-03-18",
                "medioId": 1,
                "nivelAt": 1,
                "producto": "026911791256",
                "causasId": "0162",
                "fechaResolucion": "2024-03-20",
                "fechaNotificacion": "2024-03-21",
                "idEstado": 9,
                "idMunicipio": 7,
                "idColonia": 0,
                "idLocalidad": 9,
                "cp": "09070",
                "monetario": "SI",
                "montoReclamado": 1,
                "importeAbonado": 1,
                "fechaAbonoImporte": "2024-03-22",
                "pori": "NO",
                "tipoPersona": 1,
                "sexo": "H",
                "edad": 18,
                "sentidoResolucion": 1,
                "folioCondusef": "",
                "reclamacionReversa": false,
                "fechaSubida": "2024-06-18T11:28:18.727",
                "estatus": false,
                "respuestaJson": "{\"Número total de envios\":1,\"Reclamaciones enviadas\":[\"IOBI-7H7R-88IG-YWZ2\"]}"
            }];
    return <>
        <h1>Ver Reclamaciones</h1>
       <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                    <th>Folio Atención</th>
                    <th>Periodo</th>
                    <th>Fecha Reclamación</th>
                    <th>Fecha Atención</th>
                    <th>CP</th>
                    <th>Monetario</th>
                    <th>Monto Reclamado</th>
                    <th>Sentido Resolución</th>
                    <th>Estatus</th>
                    <th>Acciones</th>
                    
                </tr>
            </thead>

            <tbody>
                {reclamaciones.map((r) => (
                    <tr key={r.id}>
                       
                        <td>{r.folioAtencion}</td>
                       
                        <td>{`${r.periodoTrimestre}/${r.periodoAnio}`}</td>
                        <td>{r.fechaReclamacion}</td>
                        <td>{r.fechaAtencion}</td>
                        <td>{r.cp}</td>
                        <td>{r.monetario}</td>
                        <td>{r.montoReclamado}</td>
                        <td>{r.sentidoResolucion}</td>
                        <td>{r.estatus ? "Activo" : "Inactivo"}</td>
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
    </>;
}

export default verReclamaciones;