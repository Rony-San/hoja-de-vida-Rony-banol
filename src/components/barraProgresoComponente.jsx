import React from 'react';

const BarraProgresoComponente = ({ texto, progreso }) => (
  <div>
    <span>{texto}</span>
    <div className='barraProgresoFondo '>
      <div className={`barraProgresoActivo ${progreso}`} />
    </div>
  </div>
);

export default BarraProgresoComponente;
