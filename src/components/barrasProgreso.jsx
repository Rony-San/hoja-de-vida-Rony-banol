import React from 'react';
import BarraProgresoComponente from 'components/barraProgresoComponente';

export const BarrasProgreso = () => (
  <div className='w-full flex flex-col items-center '>
    <div className='  bloqueBarrasProgreso'>
      <div className='conocimientosBarras'>
        <span className='conocimientosTitulo'> CONOCIMIENTOS </span>
        <div className='conocimientosBloque conocimientosBloqueXl '>
          <BarraProgresoComponente texto='JavaScript' progreso='w-7/12' />
          <BarraProgresoComponente texto='CSS' progreso='w-6/12' />
          <BarraProgresoComponente texto='HTML' progreso='w-8/12' />
          <BarraProgresoComponente texto='Python' progreso='w-5/12' />
        </div>
      </div>
      <div className='lenguajesBarras'>
        <span className='conocimientosTitulo '> LENGUAJES</span>
        <div className='conocimientosBloque conocimientosBloqueXl'>
          <BarraProgresoComponente texto='Español' progreso='w-full' />
          <BarraProgresoComponente texto='Inglés B2' progreso='w-full' />
        </div>
      </div>
    </div>
  </div>
);

export default BarrasProgreso;
