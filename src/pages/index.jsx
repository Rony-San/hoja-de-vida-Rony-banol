import React from 'react';
import PublicLayout from 'layouts/PublicLayout';
import Conocimientos from 'components/Conocimientos';
import Conocimientos2 from 'components/Conocimientos2';
import BarrasProgreso from 'components/barrasProgreso';
// import Footer from 'components/Footer';

const Index = () => (
  <PublicLayout>
    <div className='h-full flex flex-col items-center justify-between '>
      <Conocimientos />
      <Conocimientos2 />
      <BarrasProgreso />
    </div>
  </PublicLayout>
);

export default Index;
