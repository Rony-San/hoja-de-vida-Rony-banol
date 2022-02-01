import React from 'react';
import PublicLayout from 'layouts/PublicLayout';
import Conocimientos from 'components/Conocimientos';
import Conocimientos2 from 'components/Conocimientos2';
import BarrasProgreso from 'components/barrasProgreso';
// import Footer from 'components/Footer';

const Index = () => (
  <PublicLayout>
    <div className=' bloqueIndex'>
      <Conocimientos />
      <Conocimientos2 />
      <div className='xl:hidden w-full'>
        <BarrasProgreso />
      </div>
    </div>
  </PublicLayout>
);

export default Index;
