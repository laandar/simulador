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
      pregunta: "En un sistema de comunicación punto a punto la frecuencia de transmisión es diferente que la de recepción.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "En un sistema de comunicación punto a punto la frecuencia de transmisión es la misma que la de recepción.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "El espectro radioeléctrico es un recurso ilimitado perteneciente al dominio público del Estado",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "El sistema Operativo se debe encargar de comunicar a los dispositivos periférico, cuando el usuario así lo requiera?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "¿Los ficheros son un almacén de datos arbitrarios no volátil, no identificado por un nombre y unos atributos?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "¿Los discos en RAID 0 divide cada disco en bandas de tamaño fijo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La dirección IP 172.16.1.25 y máscara de subred 255.255.0.0 corresponde a una red clase C",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Las redes LAN, suelen utilizar enlaces vía satélite y cables submarinos para su conexión.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "El polvo en los componentes electrónicos ocasiona enfriamiento interno",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Una dirección IPv6 está compuesta por 128 bits y se expresa en una notación hexadecimal de 24 dígitos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "¿Un administrador supervisa la operación de las redes basadas en servidor?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Los triggers se utiliza cuando el usuario realiza insert, update, ¿delete y drop?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "La Auditoría de BD es importante porque los datos convertidos en información a través de bases de datos y procesos de negocios representan el negocio.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La Auditoría completa y extensiva permite cubrir gran cantidad de manejadores de bases de datos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Uno de los objetivos de la auditoria informática es verificar el cumplimiento de las normas de auditoría. Según ese objetivo, el nivel de la información que está de acuerdo con el mismo es el nivel ético y moral.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La auditoría en informática es la revisión y la evaluación de los controles, sistemas, procedimientos de informática",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "El área de AI depende del Director de Auditoría general o del Jefe del Director de Informática.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Los sistemas deben evaluarse de acuerdo con el ciclo de vida que normalmente siguen bajo requerimientos del usuario, estudio de factibilidad, diseño general, análisis, diseño lógico, desarrollo físico, pruebas, implementación, evaluación.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Los puntos que se toman en cuenta para la prueba de un sistema son: Prueba particular de cada programa - Prueba por fase validación, actualización - Prueba integral del paralelo - Prueba en paralelo sistema.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La mayoría de los delitos por computadora son cometidos por modificaciones de datos fuente al Suprimir u omitir datos - Adicionar y alterar datos - Duplicar procesos",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "Auditoria de Sistemas se define como el proceso que se sigue para la recolección y evaluación de la evidencia con el objetivo de determinar si los Sistemas de Información (SI) y los recursos que están relacionados cumplen con la función de proteger los activos e información",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "La auditoría en informática solo deberá comprender de la evaluación de los equipos de cómputo.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "¿Instalar software únicamente de sitios web confiables es el mejor método para evitar el spyware en una máquina?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "¿Un virus se centra en obtener acceso privilegiado a un dispositivo, mientras que un gusano no?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "Una organización permite que los empleados trabajen desde su hogar, la tecnología que debería implementarse para garantizar la confidencialidad de los datos mientras estos se transmiten, ¿es mediante VLANS?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "¿El análisis de vulnerabilidades es sinónimo de prueba de penetración?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "¿Un exploit permite la explotación de una vulnerabilidad descubierta?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "¿Shodan y Robtex son herramientas de external footprint pasivo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "¿VPN y VLAN son métodos que se pueden utilizar para implementar la autenticación de varios factores?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },{
      pregunta: "¿La Ingeniería social es el método no técnico que un delincuente cibernético usaría para recopilar información confidencial?.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "¿Los protocolos STP y ARP presentan amenazas al switching?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },{
      pregunta: "¿Todos los controles del anexo A se deben implementar en un sistema de gestión de seguridad de la información?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    ,{
      pregunta: "Para auditores líderes de más de 3 años ejerciendo como auditor, es posible que por su experiencia no se hagan un plan de auditoría.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    ,{
      pregunta: "¿Es posible tener que crear una Política de control de acceso en el momento de aplicar controles de la Norma?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    ,{
      pregunta: "¿El tamaño de la organización y su tipo de actividades, procesos, productos y servicios pueden determinar el alcance de la información documentada en la ISO 27001?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    ,{
      pregunta: "Los procesos contratados externamente estén fuera del alcance de control siempre y cuando se documente esto dentro de las exclusiones del sistema de gestión.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    ,{
      pregunta: "De acuerdo a la ISO 27001, basado en las tendencias actuales y manteniendo siempre en un enfoque proactivo no se debe excluir el control de Teletrabajo.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    ,{
      pregunta: "La organización debe determinar las cuestiones externas e internas que son pertinentes para su propósito y que afectan a su capacidad para lograr los resultados previstos de su sistema de gestión de seguridad de la información.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La oficina de proyectos de TI debe establecer una política de seguridad de la Información que sea adecuada al propósito de la organización.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Las pistas de auditoria son elementos que permiten certificar la existencia de una operación, la validez de sus cifras, la identidad de los sujetos involucrados, el momento de su acaecimiento",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "¿Un documento XHTML necesariamente debe empezar por el prólogo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Un Entity Framework es un Object-Relational Mapping",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Para realizar consultas a una base de datos en Entity Framework se utiliza LINQ to SQL",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Una función de ngFor en Angular es establecer la comunicación con un servidor backend",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Property Binding es una forma correcta de separar datos en Angular",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Index.js es una configuracion principal de una aplicación angular",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "DataSets y DataReaders se utiliza para interactuar con una base de datos utilizando ADO.NET",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El patrón de diseño MVC se utiliza comunmente en ASP.NET MVC",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Para realizar peticiones HTTP en angular se utiliza HttpService",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Team Foundation Server se usa en desarrollo de sistemas electricos",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Los servicios SOAP utilizan XML para el intercambio de información",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Los servicios REST utilizan JSON para el intercambio de información",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Diseñar interfaces de usuario no es una tarea común de un DBA en la administración de bases de datos?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Una directiva angular es una funcion de JavaScript",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "La metodología RUP es menos adaptable a proyectos?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "La metodología XP es recomendable usarla en proyectos de corto plazo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "SCRUM es una metodología lenta para el desarrollo de software",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "la duración de la reunión de planificación del Sprint es de 8 horas para Sprint mensuales",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "En un enfoque de auditoria basado en el riesgo un Auditor de SI debería primero realizar una evaluación del riesgo inherente.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La mejor ubicación para un sitio de procesamiento alterno es a 45 km de distancia a pesar que su costo puede ser alto",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "ISO 27001 es un codigo de buenas practicas para la seguridad de la informacion?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "¿ADO.NET se utiliza comunmente en ASP.NET para acceder y manipular bases de datos relacionales?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El Membership Provider se utiliza para gestionar la autenticación y autorización de usuarios en una aplicación web?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "¿Un módulo de facturación corresponde a un entregable para un proyecto de desarrollo de software?  ",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Las técnivas de auditoria basadas con computadoras consiste en: Un conjunto de técnicas y herramientas que emplea el auditor para recolectar información de los ambientes computarizados",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El MODO IN especifica el parámentro de salida",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Una dirección IP V4, se representa mediante numero binario 48 bits",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Los diagramas Casos de uso, entidad relación, colaboración y estados pertenecen a UML",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El cable de backcone es aquel que se origina en el punto de distribución principal e interconecta todos los armarios de telecomunicaciones del edificio",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Los Triggers se usan para labores de rapidez",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "¿En los grupos de monitoreo y control de procesos de la gestión del proyecto se mide el rendimiento del proyecto?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La fibra óptica radia energía de radiofrecuencia, por lo que se debe usar manto",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Los parámetros que definen una red son: protocolo, medio fisico y protocolo de acceso al medio",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "La Metodología RUP es mas adaptable a proyectos de Largo Plazo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La Gestión de Riesgos no corresponde al proceso de Gestión de Configuración Software?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "La inteligencia artificial se refiere a la capacidad de las máquinas para imitar el pensamiento humano.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El modelo PROMPT proporcionar instrucciones explícitas sobre el tipo de respuesta que se espera del sistema. Estas instrucciones se denominan pautas(prompts), y le indican al modelo cómo debe abordar la tarea o pregunta en particular",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Al utilizar PROMPT, se espera que las respuestas generadas por el modelo estén más enfocadas y se ajusten mejor a la intención del usuario.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Puedo confiar en las respuestas generadas por el modelo con PROMPT.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Supongamos que tienes una tarea de clasificación de noticias. Quieres utilizar inteligencia artificial para que el sistema clasifique automáticamente las noticias en categorías como política, deportes, entretenimiento, etc. Para hacerlo, usarías el modelo PROMPT",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Deep Learning es una técnica más amplia y general dentro del campo del aprendizaje automático, mientras que PROMPT es un enfoque más específico para mejorar la generación de texto en modelos de lenguaje",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Los sistemas de reconocimiento facial utilizan técnicas de inteligencia artificial para identificar y clasificar rostros humanos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Los vehículos autónomos utilizan técnicas de inteligencia artificial para tomar decisiones de conducción.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Los algoritmos de inteligencia artificial siempre son imparciales y neutrales.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "La inteligencia artificial es capaz de crear obras de arte originales sin intervención humana.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Los sistemas de recomendación utilizan técnicas de inteligencia artificial para ofrecer productos o contenido relevante a los usuarios.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La inteligencia artificial ha tenido un impacto significativo en la atención médica, permitiendo diagnósticos más precisos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "Los asistentes virtuales como Siri, Alexa y Google Assistant utilizan técnicas de inteligencia artificial para comprender y responder a las preguntas de los usuarios.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La inteligencia artificial plantea preocupaciones éticas y sociales, como la privacidad y el desplazamiento laboral.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La inteligencia artificial es capaz de simular la conciencia humana y tener un sentido de identidad propio.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El término BIG DATA se refiere exclusivamente al tamaño físico de los conjuntos de datos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El BIG DATA se caracteriza por las 3 V: volumen, velocidad y veracidad.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El BIG DATA se utiliza en diversas industrias, como finanzas, salud y marketing.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El análisis de BIG DATA se limita al procesamiento de datos estructurados.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "Los datos generados por las redes sociales pueden ser considerados como BIG DATA.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El BIG DATA se utiliza para recopilar y almacenar información personal de los usuarios.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El BIG DATA es una herramienta que ayuda a las organizaciones a tomar decisiones basadas en datos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El análisis de BIG DATA solo es relevante para grandes empresas y organizaciones.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El BIG DATA puede utilizarse para predecir patrones y tendencias futuras.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El BIG DATA se refiere únicamente a datos numéricos y cuantitativos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El análisis de BIG DATA se basa únicamente en técnicas estadísticas tradicionales.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "El BIG DATA ha tenido un impacto significativo en diversos aspectos de la sociedad y la economía.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "La privacidad de los datos es un desafío importante en el manejo y análisis del BIG DATA.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El BIG DATA permite a las empresas comprender mejor a sus clientes y ofrecerles productos y servicios personalizados",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "El BIG DATA se refiere únicamente a datos generados por máquinas y sensores.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
      pregunta: "",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },,{
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
