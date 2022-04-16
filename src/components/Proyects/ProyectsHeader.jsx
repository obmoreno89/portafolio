import React, { useEffect } from 'react';
import './ProyectsHeader.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ProyectsHeader(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='container-proyects' id='proyects'>
      <div data-aos='fade-up' className='container-proyects-title'>
        <h1>{props.title}</h1>
      </div>

      <div className='container-section-proyects'>{props.children}</div>
    </div>
  );
}

export default ProyectsHeader;
