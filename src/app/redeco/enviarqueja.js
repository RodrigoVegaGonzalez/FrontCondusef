"use client";
import React,{useState,useEffect,useContext} from "react";
import { useRouter } from 'next/navigation';
import '../css/styles.css'

const enviarqueja = () =>{
  
  const API_URL = process.env.NEXT_PUBLIC_URL;
  const AMBIENTE = process.env.NEXT_PUBLIC_AMBIENTE;
  const router = useRouter();
  const [token, setToken] = useState(null);

  useEffect(() => {
          async function fetchToken() {
            const res = await fetch("/api/token");
            const data = await res.json();
            setToken(data.token || null);
          }
          fetchToken();
        }, []);
  
  // useEffect(() => {
  //   // Acceder a localStorage solo dentro de useEffect
    

  //   if (!token) {
  //     router.push('/');
  //   }

  //   // const validarToken = () => {
  //   //   fetch(`${API_URL}/Login`, {
  //   //     method: 'GET',
  //   //     headers: {
  //   //       'Authorization': `Bearer ${token}`}
  //   //     }
  //   //   ).then(resp => {
  //   //     if (resp.status === 401) {
  //   //       localStorage.removeItem('token');
  //   //       router.push('/');
  //   //     }
  //   //   })}

      

  // }, [token,router]);
  

  const meses = [
    { id: 1, nombre: "Enero" },
    { id: 2, nombre: "Febrero" },
    { id: 3, nombre: "Marzo" },
    { id: 4, nombre: "Abril" },
    { id: 5, nombre: "Mayo" },
    { id: 6, nombre: "Junio" },
    { id: 7, nombre: "Julio" },
    { id: 8, nombre: "Agosto" },
    { id: 9, nombre: "Septiembre" },
    { id: 10, nombre: "Octubre" },
    { id: 11, nombre: "Noviembre" },
    { id: 12, nombre: "Diciembre" },
  ];
  
    const medios_recepcion = {
      "medio": [
          {
              "medioId": 1,
              "medioDsc": "Correo electrónico"
          },
          {
              "medioId": 2,
              "medioDsc": "Página de internet"
          },
          {
              "medioId": 3,
              "medioDsc": "Sucursales"
          },
          {
              "medioId": 4,
              "medioDsc": "Teléfono"
          },
          {
              "medioId": 5,
              "medioDsc": "UNE"
          },
          {
              "medioId": 10,
              "medioDsc": "Aplicación informática"
          },
          {
              "medioId": 17,
              "medioDsc": "Oficinas de atención"
          },
          {
              "medioId": 20,
              "medioDsc": "Aplicación movil"
          },
          {
              "medioId": 22,
              "medioDsc": "Api's"
          },
          {
              "medioId": 23,
              "medioDsc": "Boots"
          }
      ]
  }
    const ninveles_atencion = {
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



  const sentido_resolucion = [
    { 
      valor: 1, 
      descripcion: "Totalmente favorable al usuario" 
    },
    { 
      valor: 2,
      descripcion: "Desfavorable al usuario" 
    },
    { valor: 3,
      descripcion: "Parcialmente favorable al usuario" 
    }];

    const opciones_penalizacion = [
      {
        id: 1,
        categoria: "Contractuales",
        descripcion: "Cancelación del contrato",
      },
      {
        id: 2,
        categoria: "Contractuales",
        descripcion: "Reasignación de cartera",
      },
      {
        id: 3,
        categoria: "Económicas",
        descripcion: "Multa",
      },
    ];
    
    const estados = {
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

  

    const [valorProductos, setValorProductos] = useState([]);
    const [valorCausas, setValorCausas] = useState([]);
    const [primeraRenderizacion,setPrimeraRenderizacion] = useState(true);
    const [valorMunicipio, setValorMunicipio] = useState([]);
    const [valorCP, setValorCP] = useState([]);
    const [coloniaValue,setColoniaValue] = useState([]);
    const razonSocial = null; //String
    const Sector = null; //String
    const [mes,setMes] = useState(""); //int
    const [folio,setFolio] = useState(""); //String
    const [numConsulta,setNumConsulta] = useState(1); //int
    const [fecharep, setFechaRep] = useState(""); //Fecha
    const [medio, setMedio] = useState(""); //int
    const [niveles, setNiveles] = useState(""); //int
    const [producto, setProducto] = useState(""); //string
    const [causa,setCausa] = useState(""); //string
    const [pori, setPori] = useState("NO"); //String SI o NO
    const [estatus, setEstatus] = useState(1); //int
    const [entidad, setEntidad] = useState(""); //int
    const [municipio, setMunicipio] = useState(""); //int
    const [cp, setCP] = useState(""); //int
    const [colonia, setColonia] = useState(""); //int
    const [localidad, setLocalidad] = useState(); //int
    const [persona, setPersona] = useState(1); //int
    const [sexo, setSexo] = useState("M"); //char
    const [edad, setEdad] = useState(0); //int
    const [fechaResolucion, setFechaResolucion] = useState(""); //Fecha
    const [fechaNotificacion, setFechaNotificacion] = useState(""); //Fecha
    const [sentidoResolucion, setSentidoResolucion] = useState(""); //int
    const [numPenalizacion , setNumPenalizacion] = useState(0); //int 
    const [tipoPenalizacion, setTipoPenalizacion] = useState(""); //int
 

    const manejarCambioMes = (e) => {
      setMes(Number(e.target.value))
    }

    const manejarCambioFolio = (e) => {
      setFolio(e.target.value)
    }

    const manejarCambioNumConsulta = (e) => {
      setNumConsulta(Number(e.target.value))
    }

    const manejarCambioMedios = (e) => {
      setMedio(Number(e.target.value))
    } 

    const manejarCambioCausa = (e) => {
      setCausa(e.target.value)
    }

    const manejarCambioFechaRep = (e) => {
      setFechaRep(e.target.value)
    }

    const manejarCambioNiveles = (e) => {
      setNiveles(Number(e.target.value))
    } 

    const manejarCambioProducto = (e) => {
      setProducto(e.target.value)
    } 

    const manejarCambioPORI = (e) => {
      setPori(e.target.value)
    } 

    const manejarCambioEstatus = (e) => {
      setEstatus(Number(e.target.value))
    } 

    const manejarCambioEntidad = (e) => {
      setEntidad(Number(e.target.value))
    }

    const manejarCambioMunicipio = (e) => {
      setMunicipio(Number(e.target.value))
    }

    const manejarCambioCP = (e) => {
      setCP(Number(e.target.value))
    }

    const manejarCambioColonia = (e) => {
      setColonia(Number(e.target.value)) 
    }

    const manejarCambioLocalidad = (e) => {
      setLocalidad(Number(e.target.value))
    }

    const manejarCambioPersona = (e) => {
      setPersona(Number(e.target.value))
    }

    const manejarCambioSexo = (e) => {
      setSexo(e.target.value)
    } 

    const manejarCambioEdad = (e) => {
      setEdad(Number(e.target.value))
    }

    const manejarfechaResolucion = (e) => {
      setFechaResolucion(e.target.value)  
    }

   const manejarfechaNotificacion = (e) => {
      setFechaNotificacion(e.target.value)
    }

    const manejarnumPenalizacion = (e) => {
      setNumPenalizacion(Number(e.target.value)) 
    }

    const manejartipoPensalizacion = (e) => {
      setTipoPenalizacion(Number(e.target.value))
    }

    const manejarsentidoResolucion = (e) => {
      setSentidoResolucion(Number(e.target.value))
    }


    useEffect(() => { 
      if (!token) return;
      const fetchProductos = async () => {
        const resp = await fetch(`${API_URL}/ProductosRedeco`,{
          method:'Post',
          headers: {
            'Authorization': `Bearer ${token}`
          },
        })
        const data = await resp.json()
        setValorProductos(data)
        setCausa("")
      }

      fetchProductos();

    },[token,router])

    useEffect(() => {
        if(!producto) return;
        const fetchCausas = async () => {
          
          const resp = await fetch(`${API_URL}/CausasRedeco?producto=${producto}`,{
            method:'Post',
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          const data = await resp.json()
          setValorCausas(data)
          setCausa("")
        }

        fetchCausas();
    },[producto])
        
   
     useEffect(() => {
            const fetchMunicipio = async () => {
                const resp = await fetch(`https://localhost:7030/Entidades/Municipios?entidad=${entidad}`)
                const data = await resp.json()
                setValorMunicipio(data)
                setMunicipio("")
            }
        
            if (!primeraRenderizacion) { // Solo ejecutar si no es la primera renderización
                fetchMunicipio();
              } else {
                setPrimeraRenderizacion(false); // Marcar la primera renderización como completada
              }
        },[entidad])

        useEffect(() => {
          const fetchCP = async () => {
              const resp = await fetch(`https://localhost:7030/Entidades/CP?municipio=${municipio}&estado=${entidad}`)
              const data = await resp.json()
              setValorCP(data)
              console.log(data)
              
          }
          if (!primeraRenderizacion) { // Solo ejecutar si no es la primera renderización
                fetchCP();
              } else {
                setPrimeraRenderizacion(false) // Marcar la primera renderización como completada
              }
        },[municipio])

        useEffect(() => {
          if (!cp) return;  
          const fetchColonia = async () => {
            const resp = await fetch(`${API_URL}/Entidades/Colonias?codigo_postal=${cp}`)
            const data = await resp.json()
            console.log(data)
            setColoniaValue(data)
          }
          fetchColonia();
        },[cp])

    const enviar = () =>{
      const Enviarqueja = 
        {
          "QuejasDenominacion": "Info100",
          "QuejasSector": "Cualquiera",
          "QuejasNoMes": mes,
          "QuejasNum": numConsulta,
          "QuejasFolio": folio,
          "QuejasFecRecepcion": formatearFecha(fecharep),
          "QuejasMedio": medio,
          "QuejasNivelAT": niveles,
          "QuejasProducto": producto,
          "QuejasCausa": causa,
          "QuejasPORI": pori,
          "QuejasEstatus": estatus,
          "QuejasEstados": entidad,
          "QuejasMunId": municipio,
          "QuejasLocId": 9,
          "QuejasColId": colonia,
          "QuejasCP": cp,
          "QuejasTipoPersona": persona,
          "QuejasSexo": sexo,
          "QuejasEdad": edad,
          "QuejasFecResolucion": formatearFecha(fechaResolucion),
          "QuejasFecNotificacion": formatearFecha(fechaNotificacion),
          "QuejasRespuesta": sentidoResolucion,
          "QuejasNumPenal": numPenalizacion,
          "QuejasPenalizacion": tipoPenalizacion
         } ;

         console.log(Enviarqueja)
      const enviar = async () => {
        const resp = await fetch(`https://localhost:7030/Redeco?ambiente=${AMBIENTE}`,{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(Enviarqueja)
        })

        const data = await resp.json()
        console.log(data)
      }

      enviar();
    
    };

    const formatearFecha = (fecha) => {
      if (!fecha) return "";
      const [yyyy, mm, dd] = fecha.split("-"); // Divide la fecha en partes
      return `${dd}/${mm}/${yyyy}`; // Retorna en formato "DD/MM/YYYY"
    };

    



    return(
        <div className="Cuestionario container">
        <div>
          <label>Mes a informar: </label>
          <select onChange={manejarCambioMes} value={mes} className="form-control">
          <option value="" disabled>Selecciona una opción</option>
          {meses.map(Mes => (
            <option key={Mes.id} value={Mes.id}>
              {Mes.nombre}
            </option>
          ))}
        </select>
        </div>

        <div>
          <label>Folio de la queja: </label>
          <input
            type="text"
            name="Folio"
            value={folio}
            onChange={manejarCambioFolio}
            placeholder="00000" 
            className="form-control"/>
        </div>

        <div>
          <label>Número de consultas: </label>
          <input
            type="number"
            name="numero"
            onChange={manejarCambioNumConsulta}
            placeholder="1"
            className="form-control"/>
        </div>

        <div>
          <label>Fecha de recepción: </label>
          <input
            type="date"
            name="fecha_recepcion"
            value={fecharep}
            onChange={manejarCambioFechaRep}
            className="form-control"/>
        </div>

        <div>
          <label>Medio o Canal de recepción</label>
          <select onChange={manejarCambioMedios} value={medio} className="form-control">
          <option value="" disabled>Selecciona una opción</option>
          {medios_recepcion.medio.map(opcion =>
            <option key={opcion.medioId} value={opcion.medioId}>{opcion.medioDsc}</option>
          )}
        </select>
        </div>

        <div>
          <label>Nivel de atención: </label>
          <select onChange={manejarCambioNiveles} value={niveles} className="form-control">
            <option value="" disabled>Seleciona una opción</option>
            {ninveles_atencion.nivelesDeAtencion.map(nivel =>
              <option key={nivel.nivelDeAtencionId} value={nivel.nivelDeAtencionId}>{nivel.nivelDeAtencionDsc}</option>
            )}
          </select>
        </div>

        <div>
          <label>Producto y/o servicio</label>
          <select onChange={manejarCambioProducto} value={producto} className="form-control">
            <option value="" disabled>Seleccione una opción</option>
            {valorProductos.map(product => 
              <option key={product.id} value={product.idProducto}>{product.descripcion}</option>
            )}
          </select>
        </div>

        <div>
          <label>Causa o motivo</label>
          <select onChange={manejarCambioCausa} value={causa} className="form-control">
            <option value="" disabled>Seleccione una opción</option>
            {valorCausas.map(causa =>
              <option key={causa.idCausa} value={causa.idCausa}>{causa.descripcion}</option>
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
                onChange={manejarCambioPORI}
                className="form-check-input"
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
                onChange={manejarCambioPORI}
                className="form-check-input"
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
            name="estatus"
            value={1}
            checked={estatus === 1}
            onChange={manejarCambioEstatus}
            className="form-check-input"
          />
          Pendiente
        </label>
        <label>
          <input
            type="radio"
            name="estatus"
            value={2}
            checked={estatus === 2}
            onChange={manejarCambioEstatus}
            className="form-check-input"
          />
          Conluido
        </label>
      </div>
    </div>

   <div>
    <label>Entidad Federativa</label>
    <select  onChange={manejarCambioEntidad} value={entidad} className="form-control">
      <option value="" disabled>Seleccione una opción</option>
      {estados.estados.map(estado =>
        <option value={estado.claveEdo} key={estado.claveEdo}>{estado.estado}</option>
      )}
    </select>
   </div>

   <div> 
    <label>Municipio o Alcaldía</label>
    <select className="form-control" onChange={manejarCambioMunicipio} value={municipio}>
      <option value="" disabled>Seleccione una opción</option>
      {valorMunicipio.map(municipio =>
        <option value={municipio.idMunicipio} key={municipio.idMunicipio}>{municipio.municipio}</option>)}
    </select>
   </div>

   <div>
    <label>Código Postal</label>
    <select value={cp} onChange={manejarCambioCP} className="form-control">
      <option value="" disabled>Seleccione una opción</option>
      {valorCP.map(cp =>
        <option value={cp.codigoPostal} key={cp.codigoPostal}>{cp.codigoPostal}</option>
      )}
      </select>
    </div>

    <div>
      <label>Colonia</label>
      <select value={colonia} onChange={manejarCambioColonia} className="form-control">
        <option value="" disabled>Seleccione una opción</option>
        {coloniaValue.map(colonia =>
          <option value={colonia.idColonia} key={colonia.idColonia}>{colonia.colonia1}</option>
        )}
        </select>
    </div>

    <div>
      <label>Tipo de persona</label>
      <div> 
        <label>
          <input
            type="radio"
            name="tipo_persona"
            value={1}
            checked={persona === 1}
            onChange={manejarCambioPersona}
            className="form-check-input"
          />
          Fisica
        </label>
        <label>
          <input
            type="radio"
            name="tipo_persona"
            value={2}
            checked={persona === 2}
            onChange={manejarCambioPersona}
            className="form-check-input"
          />
          Moral
        </label>
      </div>
    </div>

    <div>
      <label>Sexo</label>
      <div> 
        <label>
          <input
            type="radio"
            name="sexo"
            value="H"
            checked={sexo === "H"}
            onChange={manejarCambioSexo}
            className="form-check-input"
          />
          Hombre
        </label>
        <label>
          <input
            type="radio"
            name="sexo"
            value="M"
            checked={sexo === "M"}
            onChange={manejarCambioSexo}
            className="form-check-input"
          />
          Mujer
        </label>
      </div>
    </div>

     <div>
          <label>Edad: </label>
          <input
            type="number"
            name="edad"
            className="form-control"
            onChange={manejarCambioEdad}
            value={edad}
            />
        </div>

        <div>
          <label>Fecha de resolución</label>
          <input
            type="date"
            name="fecha_resolución"
            className="form-control"
            onChange={manejarfechaResolucion}
            value={fechaResolucion}
            />
        </div>

        <div>
          <label>Fecha de Notificación</label>
          <input
            type="date"
            name="notificacion"
            className="form-control"
            onChange={manejarfechaNotificacion}
            value={fechaNotificacion}
           />
        </div>

        <div>
          <label>Sentido de la resolución</label>
          <select onChange={manejarsentidoResolucion} value={sentidoResolucion} className="form-control">
            <option disabled>Seleccione una opción</option>
            {sentido_resolucion.map(sentido =>
              <option value={sentido.valor} key={sentido.valor}>{sentido.descripcion}</option>
            )}
          </select>
        </div>

        <div>
          <label>Número de penalización</label>
          <input
            type="number"
            name="penalización"
            value={numPenalizacion}
            onChange={manejarnumPenalizacion}
            className="form-control"
           />
        </div>
        <div>
          <label>Tipo de penalización</label>
          <select onChange={manejartipoPensalizacion} value={tipoPenalizacion} className="form-control">
            <option disabled>Seleccione opción</option>
            {opciones_penalizacion.map(pena => 
              <option value={pena.id} key={pena.id}>{pena.categoria} - {pena.descripcion}</option>
            )}
          </select>
        </div>

        <div>
          <button onClick={enviar} className="btn btn-primary">Enviar queja</button>
        </div>
        </div>
        
        
    );
}

export default enviarqueja;