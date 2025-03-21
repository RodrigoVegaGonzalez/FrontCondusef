"use client";
import React,{useState,useEffect} from "react";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import '../css/styles.css'


const enviarqueja = () =>{
  
  const API_URL = process.env.NEXT_PUBLIC_URL;
  const AMBIENTE = process.env.NEXT_PUBLIC_AMBIENTE;
  const router = useRouter();
  const [token, setToken] = useState(null);
  const notify = (error) => {
    toast(`❌  ${error} `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      className: "custom-toast", // Agregar clase personalizada
    });
  }

  const succed = (mensaje) => {
    toast(`✅  ${mensaje} `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      className: "custom-toast", // Agregar clase personalizada
    });
  }
 
  useEffect(() => {
          async function fetchToken() {
            const res = await fetch("/api/token");
            const data = await res.json();
            setToken(data.token || null);
          }
          fetchToken();
        }, []);
  
 
  

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

  
    const [formData, setFormData] = useState({
      mes: "", // Estado inicial vacío para evitar errores en value={formData.mes}
      folio: "",
      numConsulta: "",
      fecharep: "",
      medio: "",
      niveles: "",
      producto: "",
      causa: "",
      pori: "NO",
      estatus: 1,
      entidad: "",
      municipio: "",
      cp: "",
      colonia: "",
      localidad: "",
      persona: 1,
      sexo: "M",
      edad: "",
      fechaResolucion: "",
      fechaNotificacion: "",
      sentidoResolucion: "",
      numPenalizacion: "",
      tipoPenalizacion: "",
    });
    const [errors, setErrors] = useState({});
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
    const [numConsulta,setNumConsulta] = useState(""); //int
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
 

   

    const handleChange = (e) => {
      const { name, value, type } = e.target;
      let newValue = type === "number" || !isNaN(value) ? Number(value) : value;
      if (name === "producto") {
        const selectedProduct = valorProductos.find(prod => prod.idProducto.toString() === value);
        newValue = selectedProduct ? selectedProduct.idProducto : "";
        console.log(selectedProduct)
      }

      if (name === "causa") {
        const selectedCausa = valorCausas.find(cau => cau.idCausa.toString() === value);
        newValue = selectedCausa ? selectedCausa.idCausa : "";
      }

      // if (name === "persona") {
      //   const personasValue = Number(value);
      //   console.log("Entra a personas")
      //   if (personasValue === 2) {
      //     setFormData({
      //       ...formData,
      //       [name]: personasValue,
      //       sexo: null,
      //       edad: null,
      //     });
      //     return; // Evita que llegue al setFormData general
      //   }
      // }

      if (name === "colonia") {
        console.log("Valor de la colonia: "+value)
        const selectLocalidad = coloniaValue.find(col => col.idColonia.toString() === value);
        
    
        // 🔹 Si encuentra el CP, también actualiza la localidad
        setFormData({
          ...formData,
          [name]: newValue, // Código postal
          localidad: selectLocalidad ? selectLocalidad.idTipoLocalidad : "" // Localidad (si existe)
        });
    
        return; // 🔥 Evita que el código siga ejecutando el último `setFormData`
      }
    

      setFormData({
        ...formData,
        [name]: newValue,
      });

    
    };


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

    useEffect(() => { //Productos
      console.log(formData.producto)
        if(!formData.producto) return;
        const fetchCausas = async () => {
          console.log(formData.producto)
          const resp = await fetch(`${API_URL}/CausasRedeco?producto=${formData.producto}`,{
            method:'Post',
            headers: {
              'Authorization': `Bearer ${token}`
            },
          })
          const data = await resp.json()
          setValorCausas(data)
          console.log(data)
         // setCausa("")
        }

        fetchCausas();
    },[formData.producto])
        
   
     useEffect(() => { //Municipios
            const fetchMunicipio = async () => {
                const resp = await fetch(`${API_URL}/Entidades/Municipios?entidad=${formData.entidad}`)
                const data = await resp.json()
                setValorMunicipio(data)
                console.log(data)
                setMunicipio("")
            }
        
            if (!primeraRenderizacion) { // Solo ejecutar si no es la primera renderización
                fetchMunicipio();
              } else {
                setPrimeraRenderizacion(false); // Marcar la primera renderización como completada
              }
        },[formData.entidad])

        useEffect(() => { //Codigos postales
          const fetchCP = async () => {
              const resp = await fetch(`${API_URL}/Entidades/CP?municipio=${formData.municipio}&estado=${formData.entidad}`)
              const data = await resp.json()
              setValorCP(data)
              
          }
          if (!primeraRenderizacion) { // Solo ejecutar si no es la primera renderización
                fetchCP();
              } else {
                setPrimeraRenderizacion(false) // Marcar la primera renderización como completada
              }
        },[formData.municipio])

        useEffect(() => { //Colonias
          if (!formData.cp) return;  
          const fetchColonia = async () => {
            const resp = await fetch(`${API_URL}/Entidades/Colonias?codigo_postal=${formData.cp}`)
            const data = await resp.json()
            
            setColoniaValue(data)
          }
          fetchColonia();
        },[formData.cp])

    const enviar = () =>{
      let sexo = formData.sexo;
      let edad = formData.edad;
      let fecharec = formatearFecha(formData.fecharep);
      let sentidorec = formData.sentidoResolucion;
      let fechaNotificacion = formatearFecha(formData.fechaNotificacion);
      if(formData.persona === 2){
         sexo = null;
         edad = null;
      }

      if(formData.estatus === 1){
        fecharec = null;
        sentidorec = null
        fechaNotificacion = null;
      }

      const Enviarqueja = 
        {
          "QuejasDenominacion": "Info100",
          "QuejasSector": "Cualquiera",
          "QuejasNoMes": formData.mes,
          "QuejasNum": formData.numConsulta,
          "QuejasFolio": formData.folio,
          "QuejasFecRecepcion": formatearFecha(formData.fecharep),
          "QuejasMedio": formData.medio,
          "QuejasNivelAT": formData.niveles,
          "QuejasProducto": formData.producto,
          "QuejasCausa": formData.causa,
          "QuejasPORI": formData.pori,
          "QuejasEstatus": formData.estatus,
          "QuejasEstados": formData.entidad,
          "QuejasMunId": formData.municipio,
          "QuejasLocId": formData.localidad, //Falta ponerla localidad
          "QuejasColId": formData.colonia,
          "QuejasCP": formData.cp,
          "QuejasTipoPersona": formData.persona,
          "QuejasSexo": sexo,
          "QuejasEdad": edad,
          "QuejasFecResolucion": fecharec,
          "QuejasFecNotificacion": fechaNotificacion,
          "QuejasRespuesta": sentidorec,
          "QuejasNumPenal": formData.numPenalizacion,
          "QuejasPenalizacion": formData.tipoPenalizacion
         } ;
         console.log(Enviarqueja)
        const errores = validarQueja(formData);
        setErrors(errores)
         console.log(Enviarqueja)
      const enviar = async () => {
        const resp = await fetch(`${API_URL}/Redeco?ambiente=${AMBIENTE}`,{
          method:'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(Enviarqueja)
        })

        if(resp.ok){
          succed(`Folio ${formData.folio} enviado correctamente`)
        }else{
          console.log("Dentro de la respuesta")
         const data = await resp.json()
          if(data.errors){
            for(const key in data.errors){
              for(const key2 in data.errors[key]){
                notify(data.errors[key][key2])
            }
               
        }
        // console.log(data)
      }
    }
  }
      const tamaño = Object.keys(errores).length;
    if(tamaño > 1){
      console.log(errores)
      Object.values(errores).forEach((descripcion) => {
       notify(descripcion)
      });
    }else{
      enviar();
      //succed(`Folio ${formData.folio} enviado correctamente`)
       
    }
   
    
    };

    const validarQueja = (data) => {
      let errores = {};
      if (!data.mes) errores.mes = "El mes es obligatorio.";
      if (!data.folio.trim()) errores.folio = "El folio es obligatorio.";
      if (!data.numConsulta) errores.numConsulta = "El número de consulta es obligatorio.";
      if (!data.fecharep) errores.fecharep = "La fecha de recepción es obligatoria.";
      if (!data.medio) errores.medio = "El medio es obligatorio.";
      if (!data.niveles) errores.niveles = "El nivel de atención es obligatorio.";
      if (!data.producto.trim()) errores.producto = "El producto es obligatorio.";
      if (!data.causa.trim()) errores.causa = "La causa es obligatoria.";
      if (!data.entidad) errores.entidad = "La entidad es obligatoria.";
      if (!data.municipio) errores.municipio = "El municipio es obligatorio.";
      if (!data.cp) errores.cp = "El código postal es obligatorio.";
      if (!data.colonia) errores.colonia = "La colonia es obligatoria.";
      if (!data.localidad) errores.localidad = "La localidad es obligatoria.";
      if (!data.persona) errores.persona = "El tipo de persona es obligatorio.";
      if(!(data.persona === 2)){
        if (!data.sexo.trim()) errores.sexo = "El sexo es obligatorio.";
        if (!data.edad || isNaN(data.edad) || data.edad < 18) errores.edad = "La edad debe de ser arriba de 18 años.";
        if (!data.fechaNotificacion) errores.fechaNotificacion = "La fecha de notificación es obligatoria.";
        if (!data.fechaResolucion) errores.fechaResolucion = "La fecha de resolución es obligatoria.";
      }
      
      if(!(data.estatus === 1)){
     
      if (!data.sentidoResolucion) errores.sentidoResolucion = "El sentido de la resolución es obligatorio.";
      }
      if (!data.numPenalizacion && data.numPenalizacion !== 0) errores.numPenalizacion = "El número de penalización es obligatorio.";
      if (!data.tipoPenalizacion && data.tipoPenalizacion !== 0) errores.tipoPenalizacion = "El tipo de penalización es obligatorio.";
    
      return errores;
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
          <select onChange={handleChange} name="mes" value={formData.mes} className={`form-control ${errors.mes ? "is-invalid" : ""}`}>
          <option value="" disabled>Selecciona una opción</option>
          {meses.map(Mes => (
            <option key={Mes.id} value={Mes.id}>
              {Mes.nombre}
            </option>
          ))}
        </select>
        {errors.mes && <div className="invalid-feedback">{errors.mes}</div>}
        </div>

        <div>
          <label>Folio de la queja: </label>
          <input
            type="text"
            name="folio"
            value={formData.folio}
            onChange={handleChange}
            placeholder="00000" 
            className={`form-control ${errors.mes ? "is-invalid" : ""}`}
           />
           {errors.folio && <div className="invalid-feedback">{errors.folio}</div>}
        </div>

        <div>
          <label>Número de consultas: </label>
          <input
            type="number"
            name="numConsulta"
            onChange={handleChange}
            placeholder="0"
            value={formData.numConsulta}
            className={`form-control ${errors.numConsulta ? "is-invalid" : ""}`}/>
            {errors.numConsulta && <div className="invalid-feedback">{errors.numConsulta}</div>}
        </div>

        <div>
          <label>Fecha de recepción: </label>
          <input
            type="date"
            name="fecharep"
            value={formData.fecharep}
            onChange={handleChange}
            className={`form-control ${errors.fecharep ? "is-invalid" : ""}`}
            />
            {errors.fecharep && <div className="invalid-feedback">{errors.fecharep}</div>}
        </div>

        <div>
          <label>Medio o Canal de recepción</label>
          <select onChange={handleChange} value={formData.medio} name="medio" className={`form-control ${errors.medio ? "is-invalid" : ""}`}>
          <option value="" disabled>Selecciona una opción</option>
          {medios_recepcion.medio.map(opcion =>
            <option key={opcion.medioId} value={opcion.medioId}>{opcion.medioDsc}</option>
          )}
        </select>
        {errors.medio && <div className="invalid-feedback">{errors.medio}</div>}
        </div>

        <div>
          <label>Nivel de atención: </label>
          <select onChange={handleChange} value={formData.niveles} name="niveles" className={`form-control ${errors.niveles ? "is-invalid" : ""}`}>
            <option value="" disabled>Seleciona una opción</option>
            {ninveles_atencion.nivelesDeAtencion.map(nivel =>
              <option key={nivel.nivelDeAtencionId} value={nivel.nivelDeAtencionId}>{nivel.nivelDeAtencionDsc}</option>
            )}
          </select>
          {errors.niveles && <div className="invalid-feedback">{errors.niveles}</div>}
        </div>

        <div>
          <label>Producto y/o servicio</label>
          <select onChange={handleChange} value={formData.producto} name="producto" className={`form-control ${errors.producto ? "is-invalid" : ""}`}>
            <option value="" disabled>Seleccione una opción</option>
            {valorProductos.map(product => 
              <option key={product.id} value={product.idProducto}>{product.descripcion}</option>
            )}
          </select>
          {errors.producto && <div className="invalid-feedback">{errors.producto}</div>}
        </div>

        <div>
          <label>Causa o motivo</label>
          <select onChange={handleChange} value={formData.causa} name="causa" className={`form-control ${errors.causa ? "is-invalid" : ""}`} >
            <option value="" disabled>Seleccione una opción</option>
            {valorCausas.map(causa =>
              <option key={causa.idCausa} value={causa.idCausa}>{causa.descripcion}</option>
            )}
          </select>
          {errors.causa && <div className="invalid-feedback">{errors.causa}</div>}
        </div>

        <div>
          <label>PORI (Posible robo de identidad)</label>
          <div> 
            <label>
              <input
                type="radio"
                name="pori"
                value="SI"
                checked={formData.pori === 'SI'}
                onChange={handleChange}
                className="form-check-input"
                // disabled={false}
              />
              Sí
            </label>
            <label>
              <input
                type="radio"
                name="pori"
                value="NO"
                checked={formData.pori === 'NO'}
                onChange={handleChange}
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
            checked={formData.estatus === 1}
            onChange={handleChange}
            className="form-check-input"
          />
          Pendiente
        </label>
        <label>
          <input
            type="radio"
            name="estatus"
            value={2}
            checked={formData.estatus === 2}
            onChange={handleChange}
            className="form-check-input"
          />
          Conluido
        </label>
      </div>
      {errors.causa && <div className="invalid-feedback">{errors.causa}</div>}
    </div>

   <div>
    <label>Entidad Federativa</label>
    <select  onChange={handleChange} value={formData.entidad} name="entidad" className={`form-control ${errors.entidad ? "is-invalid" : ""}`}>
      <option value="" disabled>Seleccione una opción</option>
      {estados.estados.map(estado =>
        <option value={estado.claveEdo} key={estado.claveEdo}>{estado.estado}</option>
      )}
    </select>
    {errors.entidad && <div className="invalid-feedback">{errors.entidad}</div>}
   </div>

   <div> 
    <label>Municipio o Alcaldía</label>
    <select onChange={handleChange} value={formData.municipio} name="municipio" className={`form-control ${errors.municipio ? "is-invalid" : ""}`}>
      <option value="" disabled>Seleccione una opción</option>
      {valorMunicipio.map(municipio =>
        <option value={municipio.idMunicipio} key={municipio.idMunicipio}>{municipio.municipio}</option>)}
    </select>
    {errors.municipio && <div className="invalid-feedback">{errors.municipio}</div>}
   </div>

   <div>
    <label>Código Postal</label>
    <select value={formData.cp} onChange={handleChange} className={`form-control ${errors.cp ? "is-invalid" : ""}`} name="cp">
      <option value="" disabled>Seleccione una opción</option>
      {valorCP.map(cp =>
        <option value={cp.codigoPostal} key={cp.codigoPostal}>{cp.codigoPostal}</option>
      )}
      </select>
      {errors.cp && <div className="invalid-feedback">{errors.cp}</div>}
    </div>

    <div>
      <label>Colonia</label>
      <select value={formData.colonia} onChange={handleChange} className={`form-control ${errors.colonia ? "is-invalid" : ""}`} name="colonia"> 
        <option value="" disabled>Seleccione una opción</option>
        {coloniaValue.map(colonia =>
          <option value={colonia.idColonia} key={colonia.idColonia}>{colonia.colonia1}</option>
        )}
        </select>
        {errors.colonia && <div className="invalid-feedback">{errors.colonia}</div>}
    </div>

    <div>
      <label>Tipo de persona</label>
      <div> 
        <label>
          <input
            type="radio"
            name="persona"
            value={1}
            checked={formData.persona === 1}
            onChange={handleChange}
            className="form-check-input"
          />
          Fisica
        </label>
        <label>
          <input
            type="radio"
            name="persona"
            value={2}
            checked={formData.persona === 2}
            onChange={handleChange}
            className="form-check-input"
          />
          Moral
        </label>
      </div>
      {errors.persona && <div className="invalid-feedback">{errors.persona}</div>}
    </div>

    <div>
      <label>Sexo</label>
      <div> 
        <label>
          <input
            type="radio"
            name="sexo"
            value="H"
            checked={formData.sexo === "H"}
            disabled={formData.persona === 2}
            onChange={handleChange}
            className={`form-check-input ${errors.sexo ? "is-invalid" : ""}`}
          />
          Hombre
        </label>
        <label>
          <input
            type="radio"
            name="sexo"
            value="M"
            disabled={formData.persona === 2}
            checked={formData.sexo === "M"}
            onChange={handleChange}
            className={`form-check-input ${errors.sexo ? "is-invalid" : ""}`}
          />
          Mujer
        </label>
      </div>
      {errors.sexo && <div className="invalid-feedback">{errors.sexo}</div>}
    </div>

     <div>
          <label>Edad: </label>
          <input
            type="number"
            name="edad"
            disabled={formData.persona === 2}
            placeholder="0"
            className={`form-control ${errors.edad ? "is-invalid" : ""}`}
            onChange={handleChange}
            value={formData.edad}
            />
             {errors.edad && <div className="invalid-feedback">{errors.edad}</div>}
        </div>

        <div>
          <label>Fecha de resolución</label>
          <input
            type="date"
            name="fechaResolucion"
            onChange={handleChange}
            value={formData.fechaResolucion}
            disabled={formData.estatus === 1}
            className={`form-control ${errors.fechaResolucion ? "is-invalid" : ""}`}
            />
            {errors.fechaResolucion && <div className="invalid-feedback">{errors.fechaResolucion}</div>}
        </div>

        <div>
          <label>Fecha de Notificación</label>
          <input
            type="date"
            name="fechaNotificacion"
            onChange={handleChange}
            value={formData.fechaNotificacion}
            disabled={formData.estatus === 1}
            className={`form-control ${errors.fechaNotificacion ? "is-invalid" : ""}`}
           />
           {errors.fechaNotificacion && <div className="invalid-feedback">{errors.fechaNotificacion}</div>}
        </div>

        <div>
          <label>Sentido de la resolución</label>
          <select onChange={handleChange} 
            value={formData.sentidoResolucion} 
            name="sentidoResolucion"
            disabled={formData.estatus === 1}
             className={`form-control ${errors.sentidoResolucion ? "is-invalid" : ""}`}>
            <option value="" disabled>Seleccione una opción</option>
            {sentido_resolucion.map(sentido =>
              <option value={sentido.valor} key={sentido.valor}>{sentido.descripcion}</option>
            )}
          </select>
          {errors.sentidoResolucion && <div className="invalid-feedback">{errors.sentidoResolucion}</div>}
        </div>

        <div>
          <label>Número de penalización</label>
          <input
            type="number"
            name="numPenalizacion"
            value={formData.numPenalizacion}
            placeholder="0"
            onChange={handleChange}
            className={`form-control ${errors.numPenalizacion ? "is-invalid" : ""}`}
           />
           {errors.numPenalizacion && <div className="invalid-feedback">{errors.numPenalizacion}</div>}
        </div>
        <div>
          <label>Tipo de penalización</label>
          <select onChange={handleChange} value={formData.tipoPenalizacion} name="tipoPenalizacion" className={`form-control ${errors.tipoPenalizacion ? "is-invalid" : ""}`}>
            <option value="" disabled>Seleccione opción</option>
            {opciones_penalizacion.map(pena => 
              <option value={pena.id} key={pena.id}>{pena.categoria} - {pena.descripcion}</option>
            )}
          </select>
          {errors.tipoPenalizacion && <div className="invalid-feedback">{errors.tipoPenalizacion}</div>}
        </div>

        <div>
          <button onClick={enviar} className="btn btn-primary">Enviar queja</button>
         
          <ToastContainer />
          

        </div>
        </div>
        
        
    );
}

export default enviarqueja;