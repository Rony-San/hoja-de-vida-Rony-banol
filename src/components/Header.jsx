import React from 'react';
import foto from 'images/foto.png';
import 'styles/globals.css';

const Header = () => (
  <header className=''>
    <div className='headerBloque bloqueBaseXL '>
      <div className='flex items-center mx-20 md:mx-10   '>
        <img
          src={foto}
          alt='nada'
          className='headerImagen md:w-40 md:h-40 md:mr-2 xl:hidden '
        />
        <div className=' w-80 flex flex-col ml-2 xl:w-full xl:mx-16'>
          <h1 className=' headerNombre'>Rony Santiago Bañol Rico</h1>
          <p className=' mt-2  mb-2'>Estudiante ingeniería de sistemas</p>
          <p className='hidden  headerTextoTablet'>
            Estudiante de Ingeniería de Sistemas con gran pasión por el
            desarrollo y los nuevos retos en camino de crecimiento profesional;
            con gran capacidad de autoaprendizaje y trabajo en equipo.
          </p>
        </div>
      </div>

      <p className=' headerTexto md:hidden'>
        Estudiante de Ingeniería de Sistemas con gran pasión por el desarrollo y
        los nuevos retos en camino de crecimiento profesional; con gran
        capacidad de autoaprendizaje y trabajo en equipo.
      </p>
    </div>
  </header>
);

export default Header;
