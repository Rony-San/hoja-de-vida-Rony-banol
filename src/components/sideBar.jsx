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
          <a
            href='https://mail.google.com/mail/u/0/?fs=1&to=ronysantiagoba@gmail.com&su=&body=&bcc=&tf=cm'
            target='_blank'
            rel='noreferrer'
          >
            <i className='far fa-envelope iconosFormaSideBar ' />
            <pan className='links'>Rony.banol@udea.edu.co</pan>
          </a>
        </div>
        <div className=' flex items-center mb-5 '>
          <a
            href='https://github.com/Rony-San'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-github iconosFormaSideBar ' />
            <pan className='links'>github.com/Rony-San</pan>
          </a>
        </div>
        <div className=' flex items-center mb-5 '>
          <a
            href='https://www.linkedin.com/in/rony-santiago/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin iconosFormaSideBar ' />
            <pan className='links'>linkedin.com/in/rony-santiago</pan>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
