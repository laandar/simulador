import React, { useState } from "react";
import Pregunta from "./components/Pregunta";
import Resultado from "./components/Resultado";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid"; // Grid version 1
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert"; // Grid version 1

import $ from "jquery";

const App = () => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [cantidadErroneos, setCantidadErroneos] = useState(0);
  const [cantidadCorrectos, setCantidadCorrectos] = useState(0);

  const preguntas = [
    {
      pregunta:
        "¿Las arquitecturas para implementar el ciclo Big Data, ¿se pueden considerar adecuadas para aplicaciones estrictas de tiempo real?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los usuarios de tipo administrador son los encargados de asignar permisos en el sistema",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Un Sistema Operativo de Red es un Sistema Operativo orientado a compartir recursos a través de la red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta:
        "Una dirección IP es una etiqueta numérica que identifica, de manera lógica y jerárquica, a un interfaz de un dispositivo dentro de una red que utilice el protocolo IP, que corresponde al nivel de aplicación del protocolo TCP/IP",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta:
        "Las direcciones IPv4 se expresan por un número binario de 128 bits",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta: "La capa de red es la cuarta capa del modelo OSI",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta:
        "La dirección IP 172.16.1.25 y máscara de subred 255.255.0.0 corresponde a una red clase C",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta:
        "La topología de una red consiste en un arreglo físico en el cual el dispositivo de red se conecta al medio",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta:
        "En una red de clase A, se asignan los tres primeros octetos para identificar la red, reservando el octeto final (8 bits) para que sea asignado a los hosts",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta:
        "En una red de clase B, se asignan los dos primeros octetos para identificar la red, reservando los dos octetos finales (16 bits) para que sean asignados a los hosts",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },

    {
      pregunta:
        "Red clase C: 192.168.0.0 a 192.168.255.255 (16 bits red, 16 bits hosts)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta:
        "En las redes de gran tamaño a menudo se usa el protocolo TCP/PI",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta:
        "El comando de Linux traceroute es la herramienta ideal para descubrir por dónde se envían los datos en una red",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },

    {
      pregunta:
        "ping -c sirve para determinar la cantidad de paquetes que realizará el ping",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "ping -i sirve para establecer el intervalo de tiempo entre cada paquete, dicho intervalo que viene por defecto es de un segundo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Una FO PCS (núcleo de vidrio y manto de plástico) propaga mejor la luz infrarroja que una SCS (todo vidrio)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "En un material de mayor índice de refracción disminuye la longitud de onda de la luz",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La ruta que toman los paquetes en la conmutación de paquetes es probabilística",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La dispersión modal de una FO es causada por la presencia de múltiples longitudes de onda en la fibra",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta: "Una FO G652A y B pueden trabajar en banda E",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta: "Las fibras G657A cumplen la norma G652",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La FO con FWM (Four Wave Mixing) son recomendadas ´para trabajo en sistemas WDM (Wavelength Division Multiplexing)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta: "Las fibras G657B soportan mayores curvatuas que las G657A",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Si una WAN está trabajando de manera convergente es obligatorio que la WAN tenga QoS.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "En una red ATM los circuitos virtuales se establecen a nivel de capa 2 (capa ATM)",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Mientras menor es la apertura numérica de una fibra, menor es su ángulo de aceptación",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "Una FO MMSI podría tener ancho de banda de decenas de GHz Km",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "En una FO SSMF el diámetro del núcleo usualmente es 5 veces superior a la lambda de trabajo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El servicio de Carga Garantizada en RSVP proporciona al flujo de paquetes una calidad de servicio del tipos Soft QoS",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "UPS es un dispositivo que gracias a sus baterías permite seguir proporcionando energía eléctrica a cualquier dispositivo que tenga conectado en el caso de que se produzca un apagón o una irrupción eléctrica.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "El mundo real está compuesto de variables discretas.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "La comunicación analógica es aquella que ocurren cuando las magnitudes de la señal se representan mediante variables continuas.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La radio es un claro ejemplo del modo de transmisión Dúplex/Half Dúplex.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Una dirección IP es una etiqueta numérica que identifica, de manera lógica y jerárquica, a un interfaz de un dispositivo dentro de una red que utilice el protocolo IP, que corresponde al nivel de aplicación del protocolo TCP/IP.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta: "La capa de red es la cuarta capa del modelo OSI.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Cuando aumenta la sección de un conductor su resistencia es mas largo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los receptores magnéticos producen efectos de Electromagnetismo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Tipos de UPS son Off line, línea interactiva y Off line doble conversión",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El sistema de climatización es recomendado para centros de datos es el de confort",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "En el condensador el refrigerante cambia de estado Gaseoso a Líquido",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Un presostato tipo pila y un termostato son elementos de Control",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los aires acondicionados de precisión controlan además la humedad relativa",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Las baterías de los UPS se deben reemplazar como mínimo cada 10 años",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los generadores eléctricos solo se hace la transferencia manualmente",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los pararrayos son utilizados para evitar que un rayo ionizado del aire cause daños a las personas o construcciones atrayendo la descarga hacia tierra",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "En un sistema de comunicación punto a punto la frecuencia de transmisión es diferente que la de recepción.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "En un sistema de comunicación punto a punto la frecuencia de transmisión es la misma que la de recepción.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El espectro radioeléctrico es un recurso ilimitado perteneciente al dominio público del Estado",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El sistema Operativo se debe encargar de comunicar a los dispositivos periférico, cuando el usuario así lo requiera?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿Los ficheros son un almacén de datos arbitrarios no volátil, no identificado por un nombre y unos atributos?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿Los discos en RAID 0 divide cada disco en bandas de tamaño fijo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La dirección IP 172.16.1.25 y máscara de subred 255.255.0.0 corresponde a una red clase C",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Las redes LAN, suelen utilizar enlaces vía satélite y cables submarinos para su conexión.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El polvo en los componentes electrónicos ocasiona enfriamiento interno",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Una dirección IPv6 está compuesta por 128 bits y se expresa en una notación hexadecimal de 24 dígitos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "¿Un administrador supervisa la operación de las redes basadas en servidor?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los triggers se utiliza cuando el usuario realiza insert, update, ¿delete y drop?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "La Auditoría de BD es importante porque los datos convertidos en información a través de bases de datos y procesos de negocios representan el negocio.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La Auditoría completa y extensiva permite cubrir gran cantidad de manejadores de bases de datos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Uno de los objetivos de la auditoria informática es verificar el cumplimiento de las normas de auditoría. Según ese objetivo, el nivel de la información que está de acuerdo con el mismo es el nivel ético y moral.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La auditoría en informática es la revisión y la evaluación de los controles, sistemas, procedimientos de informática",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El área de AI depende del Director de Auditoría general o del Jefe del Director de Informática.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los sistemas deben evaluarse de acuerdo con el ciclo de vida que normalmente siguen bajo requerimientos del usuario, estudio de factibilidad, diseño general, análisis, diseño lógico, desarrollo físico, pruebas, implementación, evaluación.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los puntos que se toman en cuenta para la prueba de un sistema son: Prueba particular de cada programa - Prueba por fase validación, actualización - Prueba integral del paralelo - Prueba en paralelo sistema.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La mayoría de los delitos por computadora son cometidos por modificaciones de datos fuente al Suprimir u omitir datos - Adicionar y alterar datos - Duplicar procesos",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Auditoria de Sistemas se define como el proceso que se sigue para la recolección y evaluación de la evidencia con el objetivo de determinar si los Sistemas de Información (SI) y los recursos que están relacionados cumplen con la función de proteger los activos e información",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La auditoría en informática solo deberá comprender de la evaluación de los equipos de cómputo.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "¿Instalar software únicamente de sitios web confiables es el mejor método para evitar el spyware en una máquina?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿Un virus se centra en obtener acceso privilegiado a un dispositivo, mientras que un gusano no?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Una organización permite que los empleados trabajen desde su hogar, la tecnología que debería implementarse para garantizar la confidencialidad de los datos mientras estos se transmiten, ¿es mediante VLANS?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "¿El análisis de vulnerabilidades es sinónimo de prueba de penetración?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "¿Un exploit permite la explotación de una vulnerabilidad descubierta?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿Shodan y Robtex son herramientas de external footprint pasivo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿VPN y VLAN son métodos que se pueden utilizar para implementar la autenticación de varios factores?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "¿La Ingeniería social es el método no técnico que un delincuente cibernético usaría para recopilar información confidencial?.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "¿Los protocolos STP y ARP presentan amenazas al switching?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:"¿Todos los controles del anexo A se deben implementar en un sistema de gestión de seguridad de la información?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Para auditores líderes de más de 3 años ejerciendo como auditor, es posible que por su experiencia no se hagan un plan de auditoría.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "¿Es posible tener que crear una Política de control de acceso en el momento de aplicar controles de la Norma?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿El tamaño de la organización y su tipo de actividades, procesos, productos y servicios pueden determinar el alcance de la información documentada en la ISO 27001?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los procesos contratados externamente estén fuera del alcance de control siempre y cuando se documente esto dentro de las exclusiones del sistema de gestión.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "De acuerdo a la ISO 27001, basado en las tendencias actuales y manteniendo siempre en un enfoque proactivo no se debe excluir el control de Teletrabajo.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "La organización debe determinar las cuestiones externas e internas que son pertinentes para su propósito y que afectan a su capacidad para lograr los resultados previstos de su sistema de gestión de seguridad de la información.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La oficina de proyectos de TI debe establecer una política de seguridad de la Información que sea adecuada al propósito de la organización.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Las pistas de auditoria son elementos que permiten certificar la existencia de una operación, la validez de sus cifras, la identidad de los sujetos involucrados, el momento de su acaecimiento",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿Un documento XHTML necesariamente debe empezar por el prólogo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "Un Entity Framework es un Object-Relational Mapping",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Para realizar consultas a una base de datos en Entity Framework se utiliza LINQ to SQL",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Una función de ngFor en Angular es establecer la comunicación con un servidor backend",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Property Binding es una forma correcta de separar datos en Angular",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Index.js es una configuracion principal de una aplicación angular",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "DataSets y DataReaders se utiliza para interactuar con una base de datos utilizando ADO.NET",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "El patrón de diseño MVC se utiliza comunmente en ASP.NET MVC",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Para realizar peticiones HTTP en angular se utiliza HttpService",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Team Foundation Server se usa en desarrollo de sistemas electricos",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los servicios SOAP utilizan XML para el intercambio de información",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los servicios REST utilizan JSON para el intercambio de información",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Diseñar interfaces de usuario no es una tarea común de un DBA en la administración de bases de datos?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "Una directiva angular es una funcion de JavaScript",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta: "La metodología RUP es menos adaptable a proyectos?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "La metodología XP es recomendable usarla en proyectos de corto plazo?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "SCRUM es una metodología lenta para el desarrollo de software",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "la duración de la reunión de planificación del Sprint es de 8 horas para Sprint mensuales",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "En un enfoque de auditoria basado en el riesgo un Auditor de SI debería primero realizar una evaluación del riesgo inherente.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La mejor ubicación para un sitio de procesamiento alterno es a 45 km de distancia a pesar que su costo puede ser alto",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "ISO 27001 es un codigo de buenas practicas para la seguridad de la informacion?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿ADO.NET se utiliza comunmente en ASP.NET para acceder y manipular bases de datos relacionales?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El Membership Provider se utiliza para gestionar la autenticación y autorización de usuarios en una aplicación web?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "¿Un módulo de facturación corresponde a un entregable para un proyecto de desarrollo de software?  ",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Las técnivas de auditoria basadas con computadoras consiste en: Un conjunto de técnicas y herramientas que emplea el auditor para recolectar información de los ambientes computarizados",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta: "El MODO IN especifica el parámentro de salida",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Una dirección IP V4, se representa mediante numero binario 48 bits",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los diagramas Casos de uso, entidad relación, colaboración y estados pertenecen a UML",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El cable de backcone es aquel que se origina en el punto de distribución principal e interconecta todos los armarios de telecomunicaciones del edificio",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta: "Los Triggers se usan para labores de rapidez",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "¿En los grupos de monitoreo y control de procesos de la gestión del proyecto se mide el rendimiento del proyecto?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La fibra óptica radia energía de radiofrecuencia, por lo que se debe usar manto",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los parámetros que definen una red son: protocolo, medio fisico y protocolo de acceso al medio",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "La Metodología RUP es mas adaptable a proyectos de Largo Plazo",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La Gestión de Riesgos no corresponde al proceso de Gestión de Configuración Software?",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "La inteligencia artificial se refiere a la capacidad de las máquinas para imitar el pensamiento humano.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El modelo PROMPT proporcionar instrucciones explícitas sobre el tipo de respuesta que se espera del sistema. Estas instrucciones se denominan pautas(prompts), y le indican al modelo cómo debe abordar la tarea o pregunta en particular",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Al utilizar PROMPT, se espera que las respuestas generadas por el modelo estén más enfocadas y se ajusten mejor a la intención del usuario.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Puedo confiar en las respuestas generadas por el modelo con PROMPT.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Supongamos que tienes una tarea de clasificación de noticias. Quieres utilizar inteligencia artificial para que el sistema clasifique automáticamente las noticias en categorías como política, deportes, entretenimiento, etc. Para hacerlo, usarías el modelo PROMPT",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Deep Learning es una técnica más amplia y general dentro del campo del aprendizaje automático, mientras que PROMPT es un enfoque más específico para mejorar la generación de texto en modelos de lenguaje",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los sistemas de reconocimiento facial utilizan técnicas de inteligencia artificial para identificar y clasificar rostros humanos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los vehículos autónomos utilizan técnicas de inteligencia artificial para tomar decisiones de conducción.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los algoritmos de inteligencia artificial siempre son imparciales y neutrales.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "La inteligencia artificial es capaz de crear obras de arte originales sin intervención humana.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los sistemas de recomendación utilizan técnicas de inteligencia artificial para ofrecer productos o contenido relevante a los usuarios.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La inteligencia artificial ha tenido un impacto significativo en la atención médica, permitiendo diagnósticos más precisos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "Los asistentes virtuales como Siri, Alexa y Google Assistant utilizan técnicas de inteligencia artificial para comprender y responder a las preguntas de los usuarios.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La inteligencia artificial plantea preocupaciones éticas y sociales, como la privacidad y el desplazamiento laboral.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La inteligencia artificial es capaz de simular la conciencia humana y tener un sentido de identidad propio.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El término BIG DATA se refiere exclusivamente al tamaño físico de los conjuntos de datos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El BIG DATA se caracteriza por las 3 V: volumen, velocidad y veracidad.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El BIG DATA se utiliza en diversas industrias, como finanzas, salud y marketing.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El análisis de BIG DATA se limita al procesamiento de datos estructurados.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "Los datos generados por las redes sociales pueden ser considerados como BIG DATA.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El BIG DATA se utiliza para recopilar y almacenar información personal de los usuarios.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El BIG DATA es una herramienta que ayuda a las organizaciones a tomar decisiones basadas en datos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El análisis de BIG DATA solo es relevante para grandes empresas y organizaciones.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El BIG DATA puede utilizarse para predecir patrones y tendencias futuras.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El BIG DATA se refiere únicamente a datos numéricos y cuantitativos.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El análisis de BIG DATA se basa únicamente en técnicas estadísticas tradicionales.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    {
      pregunta:
        "El BIG DATA ha tenido un impacto significativo en diversos aspectos de la sociedad y la economía.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "La privacidad de los datos es un desafío importante en el manejo y análisis del BIG DATA.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El BIG DATA permite a las empresas comprender mejor a sus clientes y ofrecerles productos y servicios personalizados",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Verdadero",
    },
    {
      pregunta:
        "El BIG DATA se refiere únicamente a datos generados por máquinas y sensores.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: "Falso",
    },
    
    {
      pregunta: "Cuál es el comando Linux para ver la dirección IP actual",
      opciones: ["Ifconfig", "Ipconfig ","Ipretrieve"],
      respuestaCorrecta: "Ifconfig",
    },

    {
      pregunta: "La DMZ es",
      opciones: ["Una zona desmilitarizada es una red aislada que se encuentra dentro de la red interna de la organización", "es una zona intermedia entre un ordenador conectado a internet y el sevidor que está accediendo","una extensión segura de la red LAN sobre una red pública o no controlada como internet"],
      respuestaCorrecta: "Una zona desmilitarizada es una red aislada que se encuentra dentro de la red interna de la organización",
    },
    {
      pregunta: "Cuál de las siguientes no es una solución que ofrece la Cloud Computing",
      opciones: ["EaaS", "IaaS","PaaS"],
      respuestaCorrecta: "EaaS",
    },
    {
      pregunta: "El significado de SQL es",
      opciones: ["Lenguaje estructurado de consultas", "Lenguaje estructurado de información","Lenguaje estructurado de datos"],
      respuestaCorrecta: "Lenguaje estructurado de consultas",
    },
    {
      pregunta: "Cuál es aún un punto de preocupación en el despliegue de servicios en la Cloud Computing",
      opciones: ["Seguridad de los datos", "La replicación y disponibilidad de los datos","La calidad del servicio"],
      respuestaCorrecta: "Seguridad de los datos",
    },
    {
      pregunta: "El CPU tiene un reloj interno cuya velocidad se mide en hertz y determina la",
      opciones: ["Velocidad de procesamiento", "Velocidad de Resistencia","Velocidad de calentamiento"],
      respuestaCorrecta: "Velocidad de procesamiento",
    },
    {
      pregunta: "Cuál de los siguientes servicios no funciona bajo el modelo cliente/servidor",
      opciones: ["Compartición de archivos P2P", "Servicio POP3","Servicio DNS"],
      respuestaCorrecta: "Compartición de archivos P2P",
    },
    {
      pregunta: "Cuál de los siguientes no es una característica de la arquitectura kappa",
      opciones: ["Alta latencia", "Procesamiento incremental","Procesamiento distribuido"],
      respuestaCorrecta: "Alta latencia",
    },
    {
      pregunta: "Cuál es una de las ventajas de usar un protocolo de enrutamiento de estado de enlace en lugar de un de vector-distancia",
      opciones: ["Después de la inundación LSA inicial, generalmente requieren menos ancho de banda para comunicar cambios en una topología", "La base de datos de topología elimina la necesidad de una tabla de enrutamiento","Los switch tienen conocimiento directo de todos los enlaces y la manera en que se conectan"],
      respuestaCorrecta: "Después de la inundación LSA inicial, generalmente requieren menos ancho de banda para comunicar cambios en una topología",
    },
    {
      pregunta: "Qué diseño de red contendría el alcance de las interrupciones en una red si ocurriera una falla",
      opciones: ["El despliegue de switchs de la capa de distribución en pares y la división de las conexiones del switch de la capa de acceso entre ellos", "La instalación de solo equipos de clase empresarial en toda la red.","La reducción del número de dispositivos y conexiones redundantes en núcleo de la red"],
      respuestaCorrecta: "El despliegue de switchs de la capa de distribución en pares y la división de las conexiones del switch de la capa de acceso entre ellos",
    },
    {
      pregunta: "Cuál es el beneficio de implementar el marcado de QoS de capa 3 en una red empresarial",
      opciones: ["EL marcado de capa 3 puede transportar la información de QoS de un extremo a otro", "EL marcado de capa 3 se puede utilizar para transportar tráfico que no sea IP","El marcado de capa 3 puede transportar información de QoS en switches que no son compatibles con IP"],
      respuestaCorrecta: "EL marcado de capa 3 puede transportar la información de QoS de un extremo a otro",
    },
    {
      pregunta: "La PC A envía una solicitud al servidor B. ¿Qué dirección IPv4 se utiliza en el campo de destino del paquete cuando el paquete sale de la PC A",
      opciones: ["192.168.12.16", "192.168.10.10","192.168.11.1"],
      respuestaCorrecta: "92.168.12.16",
    },
    {
      pregunta: "Qué utiliza el router R1 como dirección MAC de destino al crear la trama que irá del R1 al servidor B",
      opciones: ["Si la dirección MAC de destino que corresponde a la dirección IPv4 no aparece en la caché ARP, R1 envía una solicitud de ARP", "El paquete se encapsula en una trama PPP, y R1 agrega la dirección de destino de PPP a la trama.","El R1 utiliza la dirección MAC de destino del S1"],
      respuestaCorrecta: "Si la dirección MAC de destino que corresponde a la dirección IPv4 no aparece en la caché ARP, R1 envía una solicitud de ARP",
    },
    {
      pregunta: "Qué diseño de red tendría el alcance de las interrupciones de una red en caso de falla",
      opciones: ["La implementación de switches de capa de distribución en pares y la partición de conexiones de switches de capa de acceso entre ellos", "La instalación solo de equipos empresariales en toda la red","La configuración de todos los dispositivos de la capa de acceso para compartir un solo Gateway"],
      respuestaCorrecta: "La implementación de switches de capa de distribución en pares y la partición de conexiones de switches de capa de acceso entre ellos",
    },
    {
      pregunta: "Qué medida debería tomarse al planificar la redundancia en un diseño de red jerárquico",
      opciones: ["Agregar rutas físicas alternativas para que los datos atraviesen la red", "Reemplazar de inmediato un módulo, un servicio o un dispositivo que no funcione en la red","Adquirir continuamente equipos de respaldo para la red"],
      respuestaCorrecta: "Agregar rutas físicas alternativas para que los datos atraviesen la red",
    },
    {
      pregunta: "Cuál es la característica de diseño que limita el tamaño de un dominio de fallas en una red empresarial",
      opciones: ["El uso del enfoque de bloque de switches de edificio", "El uso de un diseño de núcleo contraído","La instalación de fuentes de alimentación redundantes"],
      respuestaCorrecta: "El uso del enfoque de bloque de switches de edificio",
    },
    {
      pregunta: "Qué capacidad se proporciona mediante el uso de circuitos integrados para aplicaciones específicas en los switches de multicapa de Cisco",
      opciones: ["Envío de paquetes IP de manera independiente de la CPU", "Incorporación de puertos físicos en una interfaz lógica única","Protección del tráfico de datos en caso de falla del circuito"],
      respuestaCorrecta: "Envío de paquetes IP de manera independiente de la CPU",
    },
    {
      pregunta: "Un ingeniero de red revisa un diseño de red que utiliza un router empresarial de configuración fija que admite conexiones LAN y WAN. Sin embargo, el ingeniero observa que el router no cuenta con suficientes interfaces para admitir el crecimiento y la expansión de la red. ¿Qué tipo de dispositivo se debe utilizar como reemplazo",
      opciones: ["Un router modular", "Un switch de capa 3","Un dispositivo PoE"],
      respuestaCorrecta: "Un router modular",
    },
    {
      pregunta: "Cuál protocolo de capa 4 es utilizado para una conexión TELNET entre dos ruteadores",
      opciones: ["DNS", "TCP","IP"],
      respuestaCorrecta: "TCP",
    },
    {
      pregunta: "Qué área de la red sería más probable que un personal universitario de TI tenga que rediseñar como resultado directo de que muchos estudiantes traigan sus propios tabletas y teléfonos inteligentes a la escuela para acceder a los recursos de la escuela",
      opciones: ["Extranet", "LAN inalámbrico","Intranet"],
      respuestaCorrecta: "LAN inalámbrico",
    },
    {
      pregunta: "En referencia a la pérdida de propagación de una señal. ¿Cuál de las siguientes afirmaciones es correcta?",
      opciones: ["La pérdida de propagación disminuye con el aumento de frecuencia de la señal y el aumento de la distancia entre trasmisor y receptor.", "La pérdida de propagación aumenta cuando la frecuencia de la señal y la distancia entre transmisor y receptor aumentan","La pérdida de propagación se mantiene constante con el incremento de frecuencia de la señal y el incremento de la distancia entre transmisor y receptor"],
      respuestaCorrecta: "La pérdida de propagación aumenta cuando la frecuencia de la señal y la distancia entre transmisor y receptor aumentan",
    },
    {
      pregunta: "¿Cuál no es un voltaje de distribución?",
      opciones: ["13.8 kV.", "3kV.","22 kV."],
      respuestaCorrecta: "3kV.",
    },
    {
      pregunta: "En un sistema trifásico, una carga tiene un valor de impedancia de 40 - 10j, la afirmación correcta sobre esta expresión es:",
      opciones: ["40 es la resistencia y 10 es una reactancia capacitiva", "40 es la reactancia capacitiva y 10 es la resistencia.","40 es la reactancia capacitiva y 10 es la inductiva"],
      respuestaCorrecta: "40 es la resistencia y 10 es una reactancia capacitiva",
    },
    {
      pregunta: "¿Qué significa encriptar?",
      opciones: ["Guardar los archivos comprimidos para ocupar mayor espacio libre", "Realizar una copia de seguridad y asignarle una clave","Proteger archivos en el que su contenido se encuentra en lenguaje cifrado"],
      respuestaCorrecta: "Proteger archivos en el que su contenido se encuentra en lenguaje cifrado",
    },
    {
      pregunta: "Los contactos eléctricos se pueden clasificar en",
      opciones: ["Leves o graves", "Superficiales o Internos","Directos e Indirectos"],
      respuestaCorrecta: "Directos e Indirectos",
    },
    {
      pregunta: "Las fases a seguir ante un accidentado por riesgo eléctrico es",
      opciones: ["Rescate y aplicación de primeros auxilios", "Protegerse, peticion de ayuda y rescate","Correr a atender al acidentado"],
      respuestaCorrecta: "Protegerse, peticion de ayuda y rescate",
    },
    {
      pregunta: "En los accidentes eléctrico influyen",
      opciones: ["Factores humanos", "Todas son ciertas","Factores técnicos"],
      respuestaCorrecta: "Todas son ciertas",
    },
    {
      pregunta: "Cuáles de los enunciados no corresponde a los factores de riesgo eléctrico:",
      opciones: ["Ansiedad", "equipo defectuoso","arco eléctrico"],
      respuestaCorrecta: "Ansiedad",
    },
    {
      pregunta: "Cuando colocamos los elementos de un circuito en línea, uno a continuación de otro sobre el mismo cable, estamos realizando una conexión",
      opciones: ["En paralelo", "Mixta","En serie"],
      respuestaCorrecta: "En serie",
    },
    {
      pregunta: "¿Qué componentes debe tener un circuito?",
      opciones: ["Motor, bombilla, zumbador y cables", "Receptores, generador, conductores y elementos de maniobra","Elementos de maniobra, conductores, receptores e interruptores"],
      respuestaCorrecta: "Receptores, generador, conductores y elementos de maniobra",
    },
    {
      pregunta: "Se considera la ventaja más importante en la utilización de los PLC:",
      opciones: ["Posibilidad de controlar varias máquinas con un solo autómata", "Posibilidad de utilización de espacios amplios","Posibilidad de realizar maniobras manuales"],
      respuestaCorrecta: "Posibilidad de utilización de espacios amplios",
    },
    {
      pregunta: "La luz se propaga por el núcleo de una fibra óptica por el",
      opciones: ["Principio de reflexión interna total", "Principio de la retrodispersión","Principio de retro esparcimiento de la luz"],
      respuestaCorrecta: "Principio de reflexión interna total",
    },
    {
      pregunta: "En un convertidor analógico a digital de 8 bits. ¿Cuántos niveles de voltaje pueden ser representados?",
      opciones: ["512 bits", "128 bits","256 bits"],
      respuestaCorrecta: "256 bits",
    },
    {
      pregunta: "La Apertura Numérica es menor en las fibras ópticas",
      opciones: ["Multimodo perfil escalonado", "Multimodo perfil gradual parabólico","Monomodo"],
      respuestaCorrecta: "Monomodo",
    },

    {
      pregunta: "Los materiales dopantes que se utilizan para modificar el índice de refracción del vidrio son:",
      opciones: ["Hidrógeno, Oxígeno, Flúor", "Germanio, Fósforo, Boro, Flúor","Cobre, Hierro, Cobalto"],
      respuestaCorrecta: "Germanio, Fósforo, Boro, Flúor",
    },

    {
      pregunta: "¿El volcado de memoria física se debe a daño en?",
      opciones: ["Procesador", "Mainboard","Disco duro o memoria RAM"],
      respuestaCorrecta: "Disco duro o memoria RAM",
    },
    {
      pregunta: "Es la memoria que se utiliza para acelerar el proceso, es de alta velocidad, permite que el procesador tenga más rápido acceso a los datos?",
      opciones: ["RAM", "ROM","CMOS"],
      respuestaCorrecta: "ROM",
    },
    {
      pregunta: "Cuando un equipo carece de un dispositivo ¿Qué tipo de mantenimiento se necesita?",
      opciones: ["Preventivo", "Correctivo","Adaptativo"],
      respuestaCorrecta: "Adaptativo",
    },
    {
      pregunta: "Este es el que guarda la información cuando apagamos la computadora, además aqui se guarda la mayoría de los programas y el sistema operativo.",
      opciones: ["Disco Duro", "Memoria RAM","Memoria ROM"],
      respuestaCorrecta: "Disco Duro",
    },
    {
      pregunta: "¿Cuál es el modo de inicio que permite el acceso a Windows con sólo los controladores de dispositivos más básicos?",
      opciones: ["Iniciar en modo Depuración", "Iniciar en modo normal","Iniciar en modo de prueba de fallos con F8"],
      respuestaCorrecta: "Iniciar en modo de prueba de fallos con F8",
    },
    {
      pregunta: "La Efectividad es:",
      opciones: ["Consiste en que la información sea generada optimizando los recursos (más productivo y económico)", "Hace referencia a que la información sea relevante y acertada con los procesos del negocio, y sea entregada de manera oportuna, correcta, consistente y pueda ser utilizada","Tiene que ver con la protección de información sensible contra revelación no autorizada"],
      respuestaCorrecta: "Hace referencia a que la información sea relevante y acertada con los procesos del negocio, y sea entregada de manera oportuna, correcta, consistente y pueda ser utilizada",
    },
    {
      pregunta: "La Confiabilidad es:",
      opciones: ["Representa proveer la información adecuada para que la gerencia administre la entidad y ejercite sus responsabilidades fiduciarias y de gobierno.", "Se relaciona íntegramente con la precisión y completitud de la información","Es básicamente el acatar aquellas leyes, reglamentos y acuerdos contractuales, es decir, criterios de negocios impuestos externamente, así como políticas internas."],
      respuestaCorrecta: "Representa proveer la información adecuada para que la gerencia administre la entidad y ejercite sus responsabilidades fiduciarias y de gobierno.",
    },
    {
      pregunta: "A que se le considera Información:",
      opciones: ["Es el hardware (equipos), sistemas operativos, sistemas de administración de bases de datos, de redes y de telecomunicaciones, multimedia, etc.", "Se considera la información interna y externa como, gráficas, sonidos, documentos etc.","A los sistemas de información (aplicaciones) que están compuestos por procedimientos manuales y basados en tecnología que proporcionan soporte a los procesos del negocio."],
      respuestaCorrecta: "Se considera la información interna y externa como, gráficas, sonidos, documentos etc.",
    },
    {
      pregunta: "Los recursos de información requeridos en toda organización para conseguir las metas de tecnologías de la información son cuatro:",
      opciones: ["Aplicaciones – Personal – Equipos.", "Aplicaciones – Información – Infraestructura - Recurso humano","Aplicaciones – Equipos – Recurso Humano"],
      respuestaCorrecta: "Aplicaciones – Información – Infraestructura - Recurso humano",
    },
    {
      pregunta: "Como resultado de una auditoria informática deberán realizar:",
      opciones: ["Un oficio", "Un memo","Un Informe Técnico"],
      respuestaCorrecta: "Un Informe Técnico",
    },
    {
      pregunta: "La Auditoría Informática deberá comprender no sólo la evaluación de los equipos de cómputo, de un sistema o procedimiento específico, sino que además habrá de evaluar los",
      opciones: ["Procedimientos, controles, archivos de información", "Infraestructura y diseño","Equipos de comunicación"],
      respuestaCorrecta: "Procedimientos, controles, archivos de información",
    },
    {
      pregunta: "¿Cuál es el ataque de suplantación de identidad que aprovecha una relación de confianza entre dos sistemas?",
      opciones: ["Man-in-the-middle", "Análisis","Falsificación de identidad (spoofing)"],
      respuestaCorrecta: "Falsificación de identidad (spoofing)",
    },
    {
      pregunta: "¿Qué algoritmo utilizará Windows por defecto cuando un usuario intente cifrar archivos y carpetas en un volumen NTFS?",
      opciones: ["RSA", "3DES","AES"],
      respuestaCorrecta: "AES",
    },
    {
      pregunta: "¿Las contraseñas y los PIN son ejemplos de qué término de seguridad?",
      opciones: ["Autenticación", "Acceso","Identificacion"],
      respuestaCorrecta: "Autenticación",
    },
    {
      pregunta: "¿Qué protocolo se utilizaría para proporcionar seguridad a los empleados que tienen acceso a los sistemas de manera remota desde el hogar?",
      opciones: ["SCP", "SSH","WPA"],
      respuestaCorrecta: "SSH",
    },
    {
      pregunta: "¿Qué tecnología se puede utilizar para proteger VoIP ante las interceptaciones?",
      opciones: ["ARP", "Autenticación segura","Mensajes de vos cifrados"],
      respuestaCorrecta: "Mensajes de vos cifrados",
    },
    {
      pregunta: "¿Qué tipo de ataque puede evitar la autenticación mutua?",
      opciones: ["Suplantación inalámbrica de direcciones IP", "Man-in-the-middle*","Envenenamiento inalámbrico"],
      respuestaCorrecta: "Man-in-the-middle*",
    },
    {
      pregunta: "Qué utilidad de Windows debe utilizarse para configurar las reglas de contraseña y las políticas de bloqueo de cuenta en un sistema que no es parte de un dominio?",
      opciones: ["Herramienta de política de seguridad local", "Registro de seguridad del visor de eventos","Administración de equipos"],
      respuestaCorrecta: "Herramienta de política de seguridad local",
    },
    {
      pregunta: "El responsable de la seguridad de la información de la compañía de seguros desea establecer una lista de medidas de seguridad. ¿Qué tiene que hacer en primer lugar, antes de que se puedan seleccionar las medidas de seguridad?",
      opciones: ["Llevar a cabo una evaluación", "Establecer vigilancia","Llevar a cabo un análisis de riesgo"],
      respuestaCorrecta: "Llevar a cabo un análisis de riesgo",
    },
    {
      pregunta: "Un posible riesgo para las compañías es un incendio. En este caso, si realmente hay un fuego, se puede producir un daño directo e indirecto. ¿Cuál es un ejemplo de daño directo?",
      opciones: ["Perdida de imagen", "Ya no se pueden satisfacer las obligaciones jurídicas","Se destruye una base de datos"],
      respuestaCorrecta: "Se destruye una base de datos",
    },
    {
      pregunta: "Hay un incendio en una sucursal de una compañía de seguros médicos. Se traslada al personal a una sucursal cercana para continuar su trabajo. ¿En qué momento del ciclo del incidente se encuentra la ejecución de este acuerdo en espera (stand-by)?",
      opciones: ["Entre el incidente y el daño", "Entre el daño y la recuperación","Entre la recuperación y la amenaza"],
      respuestaCorrecta: "Entre el incidente y el daño",
    },
    {
      pregunta: "Según Magerit v3, quién NO es un participante en un proyecto de análisis y gestión de riesgos:",
      opciones: ["Grupos de Interlocutores", "Grupos de Interlocutores","Comité de Gestión"],
      respuestaCorrecta: "Comité de Gestión",
    },
    {
      pregunta: "En la metodología MAGERIT, la actividad Interpretación del Riesgo corresponde a la etapa de:",
      opciones: ["Gestión de riesgos", "Planificación","Análisis de riesgos"],
      respuestaCorrecta: "Gestión de riesgos",
    },
    {
      pregunta: "La información tiene una serie de aspectos de fiabilidad. La fiabilidad está continuamente amenazada. Algunos ejemplos de amenazas son: un cable se suelta, alguien modifica accidentalmente información, uso de los datos con fines particulares o datos falsificados. ¿Cuál de los siguientes ejemplos constituye una amenaza para la confidencialidad?",
      opciones: ["Usar datos con fines particulares", "Un cable suelto","Falsificar datos"],
      respuestaCorrecta: "Usar datos con fines particulares",
    },
    {
      pregunta: "Modelo de Negocio permite el alquiler de funcionalidades y servicios de software similares a diferentes clientes con una misma necesidad. Relacione la idea con el término más apropiado.",
      opciones: ["PaaS", "SaaS","IaaS"],
      respuestaCorrecta: "IaaS",
    },
    {
      pregunta: "Modelo de Negocio que permite el alquiler de aplicaciones de una aplicación de Software. Relacione la idea con el término más apropiado.",
      opciones: ["SaaS", "Cloud","IaaS"],
      respuestaCorrecta: "SaaS",
    },
    {
      pregunta: "Modelo de Negocio que permite el alquiler de recursos de hardware de acuerdo a las necesidades de cada cliente. Relacione la idea con el término más apropiado.",
      opciones: ["SaaS", "IaaS","Cloud"],
      respuestaCorrecta: "Cloud",
    },
    {
      pregunta: "Una aplicación que tiene la presentación en una misma estructura de programación y el manejo de reglas de negocio, persistencia y datos separada se la clasificaría como: manifiesta que la Policía Nacional esta legalmente constiuida.",
      opciones: ["Monolitica", "N-capas","Cliente Servidor"],
      respuestaCorrecta: "N-capas",
    },
    {
      pregunta: "Una aplicación genérica que proveo funcionalidades comunes a una aplicación con tan solo configurarla se la define como",
      opciones: ["Framework Caja Blanca", "Patrón Diseño","Libreria"],
      respuestaCorrecta: "Libreria",
    },
    {
      pregunta: "Una solución que puede ser aplicada a problemas de diseño y cuyo funcionamiento ha sido probado se la define como",
      opciones: ["Framework Caja Blanca", "Patrón de Diseño","Framework Caja Negra"],
      respuestaCorrecta: "Patrón de Diseño",
    },
    {
      pregunta: "Qué patrón de diseño utilizaría para definir una clase que solo puede tener una instancia en tiempo de ejecución",
      opciones: ["Abstract Factory", "Builder","Singleton"],
      respuestaCorrecta: "Singleton",
    },
    {
      pregunta: "De los siguientes argumentos, ¿cuáles corresponden a los patrones arquitectónicos?",
      opciones: ["Representan el nivel más alto dentro del sistema de patrones", "Definen un enfoque específico para el manejo de algunas características del sistema","Definen un enfoque general para el manejo de algunas características del sistema"],
      respuestaCorrecta: "Representan el nivel más alto dentro del sistema de patrones",
    },
    {
      pregunta: "¿Cuál es la clasificación de los patrones de diseño de software?",
      opciones: ["Patrones de Creación, de Arquitectura y de Comportamiento", "Patrones de Creación, Estructurales y Ejecución","Patrones de Creación, Estructurales y de Comportamiento"],
      respuestaCorrecta: "Patrones de Creación, Estructurales y de Comportamiento",
    },
    {
      pregunta: "Los siguientes diagramas pertenecen a UML",
      opciones: ["Casos de uso, secuencia, colaboración y DFDs", "Casos de Uso, secuencia, colaboración y estados","Casos de uso, entidad relación, colaboración y estados"],
      respuestaCorrecta: "Casos de Uso, secuencia, colaboración y estados",
    },
    {
      pregunta: "UML (Unified Modeling Language) es un(a)…",
      opciones: ["Lenguaje que permite modelar, construir y documentar los elementos que forman un sistema software.", "Paradigma que permite modelar, construir y documentar los elementos que forman un sistema software.","Modelo que permite modelar, construir y documentar los elementos que forman un sistema"],
      respuestaCorrecta: "Lenguaje que permite modelar, construir y documentar los elementos que forman un sistema software.",
    },
    {
      pregunta: "¿Es SCRUM una metodología ágil para el desarrollo de software?",
      opciones: ["NO", "SI","Depende del tamaño del proyecto"],
      respuestaCorrecta: "SI",
    },
    {
      pregunta: "Es recomendable usar la Metodología XP en proyectos de:",
      opciones: ["Corto Plazo", "largo plazo","Mediano Plazo"],
      respuestaCorrecta: "Corto Plazo",
    },
    {
      pregunta: "¿Cuál de las siguientes NO es una fase de la Metodología RUP?",
      opciones: ["Potenciación", "Transición","Construcción"],
      respuestaCorrecta: "Potenciación",
    },
    {
      pregunta: "Cuál de las siguientes no es una metodología de desarrollo de software",
      opciones: ["XP", "JAVA","SCRUM"],
      respuestaCorrecta: "JAVA",
    },
    {
      pregunta: "Cuál es la afirmación correcta:",
      opciones: ["ISO 27001 provee Especificaciones para los Sistemas de Gestión de Calidad de la Continuidad", "ISO 27002 es un Código de Buenas Prácticas para la Seguridad de la Información.","ISO 27001 provee Especificaciones para los Sistemas de Gestión de Continuidad de la información."],
      respuestaCorrecta: "ISO 27001 provee Especificaciones para los Sistemas de Gestión de Continuidad de la información.",
    },
    {
      pregunta: "Cuál sería la MEJOR ubicación para un sitio de procesamiento alterno",
      opciones: ["Ubicarlo a 45 km de distancia a pesar que su costo puede ser alto.", "Ubicarlo a 1km de distancia para minimizar costos y rotar al personal entre ambas ubicaciones","Ubicarlo en el edificio de al frente a las oficinas principales para que el tiempo de respuesta sea mínimo. sea el menor."],
      respuestaCorrecta: "Ubicarlo a 45 km de distancia a pesar que su costo puede ser alto.",
    },
    {
      pregunta: "El phishing consiste en:",
      opciones: ["Adquirir información de cualquier forma empleando ingeniería social", "Adquirir información confidencial de forma fraudulenta del mismo usuario.","Adquirir información interceptando llamadas sin que el usuario se entere"],
      respuestaCorrecta: "Adquirir información confidencial de forma fraudulenta del mismo usuario.",
    },
    {
      pregunta: "En un documento HTML, ¿cuál es el elemento padre de <title>?",
      opciones: ["Html", "Head","Xmins"],
      respuestaCorrecta: "Head",
    },
    {
      pregunta: "Por qué debemos Modelar seleccione la respuesta correcta",
      opciones: ["Ayuda a visualizar, modelar, documentar y construir un sistema", "Utiliza bloques de construccion","Utiliza Clases"],
      respuestaCorrecta: "Ayuda a visualizar, modelar, documentar y construir un sistema",
    },
    {
      pregunta: "Tipo de modelo del ciclo de vida que consta de requerimientos, diseño, implementación, pruebas y mantenimiento",
      opciones: ["Modelo espiral", "Modelo de prototipo","Modelo cascada"],
      respuestaCorrecta: "Modelo cascada",
    },
    {
      pregunta: "¿Qué es el BIG DATA?",
      opciones: ["Un conjunto de algoritmos complejos para el análisis de datos.", "Conjuntos de datos grandes y complejos que requieren métodos avanzados de procesamiento.","Un término que se refiere al tamaño físico de los datos"],
      respuestaCorrecta: "Conjuntos de datos grandes y complejos que requieren métodos avanzados de procesamiento.",
    },
    {
      pregunta: "¿Cuál de las siguientes características describe mejor el BIG DATA?",
      opciones: ["Tamaño, velocidad y validez.", "Volumen, velocidad y variedad.","Volumen, velocidad y veracidad."],
      respuestaCorrecta: "Volumen, velocidad y variedad.",
    },
    {
      pregunta: "¿Cuál de las siguientes tecnologías se utiliza comúnmente en el análisis de BIG DATA?",
      opciones: ["Diagramas de GANTT", "Procesamiento de texto natural (natural language processing).","Modelo Entidad – Relación"],
      respuestaCorrecta: "Procesamiento de texto natural (natural language processing).",
    },
    {
      pregunta: "¿Qué es la inteligencia artificial?",
      opciones: ["Un conjunto de reglas y algoritmos para el procesamiento de datos.", "Una tecnología que permite a las máquinas imitar el pensamiento humano","Un enfoque para el almacenamiento y análisis de grandes volúmenes de datos."],
      respuestaCorrecta: "Una tecnología que permite a las máquinas imitar el pensamiento humano",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el aprendizaje automático?",
      opciones: ["Un enfoque para el análisis de datos estructurados y no estructurados", "Un método para el procesamiento y almacenamiento eficiente de grandes volúmenes de datos.","La capacidad de las máquinas para aprender de forma autónoma sin ser programadas explícitamente."],
      respuestaCorrecta: "La capacidad de las máquinas para aprender de forma autónoma sin ser programadas explícitamente.",
    },
    {
      pregunta: "¿Cuál de las siguientes técnicas es utilizada en el análisis de BIG DATA para descubrir patrones ocultos en los datos?",
      opciones: ["Algoritmos de clasificación.", "Regresión logística angular media","Árboles de decisión de moda"],
      respuestaCorrecta: "Algoritmos de clasificación.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el concepto de veracidad en el contexto del BIG DATA?",
      opciones: ["La cantidad de datos generados en un período de tiempo determinado.", "La diversidad de tipos y fuentes de datos.","La confiabilidad y precisión de los datos."],
      respuestaCorrecta: "La confiabilidad y precisión de los datos.",
    },
    {
      pregunta: "¿Cuál de las siguientes aplicaciones utiliza técnicas de inteligencia artificial para comprender y responder a preguntas de los usuarios?",
      opciones: ["Sistemas de audio y video", "Asistentes virtuales.","Vehículos autónomos"],
      respuestaCorrecta: "Asistentes virtuales.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el papel de la inteligencia artificial en los sistemas de recomendación?",
      opciones: ["Analizar grandes volúmenes de datos y ofrecer productos o contenido relevante a los usuarios", "Generar algoritmos de clasificación para organizar los datos","Procesar y almacenar grandes conjuntos de datos para su posterior análisis."],
      respuestaCorrecta: "Analizar grandes volúmenes de datos y ofrecer productos o contenido relevante a los usuarios",
    },
    {
      pregunta: "¿Cuál de las siguientes tecnologías permite a los vehículos operar sin intervención humana utilizando técnicas de inteligencia artificial?",
      opciones: ["Conducción autónoma", "Realidad virtual (VR).","Realidad aumentada (AR)."],
      respuestaCorrecta: "Conducción autónoma",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor la relación entre BIG DATA e inteligencia artificial?",
      opciones: ["El BIG DATA es una técnica utilizada en la inteligencia artificial", "El BIG DATA y la inteligencia artificial son sinónimos","La inteligencia artificial es una técnica utilizada en el BIG DATA."],
      respuestaCorrecta: "La inteligencia artificial es una técnica utilizada en el BIG DATA.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el propósito de la minería de datos en el contexto del BIG DATA?",
      opciones: ["Identificar patrones y relaciones ocultas en grandes conjuntos de datos.", "Utilizar algoritmos de compresión para reducir el tamaño de los datos","Almacenar y organizar grandes volúmenes de datos."],
      respuestaCorrecta: "Identificar patrones y relaciones ocultas en grandes conjuntos de datos.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el impacto de la inteligencia artificial en la atención médica?",
      opciones: ["Reducir la necesidad de médicos y profesionales de la salud.", "Mejorar la precisión en el diagnóstico y tratamiento de enfermedades","Eliminar la posibilidad de errores médicos"],
      respuestaCorrecta: "Mejorar la precisión en el diagnóstico y tratamiento de enfermedades",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el desafío ético asociado con el uso de BIG DATA e inteligencia artificial?",
      opciones: ["El uso inadecuado de grandes conjuntos de datos para el análisis", "La falta de capacidad de almacenamiento para grandes volúmenes de datos.","La privacidad y seguridad de los datos personales."],
      respuestaCorrecta: "La privacidad y seguridad de los datos personales.",
    },

    {
      pregunta: "¿Cuál de las siguientes tecnologías ha permitido el almacenamiento y procesamiento eficiente de BIG DATA?",
      opciones: ["Computación en la nube", "Internet de las cosas.","Redes sociales."],
      respuestaCorrecta: "Computación en la nube",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el concepto de velocidad en el contexto del BIG DATA?",
      opciones: ["La capacidad de procesar grandes volúmenes de datos en tiempo real.", "La cantidad de datos generados en un período de tiempo determinado.","La diversidad de tipos y fuentes de datos"],
      respuestaCorrecta: "La capacidad de procesar grandes volúmenes de datos en tiempo real.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el enfoque de aprendizaje profundo en el campo de la inteligencia artificial?",
      opciones: ["Un método para analizar grandes volúmenes de datos no estructurados.", "Un enfoque que se basa en redes neuronales artificiales para aprender y extraer características de los datos.","Un enfoque que utiliza algoritmos complejos para imitar el pensamiento humano"],
      respuestaCorrecta: "Un enfoque que se basa en redes neuronales artificiales para aprender y extraer características de los datos.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el propósito de los algoritmos de clustering en el análisis de BIG DATA?",
      opciones: ["Predecir patrones y tendencias futuras en los datos.", "Organizar los datos en categorías o grupos similares.","Encontrar relaciones ocultas y correlaciones entre diferentes variables"],
      respuestaCorrecta: "Organizar los datos en categorías o grupos similares.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el enfoque de aprendizaje supervisado en el campo de la inteligencia artificial?",
      opciones: ["Un método para el análisis de datos no estructurados", "Un enfoque que utiliza algoritmos complejos para imitar el pensamiento humano.","Un enfoque en el que se proporcionan ejemplos etiquetados para entrenar un modelo."],
      respuestaCorrecta: "Un enfoque en el que se proporcionan ejemplos etiquetados para entrenar un modelo.",
    },
    {
      pregunta: "¿Cuál de las siguientes opciones describe mejor el impacto del BIG DATA en el campo del marketing?",
      opciones: ["Permite a las empresas comprender mejor a sus clientes y personalizar sus estrategias", "Reduce la necesidad de técnicas de inteligencia artificial en el análisis de datos.","Elimina por completo la necesidad de realizar investigaciones de mercado tradicionales."],
      respuestaCorrecta: "Permite a las empresas comprender mejor a sus clientes y personalizar sus estrategias",
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
          <Alert severity="error">
            Respuestas Incorrectas: {cantidadErroneos}
          </Alert>
        </Grid>

        <Grid item xs={6}>
          <Alert severity="info">
            Respuestas Correctas: {cantidadCorrectos}
          </Alert>
        </Grid>
      </Grid>
      {preguntaActual < preguntas.length ? (

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
       ) : (
        <div>
          <Alert severity="warning">Total Preguntas: {preguntas.length}</Alert>
          <Alert severity="success">Actualiza la página o presiona F5 para empezar nuevamente</Alert>
        </div>
        
      )}

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
