import React from 'react';
import { motion } from 'framer-motion';
import pdf from '../../asset/pdf/CV-OBM.pdf';
import './AboutMe.css';

function AboutMe(props) {
  return (
    <main>
      <div className='container' id='nav'>
        <div className='container-title'>
          <h1 className='container-hello'>{props.hello}</h1>
          <h1 className='container-name'>{props.name}</h1>
          <motion.h1
            className='container-profession'
            initial={{ x: -900 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}>
            {props.profession}
          </motion.h1>
          <motion.p
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}>
            <a href={pdf} download>
              {props.cv}
            </a>
          </motion.p>
        </div>

        <div className='container-window'>
          <div className='container-circle'>
            <div className='circle-red'></div>
            <div className='circle-yellow'></div>
            <div className='circle-green'></div>
            <div className='container-web'>
              <div className='url-name'>{props.url}</div>
            </div>
          </div>
          <div className='container-personal'>
            <div className='container-data'>
              <div className='container-about'>
                <p className='purple'>
                  {props.personal} <span>[</span>
                </p>
                <p className='aqua'>
                  {props.mail} <span>{props.adress}</span>
                </p>
                <p className='aqua'>
                  {props.city} <span>{props.country}</span>
                </p>
                <span>]</span>
              </div>
              <div className='container-about'>
                <p className='purple'>
                  {props.education} <span>[</span>
                </p>
                <p className='aqua'>
                  {props.school} <span>{props.engineer}</span>
                </p>
                <p className='aqua'>
                  {props.plataform} <span>{props.especiality}</span>
                </p>
                <span>]</span>
              </div>
            </div>
            <div className='container-image'>
              <img
                src={require(`../../asset/img/${props.photo}.png`)}
                alt='foto personal'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutMe;
