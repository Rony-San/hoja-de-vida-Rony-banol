import React from 'react';

export const Conocimientos2 = () => (
  <div className='w-full flex flex-col items-center'>
    <div className=' w-3/4 h-80 m-5 mt-10 relative overflow-hidden'>
      <span className='absolute left-5 top-3'>HOBBIES</span>
      <span className='absolute left-5 top-48'>CURSOS</span>
      <div className='absolute w-11/12 h-1/3 bg-FondoBlanco-plantilla left-5 top-12 flex flex-col text-xs'>
        <p className='w-full '>
          Búsqueda y lectura de libros donde se enseñe un lenguaje de
          programación y se realicen proyectos relacionados con el entorno de
          trabajo del lenguaje en cuestión. Lectura autodidacta de libros en
          idioma inglés y búsqueda de información virtual para enriquecer el
          conocimiento del lenguaje.
        </p>

        <span className=''>Enfoque en administración de procesos</span>
      </div>
      <div className='absolute w-11/12 h-1/3 bg-FondoBlanco-plantilla left-5 top-[14.5rem] flex flex-col text-xs'>
        <p className='w-full flex flex-col'>
          <span>Udemy</span>
          <span>Universidad JavaScript 2021</span>
        </p>
      </div>

      <div className=' border-gray-600 absolute h-full w-1/5 border-l-2 left-2 top-8' />
      <div className=' border-gray-600 absolute w-full h-1/5 border-t-2 top-8  ' />
      <div className=' border-gray-600 absolute w-full h-1/5 border-t-2 top-[13.3rem] ' />
      <div className=' bg-FondoGris-plantilla rounded-full w-3 h-3 absolute left-1 top-[3.2rem] border-Negro-plantilla border-2' />
      <div className=' bg-FondoGris-plantilla rounded-full w-3 h-3 absolute left-1 top-[14.6rem] border-Negro-plantilla border-2' />
    </div>
  </div>
);

export default Conocimientos2;
