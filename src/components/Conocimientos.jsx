import React from 'react';

export const Conocimientos = () => (
  <div className='w-full flex flex-col items-center'>
    <div className=' w-3/4 h-80 m-5 mt-10 relative overflow-hidden'>
      <span className='absolute left-5 top-3'>EDUCACIÓN</span>
      <span className='absolute left-5 top-44'>INTERESES</span>
      <div className='absolute w-11/12 h-1/3 bg-FondoBlanco-plantilla left-5 top-10 flex flex-col text-xs'>
        <span className='text-base my-2'>Universidad de Antioquía</span>
        <p className='w-full flex justify-between my-2'>
          <span>Ingeniería de sistemas</span>
          <span>2021 - Actualidad</span>
        </p>
        <p className='w-full flex justify-between mt-2'>
          <span>Ingeniería quimica</span>
          <span>2015 - 2021</span>
        </p>

        <span className=''>Enfoque en administración de procesos</span>
      </div>
      <div className='absolute w-11/12 h-1/3 bg-FondoBlanco-plantilla left-5 top-[13.5rem] flex flex-col text-xs'>
        <p className='w-full '>
          Disposición por los diversos lenguajes de programación usados en la
          actualidad, los cuales tienen Inclinación por el desarrollo Front-End
          y la experiencia de usuario; principalmente Java Script, HTML y CSS.
        </p>
      </div>

      <div className=' border-gray-600 absolute h-full w-1/5 border-l-2 left-2 top-8' />
      <div className=' border-gray-600 absolute w-full h-1/5 border-t-2 top-8  ' />
      <div className=' border-gray-600 absolute w-full h-1/5 border-t-2 top-[12.3rem] ' />
      <div className=' bg-FondoGris-plantilla rounded-full w-3 h-3 absolute left-1 top-[5.6rem] border-Negro-plantilla border-2' />
      <div className=' bg-FondoGris-plantilla rounded-full w-3 h-3 absolute left-1 top-[7.6rem] border-Negro-plantilla border-2' />
      <div className=' bg-FondoGris-plantilla rounded-full w-3 h-3 absolute left-1 top-[13.6rem] border-Negro-plantilla border-2' />
    </div>
  </div>
);

export default Conocimientos;
