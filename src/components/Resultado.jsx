// @flow
import * as React from "react";

import Alert from "@mui/material/Alert"; // Grid version 1

const Resultado = (resultado) => {
  

  if (resultado.respuestas.length > 0) {
    if (
      resultado.respuestas[0].respuestaSeleccionada ===
      resultado.respuestas[0].respuestaCorrecta
    ) {
      

      return (
        <div>
          <Alert severity="success">Respuesta Correcta: {resultado.respuestas[0].respuestaCorrecta}</Alert>
        </div>
      );
    } else {
      
      return <div>
        <Alert severity="error">Respuesta Incorrecta: {resultado.respuestas[0].respuestaSeleccionada}</Alert>
          
        <div>
        <Alert severity="success">Respuesta Correcta: {resultado.respuestas[0].respuestaCorrecta}</Alert>
          
        </div>
      </div>;
    }
  }
};

export default Resultado;
