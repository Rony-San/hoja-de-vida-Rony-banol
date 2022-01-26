import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PublicLayout = ({ children }) => (
  <div className=' min-h-screen relative h-screen	 '>
    <Header className='w-full' />
    <div className=''>{children}</div>
    <Footer className='absolute inset-x-0 bottom-0' />
  </div>
);

export default PublicLayout;
