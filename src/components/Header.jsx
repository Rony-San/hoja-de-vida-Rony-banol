import React from 'react';
import foto from 'images/foto.png';

const Header = () => (
  <header className='bg-Negro-plantilla flex items-center h-1/2 md:hidden text-white'>
    <div className='bg-Negro-plantilla h-4/5 flex flex-col items-center justify-self-center p-3 pt-5'>
      <div className='flex items-center mx-20  '>
        <img src={foto} alt='nada' className='w-20 h-20 rounded-full ml-1 ' />
        <div className=' w-80 flex flex-col ml-10'>
          <h1 className=' font-bold text-lg border-b-2 w-fit'>
            Rony Santiago Bañol Rico
          </h1>
          <p className=' mt-2 '>
            Estudiante ingeniería <br /> de sistemas
          </p>
        </div>
      </div>

      <p className=' mx-auto  w-3/4 mt-2 '>
        Estudiante de Ingeniería de Sistemas con gran pasión por el desarrollo y
        los nuevos retos en camino de crecimiento profesional; con gran
        capacidad de autoaprendizaje y trabajo en equipo.
      </p>
    </div>
  </header>
);

export default Header;
