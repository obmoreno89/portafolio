import React, { useEffect } from 'react';
import './ProyectsLeft.css';
import './ProyectsHeader';
import ProyectsHeader from './ProyectsHeader';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from '@material-ui/core';

function ProyectsLeft(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='container-proyects-personal' id='proyects'>
      <div data-aos='fade-down' className='container-proyects-image'>
        <img
          src={require(`../../asset/img/${props.proyects}.png`)}
          alt='proyecto 1'
        />
      </div>
      <div data-aos='fade-up' className='container-proyects-description'>
        <h1>{props.titleSection}</h1>
        <div className='container-proyects-icon'>{props.children}</div>
        <p>{props.description}</p>
        <div className='container-proyects-link'>
          <Link
            target='blank'
            rel='noopener noreferrer'
            href={props.urlCode}
            style={{ textDecoration: 'none' }}>
            {props.code}
          </Link>
          <Link
            target='blank'
            rel='noopener noreferrer'
            href={props.urlDemo}
            style={{ textDecoration: 'none' }}>
            {props.demo}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProyectsLeft;
