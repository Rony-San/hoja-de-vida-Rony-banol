import React from 'react';
import BarraProgresoComponente from 'components/barraProgresoComponente';

export const BarrasProgreso = () => (
  <div className='w-full flex flex-col items-center '>
    <div className='  w-3/4 h-64 m-5 mt-10 relative justify-items-center  text-xs xl:mt-10 xl:text-FondoBlanco-plantilla'>
      <div className='xl:flex xl:flex-col xl:items-center xl:mt-5'>
        <span className='conocimientosTitulo'> CONOCIMIENTOS </span>
        <div className='conocimientosBloque conocimientosBloqueXl '>
          <BarraProgresoComponente texto='Java Script' progreso='w-7/12' />
          <BarraProgresoComponente texto='CSS' progreso='w-6/12' />
          <BarraProgresoComponente texto='HTML' progreso='w-8/12' />
          <BarraProgresoComponente texto='Python' progreso='w-5/12' />
        </div>
      </div>
      <div className='xl:flex xl:flex-col xl:items-center xl:mt-10'>
        <span className='conocimientosTitulo '> LENGUAJES</span>
        <div className='conocimientosBloque conocimientosBloqueXl'>
          <BarraProgresoComponente texto='Español' progreso='w-full' />
          <BarraProgresoComponente texto='Ingles B2' progreso='w-full' />
        </div>
      </div>
    </div>
  </div>
);

export default BarrasProgreso;
