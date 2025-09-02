'use client';
import { set } from 'date-fns';
import '../../css/styles.css';
const { useState, useEffect, use } = require('react');
import { useToken } from "../../context/TokenContext";
const Reclamaciones = () => {
//Reclamaciones tipo 2 para productos
    const { token } = useToken();
    const API_URL = process.env.NEXT_PUBLIC_URL;
    const AMBIENTE = process.env.NEXT_PUBLIC_AMBIENTE;
    const tipo = 2; //Tipo 2 reclamaciones
    const [resp, setResp] = useState({
                RecDenominacion: "",
                RecSector: "",
                RecTrimestre: "",
                RecNumero: "",
                RecFolioAtencion: "",
                RecEstadoConPend: "2",
                RecFechaReclamacion: "",
                RecFechaAtencion: "",
                RecMedioRecepcionCanal: "",
                RecProductoServicio: "",
                RecCausaMotivo: "",
                RecFechaResolucion: "",
                RecFechaNotifiUsuario: "",
                RecEntidadFederativa: "",
                RecCodigoPostal: "",
                RecMunicipioAlcaldia: "",
                RecLocalidad: "",
                RecColonia: "",
                RecMonetario: "SI",
                RecMontoReclamado: "0.00",
                RecImporteAbonado: "0.00",
                RecFechaAbonoImporte: "",
                RecPori: "SI",
                RecTipoPersona: "1",
                RecSexo: "M",
                RecEdad: "",
                RecSentidoResolucion: "",
                RecNivelAtencion: "",
                RecFolioCondusef: "",
                RecReversa: null,
                });
    

    //  useEffect(() => {
    //           async function fetchToken() {
    //             const res = await fetch("/api/token");
    //             const data = await res.json();
    //             setToken(data.token || null);
    //           }
    //           fetchToken();
    //         }, []);
      

  

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
                "nivelDeAtencionDsc": "Vía Electrónica"
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

  const resoluciones = [
  { valor: "1", resolucion: "Totalmente favorable al Usuario" },
  { valor: "2", resolucion: "Desfavorable al Usuario" },
  { valor: "3", resolucion: "Parcialmente favorable al Usuario" }
];

    const [errors, setErrors] = useState({});
    const [valorCausas, setValorCausas] = useState([]);
    const [valorProductos, setValorProductos] = useState([]);
    const [valorMunicipio, setValorMunicipio] = useState([]);
    const [valorCP, setValorCP] = useState([]);
    const [coloniaValue, setColoniaValue] = useState([]);

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
    
                }catch(error){
                    console.log(error);
                }
            }
            fetchProductos();
        },[token]);

    useEffect(() => { //Causas
        if(!resp.RecProductoServicio) return;
         const fetchCausas = async () => {
          const response = await fetch(`${API_URL}/ProductosEmpresas/CausasReune?producto=${resp.RecProductoServicio}&tipo=${tipo}`, {
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
         }
            fetchCausas();
      //  https://localhost:7030/ProductosEmpresas/CausasReune?producto=028212711376&tipo=2
    }, [resp.RecProductoServicio]);
    
    useEffect(() => { //Municipios
            if(!resp.RecEntidadFederativa) return;
               const fetchMunicipio = async () => {
                   const respuesta = await fetch(`${API_URL}/Entidades/Municipios?entidad=${resp.RecEntidadFederativa}`)
                   const data = await respuesta.json()
                   setValorMunicipio(data)
                   resp.RecMunicipioAlcaldia = "";
               }
           fetchMunicipio();
              
           },[resp.RecEntidadFederativa])
   
    useEffect(() => { //Codigos postales
            if(!resp.RecMunicipioAlcaldia) return;
             const fetchCP = async () => {
                 const respuesta = await fetch(`${API_URL}/Entidades/CP?municipio=${resp.RecMunicipioAlcaldia}&estado=${resp.RecEntidadFederativa}`)
                 const data = await respuesta.json()
                 setValorCP(data)
                 
             }
             fetchCP();
            
           },[resp.RecMunicipioAlcaldia])
   
    useEffect(() => { //Colonias
        if (!resp.RecCodigoPostal) return;  
        const fetchColonia = async () => {
        const respuesta = await fetch(`${API_URL}/Entidades/Colonias?codigo_postal=${resp.RecCodigoPostal}`)
        const data = await respuesta.json()
        
        setColoniaValue(data)
        }
        fetchColonia();
           },[resp.RecCodigoPostal])
           
    useEffect(() => { 
        if(!resp.RecMedioRecepcionCanal) return;
        if(resp.RecMedioRecepcionCanal === "6") 
        setResp(prev => ({
            ...prev,
            RecReversa: "1"
        }));
        else {
             setResp(prev => ({
            ...prev,
            RecReversa: ""
        }));
        }
    },[resp.RecMedioRecepcionCanal])

     const enviar = () => {
        const data = {
             ...resp,
        RecTrimestre: parseInt(resp.RecTrimestre) || 0,
        RecEstadoConPend: parseInt(resp.RecEstadoConPend) || 0,
        RecNumero: parseInt(resp.RecNumero) || 0,
        RecMedioRecepcionCanal: parseInt(resp.RecMedioRecepcionCanal) || 0,
        RecEntidadFederativa: parseInt(resp.RecEntidadFederativa) || 0,
        RecCodigoPostal: parseInt(resp.RecCodigoPostal) || 0,
        RecMunicipioAlcaldia: parseInt(resp.RecMunicipioAlcaldia) || 0,
        RecLocalidad: parseInt(resp.RecLocalidad) || 0,
        RecMontoReclamado:
                        resp.RecMontoReclamado !== null && resp.RecMontoReclamado !== ''
                            ? parseFloat(resp.RecMontoReclamado)
                            : null,
        RecImporteAbonado:
                    resp.RecImporteAbonado !== null && resp.RecImporteAbonado !== ''
                        ? parseFloat(resp.RecImporteAbonado)
                        : null,
        RecTipoPersona: parseInt(resp.RecTipoPersona) || 1,
        RecEdad: parseInt(resp.RecEdad) || 0,
        RecSentidoResolucion: parseInt(resp.RecSentidoResolucion) || 1,
        RecNivelAtencion: parseInt(resp.RecNivelAtencion) || 0,
        RecReversa:
                    resp.RecReversa !== null && resp.RecReversa !== ''
                        ? parseFloat(resp.RecReversa)
                        : null
        }

        const errors = validarQueja(data);
        setErrors(errors);
       
        console.log(data);
    }

    const validarQueja = (data) => {
      let errores = {};
        if (!data.RecDenominacion?.trim()) errores.RecDenominacion = "La denominación es obligatoria.";
        if (!data.RecSector?.trim()) errores.RecSector = "El sector es obligatorio.";
        if (!data.RecTrimestre) errores.RecTrimestre = "El trimestre es obligatorio.";
        if (!data.RecNumero) errores.RecNumero = "El número de Reclamación es obligatorio.";
        if (!data.RecFolioAtencion?.trim()) errores.RecFolioAtencion = "El folio de atención es obligatorio.";
        // if (!data.RecEstadoConPend) errores.RecEstadoConPend = "El estado con pendiente es obligatorio.";
        if (!data.RecFechaReclamacion) errores.RecFechaReclamacion = "La fecha de reclamación es obligatoria.";
        if (!data.RecFechaAtencion) errores.RecFechaAtencion = "La fecha de atención es obligatoria.";
        if (data.RecNivelAtencion < 1) errores.RecNivelAtencion = "El nivel de atención es obligatorio.";
        if (data.RecMedioRecepcionCanal<1) errores.RecMedioRecepcionCanal = "El medio de recepción es obligatorio.";
        if (!data.RecProductoServicio?.trim()) errores.RecProductoServicio = "El producto o servicio es obligatorio.";
        if (!data.RecCausaMotivo?.trim()) errores.RecCausaMotivo = "La causa o motivo es obligatorio.";
        if (data.RecEntidadFederativa < 1) errores.RecEntidadFederativa = "La entidad federativa es obligatoria.";
        if (data.RecMunicipioAlcaldia < 1) errores.RecMunicipioAlcaldia = "El municipio o alcaldía es obligatorio.";
        if (data.RecCodigoPostal < 1) errores.RecCodigoPostal = "El código postal es obligatorio.";
        // if (data.RecColonia?.trim()) errores.RecColonia = "La colonia es obligatoria.";
        // if (!data.RecTipoPersona?.trim()) errores.RecTipoPersona = "El tipo de persona es obligatorio.";
        if(data.RecTipoPersona === 1) { //Validacion si es para persona física
            //  if (!data.RecSexo?.trim()) errores.RecSexo = "El sexo es obligatorio.";
             if (data.RecEdad < 18) errores.RecEdad = "La edad es obligatoria y debe ser mayor de 18 años.";
        }

        // if (!data.RecMonetario?.trim()) errores.RecMonetario = "El campo monetario es obligatorio.";
        if(data.RecMonetario === "SI") {
            if (!data.RecMontoReclamado || data.RecMontoReclamado === "0.00") errores.RecMontoReclamado = "El monto reclamado es obligatorio.";
            if (!data.RecImporteAbonado || data.RecImporteAbonado === "0.00") errores.RecImporteAbonado = "El importe abonado es obligatorio.";
            if (!data.RecFechaAbonoImporte) errores.RecFechaAbonoImporte = "La fecha de abono del importe es obligatoria.";
        }

        if(data.RecEstadoConPend === 2) { //Si es concluido
            if (!data.RecFechaResolucion) errores.RecFechaResolucion = "La fecha de resolución es obligatoria.";
            if (!data.RecFechaNotifiUsuario) errores.RecFechaNotifiUsuario = "La fecha de notificación al usuario es obligatoria.";
            if (!data.RecSentidoResolucion < 1) errores.RecSentidoResolucion = "El sentido de la resolución es obligatorio.";
            // if (!data.RecFolioCondusef?.trim()) errores.RecFolioCondusef = "El folio CONDUSEF es obligatorio.";
        }

      return errores;
    }

    const handleChange = (e) => {
        const {name,value} = e.target; 
        if (name === "RecTipoPersona" && value === "2") {
        setResp(prev => ({
            ...prev,
            [name]: value,
            RecSexo: "",
            RecEdad: ""
        }));
        } else if(name === "RecMonetario" && value === "NO") {
            setResp(prev => ({
                ...prev,
                 [name]: value,
                RecImporteAbonado: "",
                RecFechaAbonoImporte: "",
                RecMontoReclamado: "",
            }));

        } else if(name === "RecEstadoConPend" && value === "1") {
            setResp(prev => ({
                ...prev,
                [name]: value,
                RecFechaResolucion: "",
                RecFechaNotifiUsuario: "",
                RecSentidoResolucion: "",
                RecFolioCondusef: "",
            }));
        } else if(name === "RecMedioRecepcionCanal" && value !== "6") {
            setResp(prev => ({
                ...prev,
                [name]: value,
                RecReversa: "",
            }));

        }
            else {
            setResp(prev => ({
                ...prev,
            [name]: value
        }));
    }

       
   
    };
    return(
        <><h1>Reclamaciones</h1>
        <div className="Cuestionario">
            
            <div>
            <label>Trimestre</label>
            <select onChange={handleChange} name='RecTrimestre' value={resp.RecTrimestre} className={`form-control ${errors.RecTrimestre ? "is-invalid" : ""}`}>
                <option value="" disabled>Seleccione una opción</option>
                {Trimestre.map(Tri => 
                    <option key={Tri.value} value={Tri.value}>{Tri.name}</option>
                )}
            </select>
             {errors.RecTrimestre && <div className="invalid-feedback">{errors.RecTrimestre}</div>}
        </div>
        <div>
        <label>Número de relamaciones</label>
            <input
            name="RecNumero"
            type="number"
            value={resp.RecNumero}
            className={`form-control ${errors.RecNumero ? "is-invalid" : ""}`}
            onChange={(e) => handleChange(e)}/>
            {errors.RecNumero && <div className="invalid-feedback">{errors.RecNumero}</div>}
        </div>
        <div>
            <label>Folio de atención</label>       
            <input
            name="RecFolioAtencion"
            className={`form-control ${errors.RecFolioAtencion ? "is-invalid" : ""}`}
            value={resp.RecFolioAtencion}
            onChange={(e) => handleChange(e)}/> 
            {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>}
        </div>
        <div>
            <label>Fecha de reclamación</label>
            <input
            type='date'
            name='RecFechaReclamacion'
            value={resp.RecFechaReclamacion}
            onChange={(e) => handleChange(e)}
            className={`form-control ${errors.RecFechaReclamacion ? "is-invalid" : ""}`}/>
            {errors.RecFechaReclamacion && <div className="invalid-feedback">{errors.RecFechaReclamacion}</div>}
        </div>

        <div>
            <label>Fecha de Atención</label>
            <input
            name='RecFechaAtencion'
            type='date'
            className={`form-control ${errors.RecFechaAtencion ? "is-invalid" : ""}`}
            onChange={(e) => handleChange(e)}
            value={resp.RecFechaAtencion}/>
            {errors.RecFechaAtencion && <div className="invalid-feedback">{errors.RecFechaAtencion}</div>}
        </div>

        <div>
            <label>Nivel de atención o contacto</label>
            <select className={`form-control ${errors.RecNivelAtencion ? "is-invalid" : ""}`} name='RecNivelAtencion' onChange={(e) => handleChange(e)} value={resp.RecNivelAtencion}>
                <option value="" disabled>Seleccione una opción</option>
                {niveles_atencion.nivelesDeAtencion.map(nivel =>
                    <option key={nivel.nivelDeAtencionId} value={nivel.nivelDeAtencionId}>{nivel.nivelDeAtencionDsc}</option>
                )}
            </select>
             {errors.RecNivelAtencion && <div className="invalid-feedback">{errors.RecNivelAtencion}</div>}
        </div>
        <div>
            <label>Medio o canal de recepción</label>
            <select name='RecMedioRecepcionCanal' onChange={(e) => handleChange(e)}
             className={`form-control ${errors.RecMedioRecepcionCanal ? "is-invalid" : ""}`}
             value={resp.RecMedioRecepcionCanal}>
                <option value="" disabled>Seleccione una opción</option>
                {medios_recepcion.map(nivel =>
                    <option key={nivel.id_medio} value={nivel.id_medio}>{nivel.descripcion}</option>
                )}
            </select>
             {errors.RecMedioRecepcionCanal && <div className="invalid-feedback">{errors.RecMedioRecepcionCanal}</div>}
        </div>

        <div>
            <label>Producto y/o Servicio</label>
            <select 
                    className={`form-control ${errors.RecProductoServicio ? "is-invalid" : ""}`}
                    name='RecProductoServicio' value={resp.RecProductoServicio} 
                    onChange={(e) => handleChange(e)}>
                <option value="">Seleccione una opción</option>
                {valorProductos.map(producto =>
                    <option key={producto.id} value={producto.codigoProducto}>{producto.tipoOperacion}- {producto.producto}</option>
                )}
            </select>
             {errors.RecProductoServicio && <div className="invalid-feedback">{errors.RecProductoServicio}</div>}
        </div>

        <div>
            <label>Causa o motivo</label>
            <select 
                    className={`form-control ${errors.RecCausaMotivo ? "is-invalid" : ""}`}
                    name='RecCausaMotivo' 
                    onChange={(e) => handleChange(e)} 
                    value={resp.RecCausaMotivo}>
                <option value="">Seleccione una opción</option>
                {valorCausas.map(causa =>
                    <option key={causa.id} value={causa.idCausa}>{causa.descripcion}</option>
                )}
            </select>
             {errors.RecCausaMotivo && <div className="invalid-feedback">{errors.RecCausaMotivo}</div>}
        </div>

        <div>
            <label>PORI (Posible robo de identidad)</label>
            <label>
            <input
            type='radio'
            name='RecPori'
            onChange={(e) => handleChange(e)}
            value={"SI"}
            // className={` ${errors.RecPori ? "is-invalid" : ""}`}
            checked={resp.RecPori === 'SI'}/>Si</label>
            <label>
              <input
            type='radio'
            name='RecPori'
            onChange={(e) => handleChange(e)}
            value={"NO"}
            // className={` ${errors.RecPori ? "is-invalid" : ""}`}
            checked={resp.RecPori === 'NO'}/>No </label>
        </div>

       

        <div>
            <label>Entidad Federativa</label>
            <select 
            onChange={(e) => handleChange(e)} 
            value={resp.RecEntidadFederativa}
            name='RecEntidadFederativa'
            className={`form-control ${errors.RecEntidadFederativa ? "is-invalid" : ""}`}>
                <option value="">Seleccione una opción</option>
                {entidad_federativa.estados.map(estado => 
                    <option key={estado.claveEdo} value={estado.claveEdo}>{estado.estado}</option>
                )}
            </select>
             {errors.RecEntidadFederativa && <div className="invalid-feedback">{errors.RecEntidadFederativa}</div>}
        </div>

        <div>
            <label>Municipio o alcaldía</label>
            <select
            className={`form-control ${errors.RecMunicipioAlcaldia ? "is-invalid" : ""}`}
            name='RecMunicipioAlcaldia'
            onChange={(e) => handleChange(e)} 
            value={resp.RecMunicipioAlcaldia}>
                <option value="">Seleccione una opción</option>
                {valorMunicipio.map(municipio =>
                    <option key={municipio.idMunicipio} value={municipio.idMunicipio}>{municipio.municipio}</option>
                )}
            </select>
             {errors.RecMunicipioAlcaldia && <div className="invalid-feedback">{errors.RecMunicipioAlcaldia}</div>}
        </div>

        <div>
            <label>Código Postal</label>
            <select 
            className={`form-control ${errors.RecCodigoPostal ? "is-invalid" : ""}`}
            name='RecCodigoPostal'
            onChange={(e) => handleChange(e)} 
            value={resp.RecCodigoPostal}>
                <option value="" disabled>Seleccione una opción</option>
                {valorCP.map(cp =>
                    <option key={cp.codigoPostal} value={cp.codigoPostal}>{cp.codigoPostal}</option>
                )}
            </select>
             {errors.RecCodigoPostal && <div className="invalid-feedback">{errors.RecCodigoPostal}</div>}
        </div>

        <div>
            <label>Colonia</label>
            <select 
            className={`form-control ${errors.RecColonia ? "is-invalid" : ""}`}
            name='RecColonia'
            value={resp.RecColonia}
            onChange={(e) => handleChange(e)}>
                <option value="" disabled>Seleccione una opción</option>
                {coloniaValue.map(colonia =>
                    <option key={colonia.idColonia} value={colonia.idColonia}>{colonia.colonia1}</option>
                )}
            </select>
             {errors.RecColonia && <div className="invalid-feedback">{errors.RecColonia}</div>}
        </div>

        <div>
            <label>Tipo de persona  </label>
            <div>
            <label>
           <input
                type='radio'
                name='RecTipoPersona'
                checked={resp.RecTipoPersona  === "1"}
                onChange={(e) => handleChange(e)}
                value={"1"}/>
                Física </label>
            <label>
            <input
                type='radio'
                checked={resp.RecTipoPersona  === "2"}
                onChange={(e) => handleChange(e)}
                name='RecTipoPersona'
                value={"2"}/> Moral
            </label>
            </div>
           
             {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>}
        </div>

         <div>
            <label>Sexo</label>
            <div>
            <label>
                <input
                name="RecSexo"
                value={"H"}
                checked={resp.RecSexo === "H"}
                onChange={(e) => handleChange(e)}
                disabled={ resp.RecTipoPersona === "2"}
                type='radio'/> Hombre
            </label>
            <label>
                <input
                name="RecSexo"
                checked={resp.RecSexo === "M"}
                value={"M"}
                disabled={ resp.RecTipoPersona === "2"}
                onChange={(e) => handleChange(e)}
                type='radio'/> Mujer
            </label>
            </div>
            </div>
                 {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>}
        <div>
            <label>Edad</label>
            <input
            type='number'
            name='RecEdad'
            value={resp.RecEdad}
            disabled={ resp.RecTipoPersona === "2"}
            onChange={(e) => handleChange(e)}
            className={`form-control ${errors.RecEdad ? "is-invalid" : ""}`}/>
             {errors.RecEdad && <div className="invalid-feedback">{errors.RecEdad}</div>}
        </div>

        <div>
            <label>Es Monetario</label>
            <div>
            <label>
                <input
                onChange={(e) => handleChange(e)} 
                type="radio"
                checked={resp.RecMonetario === "SI"}
                value={"SI"}
                name="RecMonetario"/> Sí
            </label>
            <label>
                <input
                onChange={(e) => handleChange(e)} 
                type="radio"
                value={"NO"}
                checked={resp.RecMonetario === "NO"}
                name="RecMonetario"/> No
            </label>
            </div>
             {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>}
        </div>

        <div>
            <label>Monto Reclamado</label>
            <input
            type='number'
            step="0.00"
            value={resp.RecMontoReclamado}
            onChange={(e) => handleChange(e)}
            name='RecMontoReclamado'
            disabled={resp.RecMonetario === "NO"}
            className={`form-control ${errors.RecMontoReclamado ? "is-invalid" : ""}`}/>
             {errors.RecMontoReclamado && <div className="invalid-feedback">{errors.RecMontoReclamado}</div>}
        </div>

        <div>
            <label>Monto Abonado</label>
            <input
            type='number'
            step="0.00"
            value={resp.RecImporteAbonado}
            onChange={(e) => handleChange(e)}
            disabled={resp.RecMonetario === "NO"}
            name='RecImporteAbonado'
            className={`form-control ${errors.RecImporteAbonado ? "is-invalid" : ""}`}/>
             {errors.RecImporteAbonado && <div className="invalid-feedback">{errors.RecImporteAbonado}</div>}
        </div>

         <div>
            <label>Fecha de Abono</label>
            <input
            type='date'
            onChange={(e) => handleChange(e)}
            value={resp.RecFechaAbonoImporte}
            disabled={resp.RecMonetario === "NO"}
            className={`form-control ${errors.RecFechaAbonoImporte ? "is-invalid" : ""}`}
            name='RecFechaAbonoImporte'/>
             {errors.RecFechaAbonoImporte && <div className="invalid-feedback">{errors.RecFechaAbonoImporte}</div>}
        </div>
        
        <div>
            <label>Estado de la reclamación </label>
            <label>
            <input
            type='radio'
            name='RecEstadoConPend'
            value={"1"}
            checked={resp.RecEstadoConPend === "1"}
            onChange={(e) => handleChange(e)}
            /> Pendiente</label>
             <label>
            <input
            type='radio'
            name='RecEstadoConPend'
            checked={resp.RecEstadoConPend === "2"}
            value={"2"}
             onChange={(e) => handleChange(e)}
            /> Concluido</label>
        </div>         
            {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>}
        <div>
            <label>Fecha de resolución</label>
            <input
            type='date'
            onChange={(e) => handleChange(e)}
            value={resp.RecFechaResolucion}
            disabled={resp.RecEstadoConPend === "1"}
            className={`form-control ${errors.RecFechaResolucion ? "is-invalid" : ""}`}
            name='RecFechaResolucion'/>
             {errors.RecFechaResolucion && <div className="invalid-feedback">{errors.RecFechaResolucion}</div>}
        </div>

        <div>
            <label>
                Fecha de notificación
            </label>
           <input
            type='date'
            onChange={(e) => handleChange(e)}
            value={resp.RecFechaNotifiUsuario}
            disabled={resp.RecEstadoConPend === "1"}
            className={`form-control ${errors.RecFechaNotifiUsuario ? "is-invalid" : ""}`}
            name='RecFechaNotifiUsuario'/>
            {errors.RecFechaNotifiUsuario && <div className="invalid-feedback">{errors.RecFechaNotifiUsuario}</div>}
        </div>

        <div>
            <label>Sentido de la resolución</label>
            <select 
             className={`form-control ${errors.RecSentidoResolucion ? "is-invalid" : ""}`}
             disabled={resp.RecEstadoConPend === "1"}
             name='RecSentidoResolucion'
             onChange={(e) => handleChange(e)} 
             value={resp.RecSentidoResolucion}>
                <option value="">Seleccione una opción</option>
                {resoluciones.map(resolucion =>
                    <option key={resolucion.valor} value={resolucion.valor}>{resolucion.resolucion}</option>
                )}
            </select>
             {errors.RecSentidoResolucion && <div className="invalid-feedback">{errors.RecSentidoResolucion}</div>}
        </div>

        <div>
            <label>Folio Asignado por CONDUSEF</label>
            <input
            name='RecFolioCondusef'
            onChange={(e) => handleChange(e)}
            disabled={resp.RecMedioRecepcionCanal !== "6" && resp.RecMedioRecepcionCanal !== "7"}
            className={`form-control ${errors.RecFolioCondusef ? "is-invalid" : ""}`}
            value={resp.RecFolioCondusef}/>
             {errors.RecFolioCondusef && <div className="invalid-feedback">{errors.RecFolioCondusef}</div>}
        </div>

        <div>
            <label>Reversa SIGE</label>
            <label>
                <input
                type='radio'
                checked={resp.RecReversa === "1"}
                onChange={(e) => handleChange(e)}
                disabled={resp.RecMedioRecepcionCanal !== "6"}
                name='RecReversa'
                value={"1"}
                /> Si</label>
            <label>
               <input
                type='radio'
                checked={resp.RecReversa === "0"}
                onChange={(e) => handleChange(e)}
                disabled={resp.RecMedioRecepcionCanal !== "6"}
                name='RecReversa'
                value={"0"}
                /> No
            </label>
             {errors.RecFolioAtencion && <div className="invalid-feedback">{errors.RecFolioAtencion}</div>}
        </div>

        <div>
            <button className='btn btn-primary' onClick={enviar}>Enviar</button>

        </div>
       
        </div>
        </>
    );
};

export default Reclamaciones;