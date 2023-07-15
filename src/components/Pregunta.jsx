import React  from 'react';

import Button from '@mui/material/Button';

import $ from 'jquery';

const Pregunta = ({ pregunta, opciones, handleRespuesta }) => {debugger

  //const [isButtonDisabled, setButtonDisabled] = useState(false);


  const handleOptionChange = (opcion, handleRespuesta) => {
    handleRespuesta(opcion)
    //setButtonDisabled(true)
    $('#padre').children().prop('disabled', true);

  };


  return (
    <div id='padre'>
      <h2>{pregunta}</h2>
      {opciones.map((opcion, index) => (
        <Button sx={{ m:1 }} variant="contained" id='botonD' type='radio' key={index} onClick={() => handleOptionChange(opcion,handleRespuesta)}>
          {opcion}
        </Button>

      ))}


    </div>
  );
};

export default Pregunta;
