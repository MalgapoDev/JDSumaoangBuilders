import React from 'react'
import NavigationBar from './pages/NavigationBar'
import Heropage from './pages/Heropage'
import About from './pages/About'
import Service from './pages/Service'
import Projects from './pages/Projects'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>
    <NavigationBar />
    <Heropage />
    <About />
    <Service />
    <Projects />
    </>
  )
}

export default App
