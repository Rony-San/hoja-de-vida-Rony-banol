import React from 'react';
import foto from 'images/foto.png';
import BarrasProgreso from 'components/barrasProgreso';

const SideBar = () => (
  <div className=' bloqueLayoutConocimientos '>
    <img
      src={foto}
      alt='nada'
      className='headerImagen posicionImagen
           '
    />
    <div className='flex flex-col w-full'>
      <BarrasProgreso />
    </div>

    <div className='contenigoSideBarBloque '>
      <span className='conocimientosTitulo '> CONTACTO </span>
      <div className='mr-5'>
        <div className=' flex items-center mb-5 '>
          <i className='far fa-envelope iconosFormaSideBar' />
          <pan className='ml-3'>Rony.banol@udea.edu.co</pan>
        </div>
        <div className=' flex items-center mb-5 '>
          <i className='fab fa-github iconosFormaSideBar' />
          <pan className='ml-3'> github.com/Rony-San</pan>
        </div>
        <div className=' flex items-center mb-5 '>
          <i className='fab fa-linkedin iconosFormaSideBar' />
          <pan className='ml-3'>linkedin.com/in/rony-santiago</pan>
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
