"use client";
import React,{useState} from "react";
import '../css/styles.css'
const enviarqueja = () =>{

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

    const productos = {
      "products": [
          {
              "productId": "026911801257",
              "product": "Crédito Simple (Auto)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911811258",
              "product": "Crédito Simple (CGH)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911821259",
              "product": "Crédito Simple (CGP)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911821260",
              "product": "Crédito Cuenta Corriente (CGP)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911831261",
              "product": "Crédito Simple (CN)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911831262",
              "product": "Crédito Cuenta Corriente (CN)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911841263",
              "product": "Crédito Simple (CE)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911841264",
              "product": "Crédito Cuenta Corriente (CE)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911851265",
              "product": "Crédito Simple (CH)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911861266",
              "product": "Crédito Simple (CAM)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911861267",
              "product": "Crédito Cuenta Corriente (CAM)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911871268",
              "product": "Crédito Simple (CP)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911871269",
              "product": "Crédito Cuenta Corriente (CP)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911881270",
              "product": "Crédito Simple (CPYME)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911881271",
              "product": "Crédito Cuenta Corriente (CPYME)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911891272",
              "product": "Crédito Simple (CSG)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911891273",
              "product": "Crédito Cuenta Corriente (CSG)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911901274",
              "product": "Crédito Simple (CPHA)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911911275",
              "product": "Crédito Simple (CPR)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911941280",
              "product": "Crédito Simple (MC)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911941281",
              "product": "Crédito Cuenta Corriente (MC)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
          },
          {
              "productId": "026911951282",
              "product": "Crédito Cuenta Corriente (TC)",
              "institucion": "Nextfin, S.A. de C.V., SOFOM, E.N.R."
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
    const municipios = {};
    const codigos_postales = {};
    const colonia = {};
    const [mes,setMes] = useState("");
    const [folio,setFolio] = useState("");
    const [seleccion,setSeleccion] = useState("");
    const [fecharep, setFechaRep] = useState("");
    const [option, setOption] = useState("");
    const [niveles, setNiveles] = useState("");
    const [producto, setProducto] = useState("");
    const [pori, setPori] = useState("NO");
    const [estado, setEstado] = useState(1);
    const [persona, setPersona] = useState(1);
    const [sexo, setSexo] = useState("");
    const [queja,setQueja] = useState("");
    const [penalizacion, setPenalizacion] = useState(0);

    const manejarCambioMedios = (e) => {
      setOption(e.target.value)
    } 
    const manejarCambio = (e) => {
      setSeleccion(e.target.value)
      }

    const manejarCambioFolio = (e) => {
      setFolio(e.target.value)
    }

    const manejarCambioFechaRep = (e) => {
      setFechaRep(e.target.value)
    }

    const manejarCambioNiveles = (e) => {
      setNiveles(e.target.value)
    } 

    const manejarCambioProducto = (e) => {
      setProducto(e.target.value)
    } 

    const manejarCambioPORI = (e) => {
      setPori(e.target.value)
    } 

    const manejarCambioEstado = (e) => {
      setEstado(Number(e.target.value))
    } 

    const manejarCambioPersona = (e) => {
      setPersona(Number(e.target.value))
    }

    const manejarCambioSexo = (e) => {
      setSexo(e.target.value)
    } 

    const manejarCambioQueja = (e) => {
      setQueja(e.target.value)
    }

    const manejarCambioPenalizacion = (e) => {
      setPenalizacion(Number(e.target.value))
    } 

    const enviar = () =>{
      const Enviarqueja = [
        {
          "QuejasDenominacion": "Denominación o razón social",
          "QuejasSector": "Sector",
          "QuejasNoMes": seleccion,
          "QuejasNum": "Número de quejas",
          "QuejasFolio": folio,
          "QuejasFecRecepcion": fecharep,
          "QuejasMedio": "Medio de recepción o canal",
          "QuejasNivelAT": "Nivel de atención o contacto",
          "QuejasProducto": "Producto y/o Servicio",
          "QuejasCausa": "Causa de la queja",
          "QuejasPORI": "PORI",
          "QuejasEstatus": "Estado",
          "QuejasEstados": "Entidad Federativa",
          "QuejasMunId": "Municipio o Alcaldía",
          "QuejasLocId": "Localidad",
          "QuejasColId": "Colonia",
          "QuejasCP": "Código Postal",
          "QuejasTipoPersona": "Tipo de persona",
          "QuejasSexo": "Sexo",
          "QuejasEdad": "Edad",
          "QuejasFecResolucion": "Fecha de resolución",
          "QuejasFecNotificacion": "Fecha en la que se notificó al usuario",
          "QuejasRespuesta": "Sentido de la resolución",
          "QuejasNumPenal": "Número de penalización",
          "QuejasPenalizacion": "Tipo de penalización"
        }
      ];
      console.log(Enviarqueja);
    
    };

    

    //console.log("El valor de estado es:"+estado)
  


    return(
        <div className="Cuestionario container">
        <div>
          <label>Mes a informar: </label>
          <select onChange={manejarCambio} value={seleccion} className="form-control">
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
            placeholder="1"/>
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
          <label>Medio o Cancal de recepción</label>
          <select onChange={manejarCambioMedios} value={option} className="form-control">
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
            {productos.products.map(product => 
              <option key={product.productId} value={product.productId}>{product.product}</option>
            )}
          </select>
        </div>

        <div>
          <label>Causa o motivo</label>
          <select  className="form-control">
            <option>Seleccione una opción</option>
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
            name="estado"
            value={1}
            checked={estado === 1}
            onChange={manejarCambioEstado}
          />
          Pendiente
        </label>
        <label>
          <input
            type="radio"
            name="estado"
            value={2}
            checked={estado === 2}
            onChange={manejarCambioEstado}
          />
          Conluido
        </label>
      </div>
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
            />
        </div>

        <div>
          <label>Fecha de resolución</label>
          <input
            type="date"
            name="fecha_resolución"
            className="form-control"
            />
        </div>

        <div>
          <label>Fecha de Notificación</label>
          <input
            type="date"
            name="notificacion"
            className="form-control"
           />
        </div>

        <div>
          <label>Sentido de la resolución</label>
          <select onChange={manejarCambioQueja} value={queja} className="form-control">
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
            value={penalizacion}
            onChange={manejarCambioPenalizacion}
           />
        </div>
        <div>
          <label>Tipo de penalización</label>
          <select onChange={manejarCambioPenalizacion} value={penalizacion} className="form-control">
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