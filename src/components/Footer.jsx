import React from 'react';

const Footer = () => (
  <footer className='bg-Negro-plantilla py-4 flex justify-between items-center w-screen  '>
    <a
      className='mx-2  my-1 flex flex-col items-center  w-1/3 '
      href='https://www.w3schools.com/tags/tag_a.asp'
    >
      <i className='fab fa-linkedin text-Verde-plantilla text-xl' />
      <pan className='text-xs text-BlancoLetras-plantilla'>
        Rony.banol@
        <br />
        udea.edu.co
      </pan>
    </a>
    <a
      className='mx-2  my-1 flex flex-col items-center w-1/3'
      href='https://www.w3schools.com/tags/tag_a.asp'
    >
      <i className='fab fa-github text-FondoBlanco-plantilla text-xl' />
      <pan className='text-xs text-BlancoLetras-plantilla'>
        github.com/Rony-San
      </pan>
    </a>
    <a
      className='mx-2  my-1 flex flex-col items-center  w-1/3 '
      href='https://www.w3schools.com/tags/tag_a.asp'
    >
      <i className='fab fa-linkedin text-Verde-plantilla text-xl ' />
      <pan className='text-xs text-BlancoLetras-plantilla'>
        linkedin.com/
        <br />
        in/rony-santiago
      </pan>
    </a>
  </footer>
);

export default Footer;
