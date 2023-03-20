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
//comen
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
        about='About me'
        proyects='Projects'
        skill='Work experience'
        contact='Contact'
        linkedin='linkedin'
        github='github'
        twitter='twitter'
      />

      <AboutMe
        hello='¡Hi!'
        name='I am Omar Barragán'
        profession='Frontend Developer.'
        cv='Download CV'
        url='obmoreno89.com'
        personal='.Personal Information'
        mail='Email:'
        adress='obmoreno89@gmail.com'
        city=' City:'
        country='Orizaba, Veracruz'
        education='.Education'
        school=' UNADM:'
        engineer='Software Develoment Engineering'
        plataform='Platzi:'
        especiality='Frontend Courses'
        photo='obm'
      />

      <About
        aboutme='About me...'
        url='obmoreno89.com'
        folder='Portfolio'
        iconHtml='html'
        index='index.html'
        iconCss='css'
        nameStyle='style.css'
        openArticle='<article>'
        openP1='<p>'
        information1='I am a Mexican web developer with experience building websites, I constantly find myself strengthening my skills as a programmer and working with teams that are passionate about technology.'
        closedP1='</p>'
        openP2='<p>'
        information2='I like to take advantage of all the online resources, with the aim of being a developer capable of finding sustained solutions to complex and/or robust problems.'
        closedP2='</p>'
        closedArticle='</article>'
      />

      <Skill skill='Work Experience'>
        <Carousel breakPoints={breakPoints}>
          <SkillLogo
            title='Hubmine'
            level='September 2021 - March 2022'
            language='hubmine'
          />
          <SkillLogo
            title='Syncronik'
            level='April 2022 - Actually'
            language='syncronik'
          />
        </Carousel>
      </Skill>

      <ProyectsHeader title='Projects'>
        <ProyectsLeft
          titleSection='HUBMINE SUPPLIER SYSTEM'
          proyects='hubmine'
          description='Control panel so that suppliers have a better administration of their products and a logic of the collection plants.'
        >
          <ProyectsIcon logo='react' />
          <ProyectsIcon logo='tailwind' />
          <ProyectsIcon logo='js' />
        </ProyectsLeft>

        <ProyectsRight
          title='MP PRO SYSTEM'
          description='System created with the objective of carrying out a better planning of the activities and visualization of the company´s KPIs.'
          proyects='mpPro'
        >
          <ProyectsIcon logo='react' />
          <ProyectsIcon logo='tailwind' />
          <ProyectsIcon logo='js' />
        </ProyectsRight>

        <ProyectsLeft
          title='The Bank'
          description='It is a project in which the operations of a bank are simulated, with a login to enter the account'
          code='look Code'
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
          description='A very simple risk dice game where two players compete to reach 100 points.'
          code='look Code'
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
          description='Project in which we make a request to an API, requesting the weather status of a country'
          code='look Code'
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
        title='Contact'
        titleInformation='Do you have a project in mind? Lets make it happen!'
        textContact='I would like to have your contact!'
        linkedin='linkedin'
        github='github'
        twitter='twitter'
        meDev='Omar Barragán Moreno - Software Engineer'
        copyright='2022 - All rights reserved'
      />
    </div>
  );
}

export default App;
