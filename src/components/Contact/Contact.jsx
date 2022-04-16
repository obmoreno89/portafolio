import React, { useEffect } from 'react';
import './Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from '@material-ui/core';
import { Link as Link2 } from 'react-scroll';

function Contact(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='container-contact' id='contact'>
      <div data-aos='fade-up' className='container-contact-title'>
        <h1>{props.title}</h1>
      </div>
      <div className='container-contact-information'>
        <div className='information-title'>
          <h1 data-aos='fade-up'>{props.titleInformation}</h1>
          <p data-aos='fade-up'>{props.textContact}</p>
          <figure data-aos='fade-up' className='information-icon'>
            <Link
              className='ri-linkedin icon'
              href='https://www.linkedin.com/in/omar-barragan-moreno-051189/'
              target='blank'
              rel='noopener noreferrer'>
              <img
                src={require(`../../asset/icon/${props.linkedin}.png`)}
                alt='Linkedin'
              />
            </Link>
            <Link
              className='ri-github icon'
              href='https://github.com/obmoreno89'
              target='blank'
              rel='noopener noreferrer'>
              <img
                src={require(`../../asset/icon/${props.github}.png`)}
                alt='Github'
              />
            </Link>
            <Link
              className='ri-twitter icon'
              href='https://twitter.com/obmoreno89'
              target='blank'
              rel='noopener noreferrer'>
              <img
                src={require(`../../asset/icon/${props.twitter}.png`)}
                alt='Twitter'
              />
            </Link>
          </figure>
        </div>
        <div className='information-border'></div>
        <div className='information-copyright'>
          <div className='copyright-title'>
            <h4 className='me-information'>{props.meDev}</h4>
            <h4 className='copyright'>{props.copyright}</h4>
          </div>
          <div className='container-up'>
            <Link2
              href='nav'
              className='link'
              to='about'
              spy={true}
              smooth={true}
              duration={1000}
              offset={-1000}>
              <img src={require(`../../asset/icon/up.png`)} alt=' Arrow Up' />
            </Link2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
