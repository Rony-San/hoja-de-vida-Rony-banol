import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import foto from 'images/foto.png';
import BarrasProgreso from 'components/barrasProgreso';

const PublicLayout = ({ children }) => (
  <div className=' xl:flex xl:flex-col xl:item-center w-screen   md:bg-FondoGris-plantilla box-border'>
    <div className='  xl:flex xl:flex-row-reverse xl:justify-center h-max  '>
      <div className=' md:flex md:flex-col md:items-center xl:w-7/12 '>
        <div className=' min-h-screen h-full  md:w-9/12 xl:w-full  md:bg-FondoBlanco-plantilla 	 '>
          <Header className='' />
          <div className=' '>{children}</div>
          <Footer className='absolute inset-x-0 bottom-0' />
        </div>
      </div>

      <div className=' hidden xl:flex xl:flex-col xl:items-center xl:w-3/12 bg-Negro-plantilla  '>
        <img
          src={foto}
          alt='nada'
          className='headerImagen md:w-40 md:h-40 md:mr-2 mt-8
           '
        />
        <div className='flex flex-col w-full'>
          <BarrasProgreso />
        </div>

        <div className='flex flex-col mt-44 items-center text-FondoBlanco-plantilla '>
          <span className='conocimientosTitulo'> CONTACTO </span>
          <div className='mr-5'>
            <div className=' flex items-center mb-5 '>
              <i className='far fa-envelope text-Verde-plantilla text-xl' />
              <pan className='ml-3'>Rony.banol@udea.edu.co</pan>
            </div>
            <div className=' flex items-center mb-5 '>
              <i className='fab fa-github text-Verde-plantilla text-xl' />
              <pan className='ml-3'> github.com/Rony-San</pan>
            </div>
            <div className=' flex items-center mb-5 '>
              <i className='fab fa-linkedin text-Verde-plantilla text-xl' />
              <pan className='ml-3'>linkedin.com/in/rony-santiago</pan>
            </div>
          </div>
        </div>
      </div>
      <div className=' hidden xl:flex xl:flex-col xl:items-center xl:w-10 bg-BlancoLetras-plantilla  ' />
    </div>
  </div>
);

export default PublicLayout;
