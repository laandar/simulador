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
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
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
