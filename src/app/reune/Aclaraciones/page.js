'use client';
import '../../css/styles.css';
import { useToken } from "../../context/TokenContext";
import React, { useState, useEffect } from "react";

const aclaraciones = () => {
    
     const { token } = useToken();
     const API_URL = process.env.NEXT_PUBLIC_URL;
     const AMBIENTE = process.env.NEXT_PUBLIC_AMBIENTE;
     const tipo = 3; //Tipo 3 Aclaraciones
     const [aclaracion, setAclaracion] = useState({
                            AclaracionDenominacion: "",
                            AclaracionSector: "",
                            AclaracionTrimestre: "",
                            AclaracionNumero: "",
                            AclaracionFolioAtencion: "",
                            AclaracionEstadoConPend: "",
                            AclaracionFechaAclaracion: "",
                            AclaracionFechaAtencion: "",
                            AclaracionMedioRecepcionCanal: "",
                            AclaracionProductoServicio: "",
                            AclaracionCausaMotivo: "",
                            AclaracionFechaResolucion: "",
                            AclaracionFechaNotifiUsuario: "",
                            AclaracionEntidadFederativa: "",
                            AclaracionCodigoPostal: "",
                            AclaracionMunicipioAlcaldia: "",
                            AclaracionLocalidad: "",
                            AclaracionColonia: "",
                            AclaracionMonetario: "NO",
                            AclaracionMontoReclamado: "0.00",
                            AclaracionPori: "NO",
                            AclaracionTipoPersona: "1",
                            AclaracionSexo: "",
                            AclaracionEdad: "",
                            AclaracionNivelAtencion: 0,
                            AclaracionFolioCondusef: "",
                            AclaracionReversa: "0",
                            AclaracionOperacionExtranjero: "NO "
                            });
        const [errors, setErrors] = useState({});
        const [valorCausas, setValorCausas] = useState([]);
        const [valorProductos, setValorProductos] = useState([]);
        const [valorMunicipio, setValorMunicipio] = useState([]);
        const [valorCP, setValorCP] = useState([]);
        const [coloniaValue, setColoniaValue] = useState([]);

    const Trimestre = [{
        name:"Enero-Marzo",
        value:1
    },
    {
        name:"Abril-Junio",
        value:2
    },
    {
        name:"Julio-Septiembre",
        value:3
    },
    {
        name:"Octubre-Diciembre",
        value:4
    }];

    const medios_recepcion = [
        {
            "id_medio": 1,
            "descripcion": "Correo electrónico"
        },
        {
            "id_medio": 2,
            "descripcion": "Página de internet"
        },
        {
            "id_medio": 3,
            "descripcion": "Sucursales"
        },
        {
            "id_medio": 4,
            "descripcion": "Teléfono"
        },
        {
            "id_medio": 5,
            "descripcion": "UNE"
        },
        {
            "id_medio": 6,
            "descripcion": "CONDUSEF-SIGE gestión electrónica"
        },
        {
            "id_medio": 7,
            "descripcion": "CONDUSEF-Gestión ordinaria"
        },
        {
            "id_medio": 8,
            "descripcion": "Mensajeria"
        },
        {
            "id_medio": 9,
            "descripcion": "Fax"
        },
        {
            "id_medio": 17,
            "descripcion": "Oficinas de atención"
        },
        {
            "id_medio": 18,
            "descripcion": "Centro de atención telefónica"
        },
        {
            "id_medio": 20,
            "descripcion": "Aplicación movil"
        },
        {
            "id_medio": 21,
            "descripcion": "Interfaces"
        },
        {
            "id_medio": 22,
            "descripcion": "Api's"
        },
        {
            "id_medio": 23,
            "descripcion": "Bots"
        }
    ];

    const niveles_atencion = {
        "nivelesDeAtencion": [
            {
                "nivelDeAtencionId": 1,
                "nivelDeAtencionDsc": "UNE"
            },
            {
                "nivelDeAtencionId": 2,
                "nivelDeAtencionDsc": "Sucursal"
            },
            {
                "nivelDeAtencionId": 3,
                "nivelDeAtencionDsc": "Centro de Atención Telefónica"
            },
            {
                "nivelDeAtencionId": 4,
                "nivelDeAtencionDsc": "Oficinas de Atención"
            }
        ]
    };

    const entidad_federativa = {
        "estados": [
            {
                "claveEdo": 1,
                "estado": "Aguascalientes"
            },
            {
                "claveEdo": 2,
                "estado": "Baja California"
            },
            {
                "claveEdo": 3,
                "estado": "Baja California Sur"
            },
            {
                "claveEdo": 4,
                "estado": "Campeche"
            },
            {
                "claveEdo": 5,
                "estado": "Coahuila"
            },
            {
                "claveEdo": 6,
                "estado": "Colima"
            },
            {
                "claveEdo": 7,
                "estado": "Chiapas"
            },
            {
                "claveEdo": 8,
                "estado": "Chihuahua"
            },
            {
                "claveEdo": 9,
                "estado": "Ciudad de México"
            },
            {
                "claveEdo": 10,
                "estado": "Durango"
            },
            {
                "claveEdo": 11,
                "estado": "Guanajuato"
            },
            {
                "claveEdo": 12,
                "estado": "Guerrero"
            },
            {
                "claveEdo": 13,
                "estado": "Hidalgo"
            },
            {
                "claveEdo": 14,
                "estado": "Jalisco"
            },
            {
                "claveEdo": 15,
                "estado": "México"
            },
            {
                "claveEdo": 16,
                "estado": "Michoacán"
            },
            {
                "claveEdo": 17,
                "estado": "Morelos"
            },
            {
                "claveEdo": 18,
                "estado": "Nayarit"
            },
            {
                "claveEdo": 19,
                "estado": "Nuevo León"
            },
            {
                "claveEdo": 20,
                "estado": "Oaxaca"
            },
            {
                "claveEdo": 21,
                "estado": "Puebla"
            },
            {
                "claveEdo": 22,
                "estado": "Querétaro"
            },
            {
                "claveEdo": 23,
                "estado": "Quintana Roo"
            },
            {
                "claveEdo": 24,
                "estado": "San Luis Potosí"
            },
            {
                "claveEdo": 25,
                "estado": "Sinaloa"
            },
            {
                "claveEdo": 26,
                "estado": "Sonora"
            },
            {
                "claveEdo": 27,
                "estado": "Tabasco"
            },
            {
                "claveEdo": 28,
                "estado": "Tamaulipas"
            },
            {
                "claveEdo": 29,
                "estado": "Tlaxcala"
            },
            {
                "claveEdo": 30,
                "estado": "Veracruz"
            },
            {
                "claveEdo": 31,
                "estado": "Yucatán"
            },
            {
                "claveEdo": 32,
                "estado": "Zacatecas"
            }
        ]
    };

     useEffect(() => { //Productos
             if (!token) return;
                const fetchProductos = async () => {
                    try{ //Tipo 2 reclamaciones
                        const response = await fetch(`${API_URL}/ProductosReune`,{
                            headers: {
                                'Authorization': `Bearer ${token}`
                              },
                            method:'GET',
                        });
                            if(!response.ok){
                                throw new Error('Error en la solicitud');
                            }
                            
                            const data = await response.json()
                            setValorProductos(data)
                           // console.log(data);
                    }catch(error){
                        console.log(error);
                    }
                }
                fetchProductos();
            },[token]);
    
        useEffect(() => { //Causas
             
            if(!aclaracion.AclaracionProductoServicio) return;
          
             const fetchCausas = async () => {
              const response = await fetch(`${API_URL}/ProductosEmpresas/CausasReune?producto=${aclaracion.AclaracionProductoServicio}&tipo=${tipo}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    method: 'GET'
                    });
    
                    if (!response.ok) {
                    throw new Error('Error en la solicitud');
                    }
    
                    const data = await response.json();
                setValorCausas(data);
               // console.log(data);
             }
             fetchCausas();
                
          //  https://localhost:7030/ProductosEmpresas/CausasReune?producto=028212711376&tipo=2
        }, [aclaracion.AclaracionProductoServicio, token]);
        
        useEffect(() => { //Municipios
                if(!aclaracion.AclaracionEntidadFederativa) return;
                   const fetchMunicipio = async () => {
                       const respuesta = await fetch(`${API_URL}/Entidades/Municipios?entidad=${aclaracion.AclaracionEntidadFederativa}`)
                       const data = await respuesta.json()
                       setValorMunicipio(data)
                       aclaracion.AclaracionMunicipioAlcaldia = "";
                   }
               fetchMunicipio();
                  
               },[aclaracion.AclaracionEntidadFederativa])
       
        useEffect(() => { //Codigos postales
                console.log("Dentro de codigos postales")
                if(!aclaracion.AclaracionMunicipioAlcaldia) return;
                 const fetchCP = async () => {
                     const respuesta = await fetch(`${API_URL}/Entidades/CP?municipio=${aclaracion.AclaracionMunicipioAlcaldia}&estado=${aclaracion.AclaracionEntidadFederativa}`)
                     const data = await respuesta.json()
                     setValorCP(data)
                     console.log(data)
                 }
                 fetchCP();
                
               },[aclaracion.AclaracionMunicipioAlcaldia])
       
        useEffect(() => { //Colonias
            if (!aclaracion.AclaracionMunicipioAlcaldia) return;  
            const fetchColonia = async () => {
            const respuesta = await fetch(`${API_URL}/Entidades/Colonias?codigo_postal=${aclaracion.AclaracionCodigoPostal}`)
            const data = await respuesta.json()
            
            setColoniaValue(data)
            }
            fetchColonia();
               },[aclaracion.AclaracionCodigoPostal])

    // const valorMunicipio = [];
    // const valorCP = [];
    // const coloniaValue = [];

    const handleChange = (e) => {
       
        const { name, value } = e.target;
        setAclaracion((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const enviar = () =>{
         
                const toIntOrNull = (val) => {
        if (val === null || val === "") return null;
        return parseInt(val, 10);
        };

        const aclaracionParsed = {
        ...aclaracion,
        AclaracionTrimestre: toIntOrNull(aclaracion.AclaracionTrimestre),
        AclaracionNumero: toIntOrNull(aclaracion.AclaracionNumero),
        AclaracionEstadoConPend: toIntOrNull(aclaracion.AclaracionEstadoConPend),
        AclaracionMedioRecepcionCanal: toIntOrNull(aclaracion.AclaracionMedioRecepcionCanal),
        AclaracionCausaMotivo: toIntOrNull(aclaracion.AclaracionCausaMotivo),
        AclaracionEntidadFederativa: toIntOrNull(aclaracion.AclaracionEntidadFederativa),
        AclaracionCodigoPostal: toIntOrNull(aclaracion.AclaracionCodigoPostal),
        AclaracionMunicipioAlcaldia: toIntOrNull(aclaracion.AclaracionMunicipioAlcaldia),
        AclaracionColonia: toIntOrNull(aclaracion.AclaracionColonia),
        AclaracionMontoReclamado: toIntOrNull(aclaracion.AclaracionMontoReclamado),
        AclaracionTipoPersona: toIntOrNull(aclaracion.AclaracionTipoPersona),
        AclaracionEdad: toIntOrNull(aclaracion.AclaracionEdad),
        AclaracionNivelAtencion: toIntOrNull(aclaracion.AclaracionNivelAtencion),
        AclaracionReversa: toIntOrNull(aclaracion.AclaracionReversa)
        };

console.log(aclaracionParsed)
    }
     
    return (
        <>
            <h1>Aclaraciones</h1>
             <div className="Cuestionario">
                <div>
                    <label>Trimestre</label>
                    <select className="form-control" name="AclaracionTrimestre" value={aclaracion.AclaracionTrimestre} onChange={(e) => handleChange(e)}>
                        <option value="">Selecciona un trimestre</option>
                        {Trimestre.map((trimestre) => (
                            <option key={trimestre.value} value={trimestre.value}>
                                {trimestre.name}
                            </option>
                        ))}
                    </select>
                  </div>

             <div>
                <label>Número de aclaraciones</label>
                <input 
                    type="number" 
                    className="form-control" 
                    name="AclaracionNumero" 
                    value={aclaracion.AclaracionNumero} 
                    onChange={(e) => handleChange(e)}/>
             </div>

             <div>
                <label>Folio de atención</label>
                <input 
                   
                    className="form-control"/>
             </div>

             <div>
                <label>Fecha de la aclaración</label>
                <input 
                    type="date" 
                    className="form-control" 
                    name="AclaracionFechaAclaracion" 
                    value={aclaracion.AclaracionFechaAclaracion} 
                    onChange={(e) => handleChange(e)}/>
             </div>

             <div>
                <label>Medio o canal de recepción</label>
                <select className="form-control" name="AclaracionMedioRecepcionCanal" value={aclaracion.AclaracionMedioRecepcionCanal} onChange={(e) => handleChange(e)}>
                    <option value="">Selecciona un medio o canal</option>
                    {medios_recepcion.map((medio) => (
                        <option key={medio.id_medio} value={medio.id_medio}>
                            {medio.descripcion}
                        </option>
                    ))}
                </select>
             </div>

             <div>
                <label>Nivel de atención o contacto</label>
                <select className="form-control" name="AclaracionNivelAtencion" value={aclaracion.AclaracionNivelAtencion} onChange={(e) => handleChange(e)}>
                    <option value="">Selecciona un nivel de atención</option>
                    {niveles_atencion.nivelesDeAtencion.map((nivel) => (
                        <option key={nivel.nivelDeAtencionId} value={nivel.nivelDeAtencionId}>
                            {nivel.nivelDeAtencionDsc}
                        </option>
                    ))}
                </select>   
             </div>

             <div>
                <label>Producto y/o servicio</label>
                <select className="form-control" name="AclaracionProductoServicio" value={aclaracion.AclaracionProductoServicio} onChange={(e) => handleChange(e)}>
                    <option value="">Selecciona un producto o servicio</option>
                  {valorProductos.map((producto) => (
                      <option key={producto.id} value={producto.codigoProducto}>
                          {producto.tipoOperacion} - {producto.producto} - {producto.tipoProducto}
                      </option>
                  ))}
                </select>
             </div>

             <div>
                <label>Causa o motivo de la aclaración</label>
                <select className="form-control" name="AclaracionCausaMotivo" value={aclaracion.AclaracionCausaMotivo} onChange={(e) => handleChange(e)}>
                    <option value="">Selecciona una causa o motivo</option>
                    {valorCausas.map((causa) => (
                        <option key={causa.id} value={causa.id}>
                            {causa.descripcion}
                        </option>
                    ))}
                </select>
             </div>
            
            <div>
                <label>Fecha de atención</label>
                <input
                name="AclaracionFechaAtencion"
                type="date"
                className="form-control"
                value={aclaracion.AclaracionFechaAtencion}
                onChange={(e) => handleChange(e)}
                />
            </div>

             <div>
            <label>PORI (Posible robo de identidad)</label>
            <label>
            <input
            type='radio'
            name='AclaracionPori'
            onChange={(e) => handleChange(e)}
            value={"SI"}
            // className={` ${errors.RecPori ? "is-invalid" : ""}`}
            checked={aclaracion.AclaracionPori === 'SI'}/>Si</label>
            <label>
              <input
            type='radio'
            name='AclaracionPori'
            onChange={(e) => handleChange(e)}
            value={"NO"}
            // className={` ${errors.RecPori ? "is-invalid" : ""}`}
            checked={aclaracion.AclaracionPori === 'NO'}/>No </label>
        </div>

       

        <div>
            <label>Entidad Federativa</label>
            <select 
            onChange={(e) => handleChange(e)} 
            value={aclaracion.AclaracionEntidadFederativa}
            name='AclaracionEntidadFederativa'
            className="form-control">
                <option value="">Seleccione una opción</option>
                {entidad_federativa.estados.map(estado => 
                    <option key={estado.claveEdo} value={estado.claveEdo}>{estado.estado}</option>
                )}
            </select>
             {/* {errors.RecEntidadFederativa && <div className="invalid-feedback">{errors.RecEntidadFederativa}</div>} */}
        </div>

        <div>
            <label>Municipio o alcaldía</label>
            <select
            className="form-control"
            name='AclaracionMunicipioAlcaldia'
            onChange={(e) => handleChange(e)} 
            value={aclaracion.AclaracionMunicipioAlcaldia}>
                <option value="">Seleccione una opción</option>
                {valorMunicipio.map(municipio =>
                    <option key={municipio.idMunicipio} value={municipio.idMunicipio}>{municipio.municipio}</option>
                )}
            </select>
             {/* {errors.RecMunicipioAlcaldia && <div className="invalid-feedback">{errors.RecMunicipioAlcaldia}</div>} */}
        </div>

        <div>
            <label>Código Postal</label>
            <select 
            className="form-control"
            name='AclaracionCodigoPostal'
            onChange={(e) => handleChange(e)} 
            value={aclaracion.AclaracionCodigoPostal}>
                <option value="" disabled>Seleccione una opción</option>
                {valorCP.map(cp =>
                    <option key={cp.codigoPostal} value={cp.codigoPostal}>{cp.codigoPostal}</option>
                )}
            </select>
             {/* {errors.RecCodigoPostal && <div className="invalid-feedback">{errors.RecCodigoPostal}</div>} */}
        </div>

        <div>
            <label>Colonia</label>
            <select 
            className="form-control"
            name='AclaracionColonia'
            value={aclaracion.AclaracionColonia}
            onChange={(e) => handleChange(e)}>
                <option value="" disabled>Seleccione una opción</option>
                {coloniaValue.map(colonia =>
                    <option key={colonia.idColonia} value={colonia.idColonia}>{colonia.colonia1}</option>
                )}
            </select>
             {/* {errors.RecColonia && <div className="invalid-feedback">{errors.RecColonia}</div>} */}
        </div>

        <div>
            <label>Tipo de persona  </label>
            <div>
            <label>
           <input
                type='radio'
                name='AclaracionTipoPersona'
                checked={aclaracion.AclaracionTipoPersona === "1"}
                onChange={(e) => handleChange(e)}
                value={"1"}/>
                Física </label>
            <label>
            <input
                type='radio'
                checked={aclaracion.AclaracionTipoPersona  === "2"}
                onChange={(e) => handleChange(e)}
                name='AclaracionTipoPersona'
                value={"2"}/> Moral
            </label>
            </div>
           
             {/* {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>} */}
        </div>

         <div>
            <label>Sexo</label>
            <div>
            <label>
                <input
                name="AclaracionSexo"
                value={"H"}
                checked={aclaracion.AclaracionSexo === "H"}
                onChange={(e) => handleChange(e)}
                disabled={ aclaracion.AclaracionTipoPersona === "2"}
                type='radio'/> Hombre
            </label>
            <label>
                <input
                name="AclaracionSexo"
                checked={aclaracion.AclaracionSexo === "M"}
                value={"M"}
                disabled={aclaracion.AclaracionTipoPersona === "2"}
                onChange={(e) => handleChange(e)}
                type='radio'/> Mujer
            </label>
            </div>
            </div>
                    {/* {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>} */}
            <div>
                <label>Edad</label>
                <input
                type='number'
                name='AclaracionEdad'
                value={aclaracion.AclaracionEdad}
                disabled={aclaracion.AclaracionTipoPersona === "2"}
                onChange={(e) => handleChange(e)}
                className="form-control"
                />
                {/* {errors.RecEdad && <div className="invalid-feedback">{errors.RecEdad}</div>} */}
            </div>

             <div>
            <label>Es Monetario</label>
            <div>
            <label>
                <input
                onChange={(e) => handleChange(e)} 
                type="radio"
                checked={aclaracion.AclaracionMonetario === "SI"}
                value={"SI"}
                name="AclaracionMonetario"/> Sí
            </label>
            <label>
                <input
                onChange={(e) => handleChange(e)} 
                type="radio"
                value={"NO"}
                checked={aclaracion.AclaracionMonetario === "NO"}
                name="AclaracionMonetario"/> No
            </label>
            </div>
             {/* {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>} */}
        </div>

        <div>
            <label>Monto Reclamado</label>
            <input
            type='number'
            step="0.00"
            value={aclaracion.AclaracionMontoReclamado}
            onChange={(e) => handleChange(e)}
            name='AclaracionMontoReclamado'
            disabled={aclaracion.AclaracionMonetario === "NO"}
            className="form-control"
            />
             {/* {errors.RecMontoReclamado && <div className="invalid-feedback">{errors.RecMontoReclamado}</div>} */}
        </div>
                 
        <div>
            <label>Estado de la reclamación </label>
            <label>
            <input
            type='radio'
            name='AclaracionEstadoConPend'
            value={"1"}
            checked={aclaracion.AclaracionEstadoConPend === "1"}
            onChange={(e) => handleChange(e)}
            /> Pendiente</label>
             <label>
            <input
            type='radio'
            name='AclaracionEstadoConPend'
            checked={aclaracion.AclaracionEstadoConPend === "2"}
            value={"2"}
             onChange={(e) => handleChange(e)}
            /> Concluido</label>
        </div>         
            {/* {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>} */}
        <div>
            <label>Fecha de resolución</label>
            <input
            type='date'
            onChange={(e) => handleChange(e)}
            value={aclaracion.AclaracionFechaResolucion}
            disabled={aclaracion.AclaracionEstadoConPend === "1"}
            className="form-control"
            name='AclaracionFechaResolucion'/>
             {/* {errors.RecFechaResolucion && <div className="invalid-feedback">{errors.RecFechaResolucion}</div>} */}
        </div>

        <div>
            <label>
                Fecha de notificación
            </label>
           <input
            type='date'
            onChange={(e) => handleChange(e)}
            value={aclaracion.AclaracionFechaNotifiUsuario}
            disabled={aclaracion.AclaracionEstadoConPend === "1"}
            className="form-control"
            name='AclaracionFechaNotifiUsuario'/>
            {/* {errors.RecFechaNotifiUsuario && <div className="invalid-feedback">{errors.RecFechaNotifiUsuario}</div>} */}
        </div>

       

        <div>
            <label>Folio Asignado por CONDUSEF</label>
            <input
            name='AclaracionFolioCondusef'
            onChange={(e) => handleChange(e)}
            disabled={aclaracion.AclaracionMedioRecepcionCanal !== "6" && aclaracion.AclaracionMedioRecepcionCanal !== "7"}
            className="form-control"
            value={aclaracion.AclaracionFolioCondusef}/>
             {/* {errors.RecFolioCondusef && <div className="invalid-feedback">{errors.RecFolioCondusef}</div>} */}
        </div>

        <div>
            <label>Reversa SIGE</label>
            <label>
                <input
                type='radio'
                checked={aclaracion.AclaracionReversa === "1"}
                onChange={(e) => handleChange(e)}
                disabled={aclaracion.AclaracionMedioRecepcionCanal !== "6"}
                name='AclaracionReversa'
                value={"1"}
                /> Si</label>
            <label>
               <input
                type='radio'
                checked={aclaracion.AclaracionReversa === "0"}
                onChange={(e) => handleChange(e)}
                disabled={aclaracion.AclaracionMedioRecepcionCanal !== "6"}
                name='AclaracionReversa'
                value={"0"}
                /> No
            </label>
             {/* {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>} */}
        </div>

        <div>
            <label>¿Es una operación en el extranjero?</label>
            <label>
            <input
            type="radio"
            onChange={(e) => handleChange(e)}
            name='AclaracionOperacionExtranjero'
            value={"SI"}
            checked={aclaracion.AclaracionOperacionExtranjero === "SI"}
            /> Sí
            </label>
            <label>
            <input
            type="radio"
            onChange={(e) => handleChange(e)}
            name='AclaracionOperacionExtranjero'
            checked={aclaracion.AclaracionOperacionExtranjero === "NO"}
            value={"NO"}
            /> No
            </label>
        </div>

             <div>
                <button onClick={enviar} className="btn btn-primary">Enviar</button>
             </div>
             </div>
        </>
    )

}

export default aclaraciones;