import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import NavigationBar from './components/NavigationBar';
import Heropage from './pages/Heropage';
import About from './pages/About';
import Service from './pages/Service';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import ContactForm from './pages/ContactForm';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      offset: 50,
    });

    window.Aos = Aos;
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <NavigationBar />
              <Heropage />
              <About />
              <Service />
              <Projects />
              <Contacts />
              <Footer />
            </>
          } />

          <Route path="/notfound" element={<NotFound />} />
          <Route path="/get-in-touch" element={<ContactForm />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
