import React from 'react';
import './SkillLogo.css';

function SkillLogo(props) {
  return (
    <div className='container-carrusel-logo'>
      <div className='container-carrusel-circle'>
        <div className='circle-red'></div>
        <div className='circle-yellow'></div>
        <div className='circle-green'></div>
      </div>
      <div className='container-logo'>
        <h3>{props.title}</h3>
        <h5>{props.level}</h5>
        <img
          src={require(`../../asset/icon/${props.language}.png`)}
          alt='html 
        logo'
        />
      </div>
    </div>
  );
}

export default SkillLogo;
