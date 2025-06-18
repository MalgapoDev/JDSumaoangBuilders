import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';


import NavigationBar from './components/NavigationBar'
import Heropage from './pages/Heropage'
import About from './pages/About'
import Service from './pages/Service'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
        // Initialize AOS
        Aos.init({
            duration: 2000,
            offset: 50,
            startEvent: 'DOMContentLoaded', // Helps with initial render
        });

        // Make AOS available globally for debugging
        window.Aos = Aos;
    }, []);

  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <div id="home">
        <Heropage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
      <Footer />
    </div>
  )

}

export default App
