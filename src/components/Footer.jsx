import React from 'react';

const Footer = () => (
  <footer className='footer xl:hidden'>
    <a
      className='footerComponente'
      href='https://mail.google.com/mail/u/0/?fs=1&to=ronysantiagoba@gmail.com&su=&body=&bcc=&tf=cm'
      target='_blank'
      rel='noreferrer'
    >
      <i className='far fa-envelope text-Verde-plantilla text-xl' />
      <pan className=''>
        Rony.banol@
        <br />
        udea.edu.co
      </pan>
    </a>
    <a
      className='footerComponente'
      href='https://github.com/Rony-San'
      target='_blank'
      rel='noreferrer'
    >
      <i className='fab fa-github text-FondoBlanco-plantilla text-xl' />
      <pan className=''>
        github.com/
        <br />
        Rony-San
      </pan>
    </a>
    <a
      className='footerComponente '
      href='https://www.linkedin.com/in/rony-santiago/'
      target='_blank'
      rel='noreferrer'
    >
      <i className='fab fa-linkedin text-Verde-plantilla text-xl ' />
      <pan className=''>
        linkedin.com/
        <br />
        in/rony-santiago
      </pan>
    </a>
  </footer>
);

export default Footer;
