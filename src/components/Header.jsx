import React from 'react';
import foto from 'images/foto.png';
import 'styles/globals.css';

const Header = () => (
  <header className='bg-Negro-plantilla flex items-center md:hidden text-white font-sans '>
    <div className='bg-Negro-plantilla flex h-1/3 flex-col items-center justify-self-center p-3 pt-3 w-screen '>
      <div className='flex items-center mx-20  '>
        <img src={foto} alt='nada' className='w-20 h-20 rounded-full ml-1 ' />
        <div className=' w-80 flex flex-col ml-2'>
          <h1 className=' font-bold text-lg border-b-2 w-fit'>
            Rony Santiago Bañol Rico
          </h1>
          <p className=' mt-2  mb-2'>Estudiante ingeniería de sistemas</p>
        </div>
      </div>
      <div className=' flex items-center max-w-screen-sm text-xs '>
        <p>
          Estudiante de Ingeniería de Sistemas con gran pasión por el desarrollo
          y los nuevos retos en camino de crecimiento profesional; con gran
          capacidad de autoaprendizaje y trabajo en equipo.
        </p>
      </div>
    </div>
  </header>
);

export default Header;
