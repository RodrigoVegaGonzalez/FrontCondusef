
import '../css/styles.css'
import React,{useState,useEffect,useContext} from "react";
import { useRouter } from 'next/navigation';


const EnviarConsulta = () =>{
    const router = useRouter();
    const token = "";
    //console.log("Ambiente",process.env.NEXT_PUBLIC_AMBIENTE)

    // useEffect(() => {
    //     if (!token) {
    //       router.push('/');
    //     }
    //   }, []);

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

    const [primeraRenderizacion,setPrimeraRenderizacion] = useState(true);
    const [valorCausa, setValorCausa] = useState([]); //Aquí se guardan los valores de causas
    const [valorProducto, setValorProductos] = useState([]);
    const [valorMunicipio, setValorMunicipio] = useState([]);
    const [valorColonia,setValorColonia] = useState([]);
    const [valorCP, setValorCP] = useState([]); //Aquí se guardan los valores de los productos
    const [trimestre,setTrimestre] = useState("");
    const [consultas,setConsultas] = useState("");
    const [folio, setFolio] = useState("");
    const [fechaRep,setFechaRep] = useState("");
    const [medio, setMedio] = useState("");
    const [contacto, setContacto] = useState("");
    const [producto, setProducto] = useState("");
    const [fechaAt, setFechaAt] = useState("");
    const [causa,setCausa] = useState("");
    const [pori, setPori] = useState("");
    const [estadoQueja, setEstadoQueja] = useState(2);
    const [entidad, setEntidad] = useState("");
    const [municipio, setMunicipio] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [colonia, setColonia] = useState("");

    useEffect(() => {
        const fetchProductos = async () => {
            try{
                const response = await fetch('https://localhost:7030/ProductosReune?tipo=1',{
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
    },[]);

    useEffect(() => {
        const fetchCausas = async () => {
            console.log("Cambio de producto"+producto)
            try{
                const resp = await fetch(`https://localhost:7030/ProductosEmpresas/CausasReune?producto=${producto}`,{
                    method:'GET'
                })
    
                const dat = await resp.json()
                console.log(dat)
                setValorCausa(dat)
                setCausa("");
            }catch(e){
                console.log("Error"+e)
            }
        }
        if (!primeraRenderizacion) { // Solo ejecutar si no es la primera renderización
            fetchCausas();
          } else {
            setPrimeraRenderizacion(false); // Marcar la primera renderización como completada
          }
  },[producto]);

    useEffect(() => {
        const fetchMunicipio = async () => {
            const resp = await fetch(`https://localhost:7030/Entidades/Municipios?entidad=${entidad}`)
            const data = await resp.json()
            setValorMunicipio(data)
            console.log(data)
        }
    
        if (!primeraRenderizacion) { // Solo ejecutar si no es la primera renderización
            fetchMunicipio();
          } else {
            setPrimeraRenderizacion(false); // Marcar la primera renderización como completada
          }
    },[entidad])

    useEffect(() => {
        const FetchCP = async () => {
            const resp = await fetch(`https://localhost:7030/Entidades/CP?municipio=${municipio}&estado=${entidad}`)
            const data = await resp.json()
            setValorCP(data)
            console.log(data)
        }
        

        if (!primeraRenderizacion) { // Solo ejecutar si no es la primera renderización
            FetchCP();
          } else {
            setPrimeraRenderizacion(false); // Marcar la primera renderización como completada
          }
    },[municipio])

    useEffect(() => {
        const fetchColonia = async () => {
            try {
                const resp = await fetch(`https://localhost:7030/Entidades/Colonias?codigo_postal=${codigoPostal}`);
                const data = await resp.json();
                setValorColonia(data);
                console.log(data);
            } catch (error) {
                console.error("Error al obtener las colonias:", error);
                // ... manejar el error, por ejemplo, mostrar un mensaje al usuario ...
            }
        };
    
        if (!primeraRenderizacion) {
            fetchColonia();
        } else {
            setPrimeraRenderizacion(false);
        }
    }, [codigoPostal]);



        const ChangeTrimestre = (e) => {
            setTrimestre(e.target.value);
        };

        const ChangeConsultas = (e) => {
            setConsultas(e.target.value);
        };
        
        const ChangeFolio = (e) => {
            setFolio(e.target.value);
        };
        
        const ChangeFechaRep = (e) => {
            setFechaRep(e.target.value);
        };
        
        const ChangeMedio = (e) => {
            setMedio(e.target.value);
        };
        
        const ChangeContacto = (e) => {
            setContacto(e.target.value);
        };
        
        const ChangeProducto = (e) => {
            setProducto(e.target.value);
        };
        
        const ChangeFechaAt = (e) => {
            setFechaAt(e.target.value);
        };
        
        const ChangeCausa = (e) => {
            setCausa(e.target.value);
        };
        
        const ChangePori = (e) => {
            setPori(e.target.value);
        };
        
        const ChangeEstadoQueja = (e) => {
            setEstadoQueja(Number(e.target.value));
        };
        
        const ChangeEntidad = (e) => {
            setEntidad(e.target.value);
        };
        
        const ChangeMunicipio = (e) => {
            setMunicipio(e.target.value);
        };
        
        const ChangeCodigoPostal = (e) => {
            setCodigoPostal(e.target.value);
        };
        
        const ChangeColonia = (e) => {
            setColonia(e.target.value);
        };

    const Enviar = async () => {
        console.log("Enviado")
        const ATFEcha = new Date(fechaAt)
        const REPFecha = new Date(fechaRep)
        const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const fechaFormateadaAT = ATFEcha.toLocaleDateString('es-ES', opciones);
        const fechaFormateadaREP = REPFecha.toLocaleDateString('es-ES', opciones);
        const peticion =[
            {
              "InstitucionClave": "CONDUSEF_EJEMPLO, S.A. de C.V.",
              "Sector": "Sociedades Financieras de Objeto Múltiple E.N.R.",
              "ConsultasTrim": trimestre,
              "NumConsultas": consultas,
              "ConsultasFolio": folio,
              "ConsultasEstatusCon": estadoQueja,
              "ConsultasFecAten": fechaFormateadaAT,
              "EstadosId": 9,
              "ConsultasFecRecepcion": fechaFormateadaREP,
              "MediosId": medio,
              "Producto": producto,
              "CausaId": causa,
              "ConsultasCP": codigoPostal,
              "ConsultasMpioId": municipio,
              "ConsultasLocId": entidad,
              "ConsultasColId": colonia,
              "ConsultascatnivelatenId": contacto,
              "ConsultasPori": pori
            }
          ];

        // try {
        //     const response = await fetch('https://localhost:7030/ProductosReune?tipo=1',{
        //         headers: {
        //             'Authorization': `Bearer ${token}`
        //           },
        //         method:'POST',
        //         body: JSON.stringify({
        //             peticion
        //         })
        //     });
        //         if(!response.ok){
        //             throw new Error('Error en la solicitud');
        //         }
        // } catch (error) {
        //     console.log(error)
        // }

          console.log(peticion)
    };

    
    return(
        <div className="Cuestionario">
            <h1>{token}</h1>
            {/* <h1>Empresa: {NombreEmpresa}</h1> */}
        <div>
            <label>Trimestre</label>
            <select onChange={ChangeTrimestre} value={trimestre} className='form-control'>
                <option value="" disabled>Seleccione una opción</option>
                {Trimestre.map(Tri => 
                    <option key={Tri.value} value={Tri.value}>{Tri.name}</option>
                )}
            </select>
        </div>
     
        <div>
                <label>Número de consultas</label>
                <input
                name="Consultas"
                value={consultas}
                onChange={ChangeConsultas}
                placeholder="1"
                className="form-control"/>
        </div>

        <div>
            <label>Folio de atención</label>
            <input
                type="text"
                name="Folio"
                onChange={ChangeFolio}
                value={folio}
                className='form-control'/>
        </div>

        <div>
          <label>Fecha de recepción</label>
          <input
          type="date"
          name="Folio"
          value={fechaRep}
          onChange={ChangeFechaRep}
          placeholder="000"
          className="form-control"/>
        </div>    

        <div>
           <label>Medio o canal de recepción</label>
           <select value={medio} onChange={ChangeMedio} className="form-control">
             <option value="" disabled >Seleccione una opción</option>
             {medios_recepcion.map(Medios => 
                <option key={Medios.id_medio} value={Medios.id_medio}>{Medios.descripcion}</option>
             )}
           </select>
        </div> 

        <div>
            <label>Nivel de atención o contacto</label>
            <select value={contacto} onChange={ChangeContacto} className="form-control">
                <option value="" disabled>Seleccione una opción</option>
                {niveles_atencion.nivelesDeAtencion.map(Niveles => 
                    <option key={Niveles.nivelDeAtencionId} value={Niveles.nivelDeAtencionId}>{Niveles.nivelDeAtencionDsc} </option>
                )}
            </select>
        </div>

        <div>
            <label>Producto y/o Servicio</label>
            <select value={producto} onChange={ChangeProducto} className="form-control">
                <option value="" disabled>Seleccione una opción</option>
                {valorProducto.map(Pro => 
                    <option key={Pro.id} value={Pro.idProducto}>{Pro.descripcion}</option>
                )}
            </select>
        </div>

        <div>
            <label>Fecha atención</label>
            <input
            type="date"
            name="FechaAte"
            value={fechaAt}
            onChange={ChangeFechaAt}
            className="form-control"/>
        </div>

        <div>
            <label>Causa o motivo</label>
            <select value={causa} onChange={ChangeCausa} className="form-control">
                <option value="" disabled>Seleccione una opción</option>
                {valorCausa.map(val => 
                    <option key={val.id} value={val.idProducto}>{val.descripcion}</option>
                )}
            </select>
        </div>

        <div>
          <label>PORI (Posible robo de identidad)</label>
          <div> 
            <label>
              <input
                type="radio"
                name="option"
                value="SI"
                checked={pori === 'SI'}
                onChange={ChangePori}
                // disabled={false}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="option"
                value="NO"
                checked={pori === 'NO'}
                onChange={ChangePori}
                // disabled={false}
              />
              No
            </label>
          </div>
    </div>

    <div>
      <label>Estado de la queja</label>
      <div> 
        <label>
          <input
            type="radio"
            name="EstadoQueja"
            value={1}
            checked={estadoQueja === 1}
            onChange={ChangeEstadoQueja}
          />
           Pendiente
        </label>
        <label>
          <input
            type="radio"
            name="EstadoQueja"
            value={2}
            checked={estadoQueja === 2}
            onChange={ChangeEstadoQueja}
          />
           Conluido
        </label>
      </div>
    </div>

    <div>
        <label>Entidad Federativa</label>
        <select onChange={ChangeEntidad} value={entidad} className='form-control'>
            <option value="" disabled>Seleccione una opción</option>
            {entidad_federativa.estados.map(entidad => 
                <option key={entidad.claveEdo} value={entidad.claveEdo}>{entidad.estado} </option>
            )}
        </select>
    </div>

    <div>
        <label>Municipio o alcaldía</label>
        <select onChange={ChangeMunicipio} value={municipio} className='form-control'>
                <option value="" disabled>Seleccione una opción</option>
            {valorMunicipio.map(Muni => 
                <option key={Muni.idMunicipio} value={Muni.idMunicipio}>{Muni.municipio}</option>
            )} 
        </select>
    </div>

    <div>
        <label>Código Postal</label>
        <select onChange={ChangeCodigoPostal} value={codigoPostal} className='form-control'>
                <option value="" disabled>Seleccione una opción</option>
                {valorCP.map(CP => 
                    <option key={CP.codigoPostal} value={CP.codigoPostal}>{CP.codigoPostal}</option>
                )}
        </select>
    </div>

    
    <div>
        <label>Colonia</label>
        <select onChange={ChangeColonia} value={colonia} className='form-control'>
                <option value="" disabled>Seleccione una opción</option>
                {valorColonia.map(col => 
                    <option key={col.idColonia} value={col.idColonia}>{col.colonia1}</option>
                )}
        </select>
    </div>
    
    <div>
        <button onClick={Enviar} className="btn btn-primary">Enviar</button>
    </div>

    </div>    
    );
}

export default EnviarConsulta;

