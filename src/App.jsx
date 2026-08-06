import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Project from './components/Project/Project';
import Certificate from './components/Certificate/Certificate';
import Achievements from './components/Achievements/Achievements';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Project />
        <Certificate />
        <Achievements />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
