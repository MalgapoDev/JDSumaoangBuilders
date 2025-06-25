import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScroll } from '../utils/ScrollContext'; 
import profile from '../assets/profile.jpg';

function NavigationBar() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { setSectionToScroll } = useScroll();

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (menuOpen) setMenuOpen(false);
        }
    };

    const handleNavClick = (sectionId) => {
        if (location.pathname === '/') {
            scrollToSection(sectionId);
        } else {
            setSectionToScroll(sectionId);
            navigate('/');
        }
    };

    const isMobile = windowWidth <= 768;

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        cursor: 'pointer',
        fontSize: '20px',
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        transition: 'color 0.3s ease-in-out'
    };

    const mobileMenuStyle = {
        display: isMobile && menuOpen ? 'flex' : 'none',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'absolute',
        top: '64px',
        left: 0,
        right: 0,
        backgroundColor: '#212121',
        padding: '20px 0',
        zIndex: 999,
    };

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100vw',
            height: '64px',
            color: 'white',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: '#212121'
        }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '0px 15px' }}>
                <img src={profile} alt='logo' style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                }} />
            </div>

            {/* Hamburger Button (Mobile) */}
            <div style={{
                display: isMobile ? 'flex' : 'none',
                alignItems: 'center',
                paddingRight: '16px'
            }}>
                <button onClick={() => setMenuOpen(!menuOpen)} style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    width: '30px',
                    height: '25px'
                }}>
                    {[...Array(3)].map((_, i) => (
                        <div key={i} style={{
                            width: '30px',
                            height: '3px',
                            backgroundColor: 'white',
                            borderRadius: '10px',
                            margin: '3px 0',
                        }} />
                    ))}
                </button>
            </div>

            {/* Mobile Menu */}
            <div style={mobileMenuStyle}>
                <a onClick={() => handleNavClick('hero')} style={linkStyle}>Home</a>
                <a onClick={() => handleNavClick('about')} style={linkStyle}>About</a>
                <a onClick={() => handleNavClick('service')} style={linkStyle}>Services</a>
                <a onClick={() => handleNavClick('projects')} style={linkStyle}>Projects</a>
                <a onClick={() => handleNavClick('contact')} style={linkStyle}>Contact</a>
            </div>

            {/* Desktop Centered Nav */}
            {!isMobile && (
                <div className="navbar-container" style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <div className="navbar-content" style={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '64px',
                        padding: '0px 16px'
                    }}>
                        <div className="navbar-links" style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '50px'
                        }}>
                            <a onClick={() => handleNavClick('hero')} style={linkStyle}>Home</a>
                            <a onClick={() => handleNavClick('about')} style={linkStyle}>About</a>
                            <a onClick={() => handleNavClick('service')} style={linkStyle}>Services</a>
                            <a onClick={() => handleNavClick('projects')} style={linkStyle}>Projects</a>
                            <a onClick={() => handleNavClick('contact')} style={linkStyle}>Contact</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavigationBar;
