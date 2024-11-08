import './App.css';
import React, { useEffect } from 'react'; // Import React and useEffect
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/hero';
import Carousel from './components/carousel';
import Header from "./components/header";
import Horizontal from './components/horizontal';
import Timeline from './components/timeline';
import Projects from './components/projects';
import Skills from './components/skills';
import Socials from './components/aboutme';
import { Contact } from './components/contact';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 1000, // Animation duration in milliseconds
      once: false,     // Whether animation should happen only once
    });
  }, []);

  return (
    <>
            <Header />
      <Hero />
      <Carousel />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      {/* <Horizontal /> */}
    </>
  );
}

export default App;
