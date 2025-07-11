import React, { useState, useEffect, useRef } from "react";
import companyLogo from '../assets/profile.jpg';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;

  const aboutBackground = {
    backgroundColor: '#212121',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '2rem 1rem' : '2rem',
    overflow: 'visible',
  };

  const contentContainer = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: isMobile ? '1rem' : '0 2rem',
    gap: isMobile ? '2rem' : '0',
    width: '100%',
  };

  const logoContainer = {
    flex: isMobile ? 'none' : '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: isMobile ? '2rem' : '0',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transition: 'all 0.8s ease-out',
    transitionDelay: '0.2s'
  };

  const textContainer = {
    flex: isMobile ? 'none' : '2',
    padding: isMobile ? '0' : '0 2rem',
    color: 'white',
    alignItems: 'center',
    marginLeft: isMobile ? '0' : isTablet ? '50px' : '100px',
    width: isMobile ? '100%' : 'auto',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    transition: 'all 0.8s ease-out',
    transitionDelay: '0.4s'
  };

  const logoStyle = {
    width: isMobile ? '200px' : isTablet ? '250px' : '300px',
    height: isMobile ? '200px' : isTablet ? '250px' : '300px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginRight: isMobile ? '0' : isTablet ? '50px' : '100px',
  };

  const headingStyle = {
    fontSize: isMobile ? '24px' : isTablet ? '28px' : '30px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: isMobile ? 'center' : 'center',
  };

  const paragraphStyle = {
    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
    fontFamily: 'Quicksand',
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'justify',
    marginBottom: '20px',
    maxWidth: isMobile ? '100%' : '600px',
  };

  return (
    <div id='about' style={aboutBackground} ref={aboutRef}>
      <div style={contentContainer}>
        <div style={logoContainer}>
          <img src={companyLogo} alt="Company Logo" style={logoStyle} />
        </div>
        
        <div style={textContainer}>
          <h1 style={headingStyle}>What is JD Sumaoang Builders?</h1>
          <div style={{backgroundColor: '#212121', padding: '20px', borderRadius: '10px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.3)'}}>
            <p style={paragraphStyle}>
              JD Sumaoang Builders is a proudly established construction company committed to excellence, 
              integrity, and innovation. With years of experience in the industry, we specialize in residential, 
              commercial, and industrial projects—bringing visions to life with unmatched precision and craftsmanship.
            </p>
          
            <p style={paragraphStyle}>
              Our team of skilled professionals is dedicated to delivering high-quality construction services, 
              ensuring that every project is completed on time and within budget. We believe in building strong 
              relationships with our clients, understanding their unique needs, and providing tailored solutions 
              that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;