import React from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './pages/NavigationBar'
import Heropage from './pages/Heropage'
import About from './pages/About'
import Service from './pages/Service'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <>
    <NavigationBar/>
    <Heropage/>
    <About/>
    <Service/>
    <Projects/>
    <Contacts/>
    </>
  )
}

export default App
