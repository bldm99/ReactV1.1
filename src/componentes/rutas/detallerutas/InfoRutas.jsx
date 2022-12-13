import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import * as RecepcionDistritos from "../RecepcionDistritos";

import {
  TileLayer,
  MapContainer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
//import "leaflet/dist/leaflet.css";

import MarkersParametro from "./Markers";

import Cabezera from "../../Visual/Navbar";
import Navcombi from "../../Visual/Navcombi";

import { IconLocation } from "./IconLocation";

import Contactos from "./../../principal/Contactos";

const InfoRutas = () => {
  /*const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  });*/

  /*--------------------Señal de arduino---------------------------------------*/
  /*const [val, setVal] = useState([]);

  const valores = () => {
    axios.get("http://127.0.0.1:8000/").then((response) => {
      setVal(response.data);
      console.log("response.data");
    });
  };

  useEffect(() => {
    valores();
  }, []);*/

  /*--------------------Señal de arduino---------------------------------------*/

  //console.log(val);

  const redireccion = useNavigate();
  const params = useParams();

  const inicializandoempresa = { id: 0, nombre: "" }; // solo sera necesario mostrar el nombre de la empresa
  const [emp, setEmpresa] = useState(inicializandoempresa);

  const [ruta, setRuta] = useState([]);
  const listarutas = () => {
    axios
      .get(
        "https://apicombislogin.onrender.com/717ab3b1503b549a393b14f0740a1312c90c29da/api/rutas/?id=" +
          params.id
      )
      .then((response) => {
        setRuta(response.data);
      });
  };

  useEffect(() => {
    listarutas();
  }, []);

  console.log(ruta);

  const getEmpresa = async (rutaId) => {
    try {
      const x = await RecepcionDistritos.obtenerempresas(rutaId);
      //console.log(x);

      const data = x;
      const { id, nombre } = x.data;
      setEmpresa({ id, nombre }); //definimos todos los campos que se quieren mostrar
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getEmpresa(params.id); // params id es el parametro ruta_id recibido
    }
  }, []);

  var la = -0;
  var lo = -0;

  if (params.id == 1) {
    la = -16.4622842;
    lo = -71.523988;
  }
  if (params.id == 2) {
    la = -16.4551901;
    lo = -71.5275793;
  }
  if (params.id == 3) {
    la = -16.4182931;
    lo = -71.5380315;
  }

  if (params.id == 4) {
    la = -16.4068084;
    lo = -71.5640785;
  }
  if (params.id == 5) {
    la = -16.4156678;
    lo = -71.5464043;
  }

  if (params.id == 6) {
    la = -16.4712066;
    lo = -71.4848218;
  }

  if (params.id == 7) {
    la = -16.4712077;
    lo = -71.4848218;
  }

  const multiPolyline = [
    [
      [-16.426468, -71.539764],
      [-16.427006, -71.539355],
      [-16.42795, -71.538649],
      [-16.42792, -71.538451],
      [-16.428673, -71.537791],
      [-16.429637, -71.536767],
      [-16.429998, -71.535117],
      [-16.430693, -71.532712],
      [-16.430623, -71.532287],
      [-16.430532, -71.53188],
      [-16.430341, -71.530784],
      [-16.430311, -71.530221],
      [-16.430125, -71.528977],
      [-16.430051, -71.528411],
      [-16.429966, -71.527906],
      [-16.429762, -71.526608],
      [-16.429594, -71.525476],
      [-16.429501, -71.525015],
      [-16.429308, -71.523794],
      [-16.429221, -71.523301],
      [-16.428971, -71.522662],
      [-16.428699, -71.521976],
      [-16.428422, -71.521348],
      [-16.428076, -71.5205],
    ],
  ];

  const marcadores = [
    {
      name: "Mimercado",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.426468,
      longi: -71.539764,
    },
    {
      name: "Playa de estacionamiento",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.427006,
      longi: -71.539355,
    },
    {
      name: "Hostal el rey",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.42795,
      longi: -71.538649,
    },

    {
      name: "Bateria Gonzalo",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.428673,
      longi: -71.537791,
    },
    {
      name: "El Rey Parrillero",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429637,
      longi: -71.536767,
    },
    {
      name: "Floreria Tatiana",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429998,
      longi: -71.535117,
    },
    {
      name: "Ovalo Apacheta",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430693,
      longi: -71.532712,
    },
    {
      name: "Valdelomar",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430623,
      longi: -71.532287,
    },
    {
      name: "Foto Clic",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430532,
      longi: -71.53188,
    },
    {
      name: "Foto Clic",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430532,
      longi: -71.53188,
    },
    {
      name: "Urubamaba",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430341,
      longi: -71.530784,
    },
    {
      name: "DentoSurAQP",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430311,
      longi: -71.530221,
    },
    {
      name: "Polleria el Sabrocito",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430125,
      longi: -71.528977,
    },
    {
      name: "Capricio",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.430051,
      longi: -71.528411,
    },
    {
      name: "Ferreteria Leo",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429966,
      longi: -71.527906,
    },
    {
      name: "Alto de Luna",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429762,
      longi: -71.526608,
    },
    {
      name: "King Broster",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429594,
      longi: -71.525476,
    },
    {
      name: "Artica Helados",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429501,
      longi: -71.525015,
    },
    {
      name: "Bella Espa",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429308,
      longi: -71.523794,
    },
    {
      name: "Cono Pizza",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.429221,
      longi: -71.523301,
    },
    {
      name: "Cancha Sintetica",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.428971,
      longi: -71.522662,
    },
    {
      name: "Santa Clara",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.428699,
      longi: -71.521976,
    },
    {
      name: "Regalos Sami",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.428422,
      longi: -71.521348,
    },
    {
      name: "Entrada Tecsup",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVFneY4e2xbxgPotzcKWwpMwdIAGJXwqshg&usqp=CAU",
      lati: -16.428076,
      longi: -71.5205,
    },
  ];

  const limeOptions = { color: "red" };

  //Markers(9)
  //MarkersParametro.Markers(params.id)

  return (
    <div>
      <Navcombi />

      <div className="card card-body bg-white fondo-blur3">
        <h1 className="text-info  fst-italic">{emp.nombre}</h1>
      </div>

      <div className="mt-0">
        {ruta.map((x) => (
          <div className="row" key={x.id}>
            <div className="card card-body bg-white fondo-blur3 p-5  text-warning">
              <h3 className="card-title"> Ruta:{x.nombre} </h3>
              <h3 className="card-title"> Inicio :{x.inicio} </h3>
              <h3 className="card-title"> Final :{x.final} </h3>
            </div>
          </div>
        ))}
      </div>

      <div className=" card  bg-ligth p-4   " >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Enim mollitia, unde quas atque harum recusandae illum nam
            accusamus quaerat, pariatur iusto laborum, veniam corporis
             obcaecati sed cupiditate dolor dolore deserunt!</p>
        

          <div className="    d-flex justify-content-center   " >
            <MapContainer
              center={{ lat: -16.428424, lng: -71.5271051 }}
              zoom={15}
              
            >
              <TileLayer
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributorso'
              />

              <div>
                {marcadores.map((m) => (
                  <Marker
                    position={{ lat: m.lati, lng: m.longi }}
                    icon={IconLocation}
                    height="500px"
                    width="500px"
                  >
                    <Popup>
                      {m.name} <br />
                      <img src={m.imagen} height="50px" width="50px" />'
                    </Popup>
                  </Marker>
                ))}
                <Polyline pathOptions={limeOptions} positions={multiPolyline} />
              </div>
            </MapContainer>
          </div>
      
      </div>

      <Contactos />
    </div>
  );
};

export default InfoRutas;
