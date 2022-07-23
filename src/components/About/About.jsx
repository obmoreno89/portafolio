import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import hubmine from '../../asset/icon/hubmine.svg';

function About(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='container-title-about'>
        <div data-aos='fade-up'>
          <h1>{props.aboutme}</h1>
        </div>
      </div>
      <div className='container-aboutme' id='about'>
        <div className='container-aboutme-title'>
          <div data-aos='zoom-in-up' className='container-aboutme-description'>
            <div className='container-circle'>
              <div className='circle-red'></div>
              <div className='circle-yellow'></div>
              <div className='circle-green'></div>
              <div className='container-web'>
                <div className='url-name'>{props.url}</div>
              </div>
            </div>
            <div className='container-aboutme-details'>
              <div className='container-aboutme-index'>
                <h3>
                  <img
                    src={require('../../asset/icon/down.png')}
                    alt='arrow down'
                    className='container-arrow'
                  />
                  {props.folder}
                </h3>

                <p>
                  <img
                    src={require(`../../asset/icon/${props.iconHtml}.png`)}
                    alt='icono html'
                  />
                  {props.index}
                </p>
                <p>
                  <img
                    src={require(`../../asset/icon/${props.iconCss}.png`)}
                    alt='icono css'
                  />
                  {props.style}
                </p>
              </div>
              <div className='container-html'>
                <div>
                  <span>{props.openArticle}</span>
                  <p>
                    <small>{props.openP1}</small> {props.information1}
                    <small> {props.closedP1}</small>
                  </p>

                  <br />

                  <p>
                    <small>{props.openP2}</small> {props.information2}
                    <small>{props.closedP2}</small>
                  </p>
                  <span>{props.closedArticle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos='zoom-in' className='container-aboutme-image'>
          <div className='container-window-experiencie'>
            <div className='container-carrusel-circle'>
              <div className='circle-red'></div>
              <div className='circle-yellow'></div>
              <div className='circle-green'></div>
            </div>
            <div className='container-logo'>
              <h3>Hubmine</h3>
              <h5>Actualmente</h5>
              <img
                className='logo-company'
                src={hubmine}
                alt='company 
        logo'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
