import React, { useEffect } from 'react';
import './ProyectsRight.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from '@material-ui/core';

function ProyectsRight(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='container-proyects-personal2'>
      <div data-aos='fade-up' className='container-proyects-description2'>
        <h1>{props.title}</h1>
        <div className='container-proyects-icon'>{props.children}</div>
        <p>{props.description}</p>
        <div className='container-proyects-link'>
          <Link
            target='blank'
            rel='noopener noreferrer'
            href={props.urlCode}
            style={{ textDecoration: 'none' }}
          >
            {props.code}
          </Link>
          <Link
            target='blank'
            rel='noopener noreferrer'
            href={props.urlDemo}
            style={{ textDecoration: 'none' }}
          >
            {props.demo}
          </Link>
        </div>
      </div>
      <div data-aos='fade-down' className='container-proyects-image2'>
        <img
          src={require(`../../asset/img/${props.proyects}.png`)}
          alt='proyecto 2'
        />
      </div>
    </div>
  );
}

export default ProyectsRight;
