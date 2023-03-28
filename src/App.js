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
        about='Sobre mi'
        proyects='Proyectos'
        skill='Experiencia'
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
        aboutme='Sobre mi...'
        url='obmoreno89.com'
        folder='Portafolio'
        iconHtml='html'
        index='index.html'
        iconCss='css'
        nameStyle='style.css'
        openArticle='<article>'
        openP1='<p>'
        information1='Soy un desarrollador web mexicano con experiencia en creación de sitios web, constantemente me encuentro fortaleciendo mis habilidades como programador y trabajando con equipos apasionados con la tecnología.'
        closedP1='</p>'
        openP2='<p>'
        information2='Me gusta aprovechar todos los recursos online, con el objetivo de ser un desarrollador capaz de encontrar soluciones, sostificadas a problemas complejos y/o robustos'
        closedP2='</p>'
        closedArticle='</article>'
      />

      <Skill skill='Experiencia laboral'>
        <Carousel breakPoints={breakPoints}>
          <SkillLogo
            title='Hubmine'
            level='Enero 2022 - Octubre 2022'
            language='hubmine'
          />
          <SkillLogo
            title='Syncronik'
            level='Octubre 2022 - Actualmente'
            language='syncronik'
          />
        </Carousel>
      </Skill>

      <ProyectsHeader title='Proyectos'>
        <ProyectsLeft
          titleSection='HUBMINE SUPPLIER SYSTEM'
          proyects='hubmine'
          description='Panel de control para que los proveedores tengan una mejor administración de sus productos y una lógica de las plantas de recolección.'
        >
          <ProyectsIcon logo='react' />
          <ProyectsIcon logo='tailwind' />
          <ProyectsIcon logo='js' />
        </ProyectsLeft>

        <ProyectsRight
          title='MP PRO SYSTEM'
          description='Sistema creado con el objetivo de llevar una mejor planeación de las actividades y visualización de Kpis de la empresa.'
          proyects='mpPro'
        >
          <ProyectsIcon logo='react' />
          <ProyectsIcon logo='tailwind' />
          <ProyectsIcon logo='js' />
        </ProyectsRight>
        {/* coment */}
        <ProyectsLeft
          title='The Bank'
          description='Es un proyecto en el cual se simulan las operaciones de un banco, con un login para ingresar a la cuenta'
          code='Ver Codigo'
          demo='Demo'
          proyects='proyect-2'
          urlCode='https://github.com/obmoreno89/the-bank'
          urlDemo='https://obmoreno89.github.io/the-bank/'
        >
          <ProyectsIcon logo='html' />
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='js' />
        </ProyectsLeft>

        <ProyectsRight
          titleSection='Pig Game'
          proyects='proyect-3'
          description=' Un juego de dados de riesgo muy simple en el que dos jugadores compiten para llegar a 100 puntos.'
          code='Ver Codigo'
          demo='Demo'
          urlCode='https://github.com/obmoreno89/pig-game'
          urlDemo='https://obmoreno89.github.io/pig-game/'
        >
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='html' />
          <ProyectsIcon logo='js' />
        </ProyectsRight>

        <ProyectsLeft
          titleSection='Status Weather'
          proyects='proyect-5'
          description='Proyecto en el cual realizamos una peticiones a una API, solicitando el estado del clima de un pais'
          code='Ver Codigo'
          demo='Demo'
          urlCode='https://github.com/obmoreno89/weather'
          urlDemo='https://obmoreno89.github.io/weather/'
        >
          <ProyectsIcon logo='css' />
          <ProyectsIcon logo='html' />
          <ProyectsIcon logo='js' />
          <ProyectsIcon logo='tailwind' />
        </ProyectsLeft>
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
