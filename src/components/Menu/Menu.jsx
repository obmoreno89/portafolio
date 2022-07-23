import React from 'react';
import './Menu.css';
import { motion } from 'framer-motion';
import { Link } from '@material-ui/core';
import { Link as Link2 } from 'react-scroll';

function Menu(props) {
  return (
    <header>
      <div className='container-menu'>
        <Link2
          className='link'
          to='about'
          spy={true}
          smooth={true}
          duration={1000}>
          {props.about}
        </Link2>
        <Link2
          className='link'
          to='skill'
          spy={true}
          smooth={true}
          duration={1000}>
          {props.skill}
        </Link2>
        <Link2
          className='link'
          to='proyects'
          spy={true}
          smooth={true}
          duration={1000}>
          {props.proyects}
        </Link2>
        <Link2
          className='link'
          to='contact'
          spy={true}
          smooth={true}
          duration={1000}>
          {props.contact}
        </Link2>
      </div>
      <motion.figure
        initial={{ x: 200 }}
        animate={{ x: -0 }}
        transition={{ type: 'spring', stiffness: 100 }}>
        <Link
          href='https://www.linkedin.com/in/omar-barragan-moreno-051189/'
          target='blank'
          rel='noopener noreferrer'>
          <img
            src={require(`../../asset/icon/${props.linkedin}.svg`)}
            alt='linkedin'
          />
        </Link>
        <Link
          href='https://github.com/obmoreno89'
          target='blank'
          rel='noopener noreferrer'>
          <img
            src={require(`../../asset/icon/${props.github}.svg`)}
            alt='github'
          />
        </Link>
        <Link
          href='https://twitter.com/obmoreno89'
          target='blank'
          rel='noopener noreferrer'>
          <img
            src={require(`../../asset/icon/${props.twitter}.svg`)}
            alt='twitter'
          />
        </Link>
      </motion.figure>
    </header>
  );
}

export default Menu;
