import React, { useState, useEffect } from "react";
import companyLogo from '../assets/profile.jpg';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
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
  };

  const textContainer = {
    flex: isMobile ? 'none' : '2',
    padding: isMobile ? '0' : '0 2rem',
    color: 'white',
    alignItems: 'center',
    marginLeft: isMobile ? '0' : isTablet ? '50px' : '100px',
    width: isMobile ? '100%' : 'auto',
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
    <div id='about' style={aboutBackground}>
      <div style={contentContainer}>
        <div style={logoContainer}>
          <img src={companyLogo} alt="Company Logo" style={logoStyle} />
        </div>
        
        <div style={textContainer}>
          <h1 style={headingStyle}>What is JD Sumaoang Builders?</h1>
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
  );
};

export default About;