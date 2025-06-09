import React, { useState, useEffect } from 'react';
import profile from '../assets/profile.jpg';

function NavigationBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Scroll to section function
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', duration: 2000 });
            // Close menu after clicking (for mobile)
            if (menuOpen) setMenuOpen(false);
        }
    };

    const isMobile = windowWidth <= 768;

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Hamburger menu styling
    const hamburgerStyle = {
        display: isMobile ? 'flex' : 'none',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '30px',
        height: '25px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        zIndex: 10,
    };

    const hamburgerLineStyle = {
        width: '30px',
        height: '3px',
        backgroundColor: 'white',
        borderRadius: '10px',
        transition: 'all 0.3s linear',
    };

    // Mobile menu styles
    const mobileMenuStyle = {
        display: isMobile && menuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '64px',
        left: 0,
        right: 0,
        backgroundColor: '#212121',
        padding: '20px 0',
        transition: 'transform 0.3s ease-in-out',
        zIndex: 999,
    };

    const mobileLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        fontFamily: 'Quicksand',
        fontWeight: 'normal',
        padding: '15px 0',
        textAlign: 'center',
        transition: 'background-color 0.3s ease',
    };

    return (
        <nav className='navbar' style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            width: '100%',
            height: '64px',
            color: 'white', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            zIndex: 1000, 
            backgroundColor: '#212121'
        }}>
            <div className='navbar-logo' style={{
                display: 'flex', 
                alignItems: 'center', 
                padding: '0px 12px'
            }}>
                <img src={profile} alt='logo' style={{
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    objectFit: 'cover'
                }} />
            </div>

            {/* Hamburger Menu Button for Mobile */}
            <div style={{ 
                display: isMobile ? 'flex' : 'none', 
                alignItems: 'center', 
                paddingRight: '16px' 
            }}>
                <button onClick={toggleMenu} style={hamburgerStyle}>
                    <div style={hamburgerLineStyle}></div>
                    <div style={hamburgerLineStyle}></div>
                    <div style={hamburgerLineStyle}></div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div style={mobileMenuStyle}>
                <a onClick={() => scrollToSection('hero')} style={{...mobileLinkStyle, cursor: 'pointer'}}>Home</a>
                <a onClick={() => scrollToSection('about')} style={{...mobileLinkStyle, cursor: 'pointer'}}>About</a>
                <a onClick={() => scrollToSection('service')} style={{...mobileLinkStyle, cursor: 'pointer'}}>Services</a>
                <a onClick={() => scrollToSection('projects')} style={{...mobileLinkStyle, cursor: 'pointer'}}>Projects</a>
                <a onClick={() => scrollToSection('contact')} style={{...mobileLinkStyle, cursor: 'pointer'}}>Contact</a>
            </div>

            {/* Desktop Navigation Links */}
            <div className='navbar-container' style={{
                maxWidth: '1200px', 
                margin: '0 auto', 
                width: '100%', 
                display: isMobile ? 'none' : 'block'
            }}>
                <div className='navbar-content' style={{
                    display: 'flex', 
                    alignItems: 'center', 
                    height: '64px', 
                    justifyContent: 'center', 
                    padding: '0px 16px'
                }}>
                    <div className='navbar-links' style={{
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '50px'
                    }}>
                        <a onClick={() => scrollToSection('hero')} style={{
                            color: 'white', 
                            textDecoration: 'none', 
                            cursor: 'pointer', 
                            fontSize: '20px', 
                            fontFamily: 'Quicksand', 
                            fontWeight: 'bold', 
                            transition: 'color 0.3s ease-in-out'
                        }}>Home</a>
                        <a onClick={() => scrollToSection('about')} style={{
                            color: 'white', 
                            textDecoration: 'none', 
                            cursor: 'pointer', 
                            fontSize: '20px', 
                            fontFamily: 'Quicksand', 
                            fontWeight: 'bold', 
                            transition: 'color 0.3s ease-in-out'
                        }}>About</a>
                        <a onClick={() => scrollToSection('service')} style={{
                            color: 'white', 
                            textDecoration: 'none', 
                            cursor: 'pointer', 
                            fontSize: '20px', 
                            fontFamily: 'Quicksand', 
                            fontWeight: 'bold', 
                            transition: 'color 0.3s ease-in-out'
                        }}>Services</a>
                        <a onClick={() => scrollToSection('projects')} style={{
                            color: 'white', 
                            textDecoration: 'none', 
                            cursor: 'pointer', 
                            fontSize: '20px', 
                            fontFamily: 'Quicksand', 
                            fontWeight: 'bold', 
                            transition: 'color 0.3s ease-in-out'
                        }}>Projects</a>
                        <a onClick={() => scrollToSection('contact')} style={{
                            color: 'white', 
                            textDecoration: 'none', 
                            cursor: 'pointer', 
                            fontSize: '20px', 
                            fontFamily: 'Quicksand', 
                            fontWeight: 'bold', 
                            transition: 'color 0.3s ease-in-out'
                        }}>Contact</a>    
                    </div>
                </div>
            </div>
        </nav> 
    );
}

export default NavigationBar;