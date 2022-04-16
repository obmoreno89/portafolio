import React from 'react';
import './ProyectsHeader';
import './ProyectsIcon.css';

function ProyectsIcon(props) {
  return (
    <img
      className='icon-proyects'
      src={require(`../../asset/icon/${props.logo}.png`)}
      alt='icono del lenguaje'
    />
  );
}

export default ProyectsIcon;
