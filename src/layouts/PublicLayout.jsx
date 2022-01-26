import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PublicLayout = ({ children }) => (
  <div className=' md:flex md:flex-col md:items-center md:bg-FondoGris-plantilla '>
    <div className=' min-h-screen h-full  md:w-8/12 xl:w-10/12  md:bg-FondoBlanco-plantilla	 '>
      <Header className='' />
      <div className=''>{children}</div>
      <Footer className='absolute inset-x-0 bottom-0' />
    </div>
  </div>
);

export default PublicLayout;
