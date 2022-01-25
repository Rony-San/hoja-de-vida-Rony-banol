import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const PublicLayout = ({ children }) => (
  <div className='flex flex-col min-h-screen justify-between'>
    <Header className='w-full' />
    <div className='h-full'>{children}</div>
    <Footer />
  </div>
);

export default PublicLayout;
