import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Resultado from "./components/Resultado";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Grid version 1
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import Alert from "@mui/material/Alert"; // Grid version 1


import $ from "jquery";

const App = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [cantidadErroneos, setCantidadErroneos] = useState(0);
  const [cantidadCorrectos, setCantidadCorrectos] = useState(0);




  const preguntas = [
    {
      pregunta: "¿Las arquitecturas para implementar el ciclo Big Data, ¿se pueden considerar adecuadas para aplicaciones estrictas de tiempo real?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta: "Los usuarios de tipo administrador son los encargados de asignar permisos en el sistema",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Una dirección IP es una etiqueta numérica que identifica, de manera lógica y jerárquica, a un interfaz de un dispositivo dentro de una red que utilice el protocolo IP, que corresponde al nivel de aplicación del protocolo TCP/IP",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "Las direcciones IPv4 se expresan por un número binario de 128 bits",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "La capa de red es la cuarta capa del modelo OSI",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "La dirección IP 172.16.1.25 y máscara de subred 255.255.0.0 corresponde a una red clase C",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "En una red de clase A, se asignan los tres primeros octetos para identificar la red, reservando el octeto final (8 bits) para que sea asignado a los hosts",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "En una red de clase B, se asignan los dos primeros octetos para identificar la red, reservando los dos octetos finales (16 bits) para que sean asignados a los hosts",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Red clase C: 192.168.0.0 a 192.168.255.255 (16 bits red, 16 bits hosts)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "En las redes de gran tamaño a menudo se usa el protocolo TCP/PI",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "El comando de Linux traceroute es la herramienta ideal para descubrir por dónde se envían los datos en una red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "ping -c sirve para determinar la cantidad de paquetes que realizará el ping",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "ping -i sirve para establecer el intervalo de tiempo entre cada paquete, dicho intervalo que viene por defecto es de un segundo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Una FO PCS (núcleo de vidrio y manto de plástico) propaga mejor la luz infrarroja que una SCS (todo vidrio)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "En un material de mayor índice de refracción disminuye la longitud de onda de la luz",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La ruta que toman los paquetes en la conmutación de paquetes es probabilística",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La dispersión modal de una FO es causada por la presencia de múltiples longitudes de onda en la fibra",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Una FO G652A y B pueden trabajar en banda E",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Las fibras G657A cumplen la norma G652",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La FO con FWM (Four Wave Mixing) son recomendadas ´para trabajo en sistemas WDM (Wavelength Division Multiplexing)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Las fibras G657B soportan mayores curvatuas que las G657A",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Si una WAN está trabajando de manera convergente es obligatorio que la WAN tenga QoS.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "En una red ATM los circuitos virtuales se establecen a nivel de capa 2 (capa ATM)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Mientras menor es la apertura numérica de una fibra, menor es su ángulo de aceptación",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Una FO MMSI podría tener ancho de banda de decenas de GHz Km",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "En una FO SSMF el diámetro del núcleo usualmente es 5 veces superior a la lambda de trabajo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "El servicio de Carga Garantizada en RSVP proporciona al flujo de paquetes una calidad de servicio del tipos Soft QoS",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "UPS es un dispositivo que gracias a sus baterías permite seguir proporcionando energía eléctrica a cualquier dispositivo que tenga conectado en el caso de que se produzca un apagón o una irrupción eléctrica.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "El mundo real está compuesto de variables discretas.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "La comunicación analógica es aquella que ocurren cuando las magnitudes de la señal se representan mediante variables continuas.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La radio es un claro ejemplo del modo de transmisión Dúplex/Half Dúplex.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Una dirección IP es una etiqueta numérica que identifica, de manera lógica y jerárquica, a un interfaz de un dispositivo dentro de una red que utilice el protocolo IP, que corresponde al nivel de aplicación del protocolo TCP/IP.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "La capa de red es la cuarta capa del modelo OSI.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Cuando aumenta la sección de un conductor su resistencia es mas largo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Los receptores magnéticos producen efectos de Electromagnetismo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Tipos de UPS son Off line, línea interactiva y Off line doble conversión",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "El sistema de climatización es recomendado para centros de datos es el de confort",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "En el condensador el refrigerante cambia de estado Gaseoso a Líquido",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un presostato tipo pila y un termostato son elementos de Control",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Los aires acondicionados de precisión controlan además la humedad relativa",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Las baterías de los UPS se deben reemplazar como mínimo cada 10 años",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Los generadores eléctricos solo se hace la transferencia manualmente",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Los pararrayos son utilizados para evitar que un rayo ionizado del aire cause daños a las personas o construcciones atrayendo la descarga hacia tierra",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    // Añade más preguntas aquí
  ];









  const handleRespuesta = (opcionSeleccionada) => {
    debugger;
    const respuesta = {
      pregunta: preguntas[preguntaActual].pregunta,
      respuestaSeleccionada: opcionSeleccionada,
      respuestaCorrecta: preguntas[preguntaActual].respuestaCorrecta,
    };

    setRespuestas([...respuestas, respuesta]);

    if (respuesta.respuestaSeleccionada === respuesta.respuestaCorrecta) {
      setCantidadCorrectos(cantidadCorrectos + 1);
    } else {
      setCantidadErroneos(cantidadErroneos + 1);
    }
  };

  const handleSiguiente = () => {
    setPreguntaActual(preguntaActual + 1);
    $("#padre").children().removeAttr("disabled");
    setRespuestas([]);
  };

  return (
    <Container>
      
      <Grid container spacing={4}>
        <Grid item xs={6}>
        <Alert severity="error">Respuesta Incorrecta: {cantidadErroneos}</Alert>
        </Grid>

        <Grid item xs={6}>
          <Alert severity="info">Respuesta Correctas: {cantidadCorrectos}</Alert>
        </Grid>
      </Grid>

      <Card sx={{ maxWidth: 8000 }}>
      <Grid container spacing={2} alignItems="center" direction="row">
        <Grid item xs={12}>
          <Pregunta
            pregunta={preguntas[preguntaActual].pregunta}
            opciones={preguntas[preguntaActual].opciones}
            handleRespuesta={handleRespuesta}
            
          />
        </Grid>
      </Grid>
      </Card>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Resultado respuestas={respuestas} />
        </Grid>

        <Grid item xs={6}>
          <Button variant="contained" color="success" onClick={handleSiguiente}>
            Siguiente...
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
