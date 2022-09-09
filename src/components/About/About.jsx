import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import html from '../../asset/icon/html.png';
import css from '../../asset/icon/css.png';
import js from '../../asset/icon/js.png';
import react from '../../asset/icon/react.png';
import tailwind from '../../asset/icon/tailwind.png';
import python from '../../asset/icon/python.png';
import mysql from '../../asset/icon/mysql.png';
import git from '../../asset/icon/git.png';
import redux from '../../asset/icon/redux.svg';

function About(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className='container-title-about'>
        <div data-aos='fade-up'>
          <article>
            <h1>{props.aboutme}</h1>
          </article>
        </div>
        <div data-aos='fade-up'>
          <article>
            <h1 className='title-skill'>Herramientas</h1>
          </article>
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
          <figure className='about-me-skills'>
            <div className='container-skill-logo'>
              <span>HTML</span>
              <img src={html} alt='HTML' />
            </div>
            <div className='container-skill-logo'>
              <span>CSS</span>
              <img src={css} alt='CSS' />
            </div>
            <div className='container-skill-logo'>
              <span>JS</span>
              <img src={js} alt='JavaScript' />
            </div>
            <div className='container-skill-logo'>
              <span>React.js</span>
              <img src={react} alt='React.js' />
            </div>
            <div className='container-skill-logo'>
              <span>Tailwind</span>
              <img src={tailwind} alt='Tailwind' />
            </div>
          </figure>
          <figure className='about-me-skill-second'>
            <div className='container-skill-logo'>
              <span>Python</span>
              <img src={python} alt='Python' />
            </div>
            <div className='container-skill-logo'>
              <span>MySql</span>
              <img src={mysql} alt='Mysql' />
            </div>
            <div className='container-skill-logo'>
              <span>Git</span>
              <img src={git} alt='git' />
            </div>
            <div className='container-skill-logo'>
              <span>Redux</span>
              <img src={redux} alt='git' />
            </div>
            <div className='container-skill-logo' id='hidden'>
              <span>Git</span>
              <img src={git} alt='git' />
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}

export default About;
