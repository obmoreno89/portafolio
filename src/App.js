import React from 'react';
import Carousel from 'react-elastic-carousel';
import './App.css';
import Menu from './components/Menu/Menu';
import AboutMe from './components/AboutMe/AboutMe';
import Skill from './components/Skill/Skill';
import SkillLogo from './components/Skill/SkillLogo';
import About from './components/About/About';
import ProyectsLeft from './components/Proyects/ProyectsLeft';
import ProyectsRight from './components/Proyects/ProyectsRight';
import ProyectsHeader from './components/Proyects/ProyectsHeader';
import ProyectsIcon from './components/Proyects/ProyectsIcon';
import Contact from './components/Contact/Contact';

function App() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
  ];

  return (
    <div className='App'>
      <Menu
        about='Experiencia'
        proyects='Proyectos'
        skill='Herramientas'
        contact='Contacto'
        linkedin='linkedin'
        github='github'
        twitter='twitter'
      />

      <AboutMe
        hello='¡Hola!'
        name='Soy Omar Barragán'
        profession='Frontend Developer.'
        cv='Descargar CV'
        url='obmoreno89.com'
        personal='.DatosPersonales'
        mail='Email:'
        adress='obmoreno89@gmail.com'
        city=' Localidad:'
        country='Orizaba, Veracruz'
        education='.Educación'
        school=' UNADM:'
        engineer='Ingeniería en Desarrollo de Software'
        plataform='Platzi:'
        especiality='Frontend Courses'
        photo='obm'
      />

      <About
        aboutme='Experiencia'
        url='obmoreno89.com'
        folder='Sobre mi...'
        iconHtml='html'
        index='index.html'
        iconCss='css'
        style='style.css'
        openArticle='<article>'
        openP1='<p>'
        information1='Soy un desarrollador web mexicano con 5 meses de experiencia en creación de sitios web, constantemente me encuentro fortaleciendo mis habilidades como programador y trabajando con equipos apasionados con la tecnología.'
        closedP1='</p>'
        openP2='<p>'
        information2='Me gusta aprovechar todos los recursos online, con el objetivo de ser un desarrollador capaz de encontrar soluciones, sostificadas a problemas complejos y/o robustos'
        closedP2='</p>'
        closedArticle='</article>'
      />

      <Skill skill='Herramientas'>
        <Carousel breakPoints={breakPoints}>
          <SkillLogo title='HTML' level='Intermedio' language='html' />
          <SkillLogo title='CSS' level='Intermedio' language='css' />
          <SkillLogo title='JavaScript' level='Intermedio' language='js' />
          <SkillLogo title='React' level='Intermedio' language='react' />
          <SkillLogo title='Tailwind' level='Intermedio' language='tailwind' />
          <SkillLogo title='Python' level='Basico' language='python' />
          <SkillLogo title='MySQL' level='Basico' language='mysql' />
          <SkillLogo title='Git' level='Intermedio' language='git' />
        </Carousel>
      </Skill>

      <ProyectsHeader title='Proyectos'>
        <ProyectsLeft
          titleSection='Layout Portafolio'
          proyects='proyect-1'
          description='Mini proyecto creado solo con HTML y CSS, en lo que se pone en práctica flexbox, grid y responsive design.'
          code='Ver Codigo'
          demo='Demo'
          urlCode='https://github.com/obmoreno89/layout-protafolio'
          urlDemo='https://obmoreno89.github.io/layout-protafolio/'>
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='html' />
        </ProyectsLeft>

        <ProyectsRight
          title='The Bank'
          description='Es un proyecto en el cual se simulan las operaciones de un banco, con un login para ingresar a la cuenta'
          code='Ver Codigo'
          demo='Demo'
          proyects='proyect-2'
          urlCode='https://github.com/obmoreno89/the-bank'
          urlDemo='https://obmoreno89.github.io/the-bank/'>
          <ProyectsIcon logo='html' />
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='js' />
        </ProyectsRight>

        <ProyectsLeft
          titleSection='Pig Game'
          proyects='proyect-3'
          description=' Un juego de dados de riesgo muy simple en el que dos jugadores compiten para llegar a 100 puntos.'
          code='Ver Codigo'
          demo='Demo'
          urlCode='https://github.com/obmoreno89/pig-game'
          urlDemo='https://obmoreno89.github.io/pig-game/'>
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='html' />
          <ProyectsIcon logo='js' />
        </ProyectsLeft>

        <ProyectsRight
          title='Rick & Morty'
          description='Un proyecto en el cual extraemos la información por medio de una API'
          code='Ver Codigo'
          demo='Demo'
          proyects='proyect-4'
          urlCode='https://github.com/obmoreno89/rick-morty'
          urlDemo='https://obmoreno89.github.io/rick-morty/'>
          <ProyectsIcon logo='react' />
          <ProyectsIcon logo='css' />
        </ProyectsRight>

        <ProyectsLeft
          titleSection='Status Weather'
          proyects='proyect-5'
          description='Proyecto en el cual realizamos una peticiones a una API, solicitando el estado del clima de un pais'
          code='Ver Codigo'
          demo='Demo'
          urlCode='https://github.com/obmoreno89/weather'
          urlDemo='https://obmoreno89.github.io/weather/'>
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='html' />
          <ProyectsIcon logo='js' />
          <ProyectsIcon logo='tailwind' />
        </ProyectsLeft>

        <ProyectsRight
          title='Geometric Figures'
          description='Proyecto para calcular el area y el perimetro de un cuadrado y un triangulo, así como el radio de un circulo'
          code='Ver Codigo'
          demo='Demo'
          proyects='proyect-6'
          urlCode='https://github.com/obmoreno89/geometric-figure'
          urlDemo='https://obmoreno89.github.io/geometric-figure/'>
          <ProyectsIcon logo='html' />
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='js' />
        </ProyectsRight>
      </ProyectsHeader>

      <Contact
        title='Contacto'
        titleInformation='¿Tienes un proyecto en mente? ¡Hagámoslo realidad!'
        textContact='¡Me gustaría tener tu contacto!'
        linkedin='linkedin'
        github='github'
        twitter='twitter'
        meDev='Omar Barragán Moreno - Desarrollador Web'
        copyright='2022 - Todos los derechos reservados'
      />
    </div>
  );
}

export default App;
