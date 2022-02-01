import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import SideBar from 'components/sideBar';

const PublicLayout = ({ children }) => (
  <div className='layoutFondo '>
    <div className=' layoutBloqueBase'>
      <div className=' bloqueLayoutContenidos '>
        <div className=' contenidoDePagina	 '>
          <Header className='' />
          <div className=' '>{children}</div>
          <Footer className='absolute inset-x-0 bottom-0' />
          <div className=' lineaVerticalXl top-20' />
          <div className=' LineaHorizontalXl top-44 left-12  ' />
        </div>
      </div>
      <SideBar />
      <div className=' layoutBloqueRelleno ' />
    </div>
  </div>
);

export default PublicLayout;
