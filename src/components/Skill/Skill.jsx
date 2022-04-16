import React, { useEffect } from 'react';
import './Skill.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skill(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='container-skill' id='skill'>
      <div data-aos='fade-up' className='container-aboutme-title'>
        <h1>{props.skill}</h1>
      </div>

      <div data-aos='fade-up' className='container-carrusel'>
        {props.children}
      </div>
    </section>
  );
}

export default Skill;
