'use client';
import '../../css/styles.css';
const { useState, useEffect } = require('react');
const Reclamaciones = () => {
//Reclamaciones tipo 2 para productos
    const [resp, setResp] = useState({
                RecDenominacion: "",
                RecSector: "",
                RecTrimestre: "",
                RecNumero: "",
                RecFolioAtencion: "",
                RecEstadoConPend: "",
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
                RecMonetario: "",
                RecMontoReclamado: "0.00",
                RecImporteAbonado: "0.00",
                RecFechaAbonoImporte: "",
                RecPori: "",
                RecTipoPersona: "",
                RecSexo: "",
                RecEdad: "",
                RecSentidoResolucion: "",
                RecNivelAtencion: "",
                RecFolioCondusef: "",
                RecReversa: "",
                RecFolioR27: ""
                });

    const API_URL = process.env.NEXT_PUBLIC_URL;
    const AMBIENTE = process.env.NEXT_PUBLIC_AMBIENTE;

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

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const response = await fetch('/api/productos');
        }
    }, []);

    

     const enviar = () => {
        const data = {
             ...resp,
        RecTrimestre: parseInt(resp.RecTrimestre) || 0,
        RecEstadoConPend: parseInt(resp.RecEstadoConPend) || 0,
        RecNumero: parseInt(resp.RecNumero) || 0,
        RecMedioRecepcionCanal: parseInt(resp.RecMedioRecepcionCanal) || 0,
        RecEntidadFederativa: parseInt(resp.RecEntidadFederativa) || 1,
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
        RecNivelAtencion: parseInt(resp.RecNivelAtencion) || 1,
        RecReversa:
                    resp.RecReversa !== null && resp.RecReversa !== ''
                        ? parseFloat(resp.RecReversa)
                        : null
        }
       

        console.log(data);
    }

    const handleChange = (e) => {
        const {name,value} = e.target; 
        setResp({
            ...resp,
            [name]: value
        });
   
    };
    return(
        <><h1>Reclamaciones</h1>
        <div className="Cuestionario">
            
            <div>
            <label>Trimestre</label>
            <select onChange={handleChange} name='RecTrimestre' value={resp.RecTrimestre} className='form-control'>
                <option value="" disabled>Seleccione una opción</option>
                {Trimestre.map(Tri => 
                    <option key={Tri.value} value={Tri.value}>{Tri.name}</option>
                )}
            </select>
        </div>
        <div>
        <label>Número de relamaciones</label>
            <input
            name="RecNumero"
            type="number"
            value={resp.RecNumero}
            className="form-control"
            onChange={(e) => handleChange(e)}/>
        </div>
        <div>
            <label>Folio de atención</label>       
            <input
            name="RecFolioAtencion"
            className="form-control"
            value={resp.RecFolioAtencion}
            onChange={(e) => handleChange(e)}/> 
        </div>
        <div>
            <label>Fecha de reclamación</label>
            <input
            type='date'
            name='RecFechaReclamacion'
            value={resp.RecFechaReclamacion}
            onChange={(e) => handleChange(e)}
            className='form-control'/>
        </div>
        <div>
            <label>Medio o canal de recepción</label>
            <select name='RecMedioRecepcionCanal' onChange={(e) => handleChange(e)} className='form-control' value={resp.RecMedioRecepcionCanal}>
                <option value="" disabled>Seleccione una opción</option>
                {medios_recepcion.map(nivel =>
                    <option key={nivel.id_medio} value={nivel.id_medio}>{nivel.descripcion}</option>
                )}
            </select>
        </div>

         <div>
            <label>Fecha de Atención</label>
            <input
            name='RecFechaAtencion'
            type='date'
            className='form-control'
            onChange={(e) => handleChange(e)}
            value={resp.RecFechaAtencion}/>
        </div>

        <div>
            <label>Producto y/o Servicio</label>
            <select className='form-control' name='RecProductoServicio' onChange={(e) => handleChange(e)} value={resp.RecProductoServicio}>
                <option value="">Seleccione una opción</option>
            </select>
        </div>

        <div>
            <label>Causa o motivo</label>
            <select className='form-control' name='RecCausaMotivo' onChange={(e) => handleChange(e)} value={resp.RecCausaMotivo}>
                <option value="">Seleccione una opción</option>
            </select>
        </div>

        <div>
            <label>PORI (Posible robo de identidad)</label>
            <label>
            <input
            type='radio'
            name='RecPori'
            onChange={(e) => handleChange(e)}
            value={"SI"}
            checked={resp.RecPori === 'SI'}/>Si</label>
            <label>
              <input
            type='radio'
            name='RecPori'
            onChange={(e) => handleChange(e)}
            value={"NO"}
            checked={resp.RecPori === 'NO'}/>No </label>
        </div>

        <div>
            <label>Estado de la reclamación </label>
            <label>
            <input
            type='radio'
            name='RecFolioConPend'
            value={1}
            checked={resp.RecFolioConPend === 1}
            onChange={(e) => handleChange(e)}
            /> Pendiente</label>
             <label>
            <input
            type='radio'
            name='RecFolioConPend'
            checked={resp.RecFolioConPend === 2}
            value={2}
             onChange={(e) => handleChange(e)}
            /> Concluido</label>
        </div>

        <div>
            <label>Entidad Federativa</label>
            <select 
            onChange={(e) => handleChange(e)} 
            value={resp.RecEntidadFederativa}
            name='RecEntidadFederativa'
            className='form-control'>
                <option value="">Seleccione una opción</option>
                {entidad_federativa.estados.map(estado => 
                    <option key={estado.claveEdo} value={estado.claveEdo}>{estado.estado}</option>
                )}
            </select>
        </div>

        <div>
            <label>Municipio o alcaldía</label>
            <select
            className='form-control'>
                <option value="">Seleccione una opción</option>
            </select>
        </div>

        <div>
            <label>Código Postal</label>
            <select 
            className='form-control'
            name='RecCodigoPostal'
            onChange={(e) => handleChange(e)} 
            value={resp.RecCodigoPostal}>
                <option value="" disabled>Seleccione una opción</option>
            </select>
        </div>

        <div>
            <label>Colonia</label>
            <select 
            className='form-control'
            name='RecColonia'
            value={resp.RecColonia}
            onChange={(e) => handleChange(e)}>
                <option value="" disabled>Seleccione una opción</option>
            </select>
        </div>

        <div>
            <label>Tipo de persona  </label>
            <div>
            <label>
           <input
                type='radio'
                name='RecTipoPersona'
                checked={resp.RecFolioConPend === 1}
                onChange={(e) => handleChange(e)}
                value={1}/>
                Física </label>
            <label>
            <input
                type='radio'
                checked={resp.RecFolioConPend === 1}
                onChange={(e) => handleChange(e)}
                name='RecTipoPersona'
                value={2}/> Moral
            </label>
            </div>
           
            
        </div>

         <div>
            <label>Sexo</label>
            <div>
            <label>
                <input
                type='radio'/>Hombre
            </label>
            <label>
                <input
                type='radio'/>Mujer
            </label>
            </div>
            </div>

        <div>
            <label>Edad</label>
            <input
            type='number'
            name='RecEdad'
            value={resp.RecEdad}
            onChange={(e) => handleChange(e)}
            className='form-control'/>
        </div>

        <div>
            <label>Monteario</label>
            <div>
            <label>
                <input
                type="radio"
                name="RecMonteario"/> Sí
            </label>
            <label>
                <input
                type="radio"
                name="RecMonteario"/> No
            </label>
            </div>
        </div>

        <div>
            <label>Monto Reclamado</label>
            <input
            type='number'
            step="0.00"
            value={resp.RecMontoReclamado}
            onChange={(e) => handleChange(e)}
            name='RecMontoReclamado'
            className='form-control'/>
        </div>

        <div>
            <label>Monto Abonado</label>
            <input
            type='number'
            step="0.00"
            value={resp.RecImporteAbonado}
            onChange={(e) => handleChange(e)}
            name='RecImporteAbonado'
            className='form-control'/>
        </div>
        
        <div>
            <label>Fecha de resolución</label>
            <input
            type='date'
            onChange={(e) => handleChange(e)}
            value={resp.RecFechaResolucion}
            className='form-control'
            name='RecFechaResolucion'/>
        </div>

        <div>
            <label>
                Fecha de notificación
            </label>
           <input
            type='date'
            onChange={(e) => handleChange(e)}
            value={resp.RecFechaNotifiUsuario}
            className='form-control'
            name='RecFechaNotifiUsuario'/>
        </div>

        <div>
            <label>Sentido de la resolución</label>
            <select 
             className='form-control'
             name='RecSentidoResolucion'
             onChange={(e) => handleChange(e)} 
             value={resp.RecSentidoResolucion}>
                <option value="">Seleccione una opción</option>
            </select>
        </div>

        <div>
            <label>Folio Asignado por CONDUSEF</label>
            <input
            name='RecFolioCondusef'
            onChange={(e) => handleChange(e)}
            className='form-control'
            value={resp.RecFolioCondusef}/>
        </div>

        <div>
            <label>Reversa SIGE</label>
            <label>
                <input
                type='radio'
                checked={resp.RecReversa === 1}
                onChange={(e) => handleChange(e)}
                name='RecReversa'
                value={1}
                /> Si</label>
            <label>
               <input
                type='radio'
                checked={resp.RecReversa === 2}
                onChange={(e) => handleChange(e)}
                name='RecReversa'
                value={2}
                /> No
            </label>
        </div>

        <div>
            <button className='btn btn-success' onClick={enviar}>Enviar</button>

        </div>
       
        </div>
        </>
    );
};

export default Reclamaciones;