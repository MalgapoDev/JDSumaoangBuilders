import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from '../assets/builderImage.jpg';


const Heropage = () => {

    const navigate = useNavigate();

    const heroBackground = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    };

    const contentStyle = {
        textAlign: 'center',
        color: 'white',
        padding: '3rem',
        maxWidth: '800px',
        zIndex: 1,
    };

    const buttonStyle = {
        backgroundColor: '#e63946',
        color: 'white',
        padding: '12px 24px',
        borderRadius: '8px',
        border: 'none',
        fontSize: 'clamp(14px, 2vw, 16px)',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '20px',
        fontFamily: 'Poppins',
        display: 'inline-block',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    };

    const buttonContainer = {
        borderRadius: '10px', 
        fontSize: '18px', 
        fontFamily: 'Poppins', 
        fontWeight: 'bold', 
        cursor: 'pointer'
    };

    return (
        <div id="hero" className="hero" style={heroBackground}>
            <div className="hero-content" style={contentStyle}>
                <h1 style={{fontSize: '52px',
                     fontFamily: 'Poppins', 
                     fontWeight: 'bold',
                     }} data-aos="fade-down">JD Sumaoang Builders </h1>

                <p style={{fontSize: '18px',
                       fontFamily: 'Quicksand',
                       fontWeight: 'bold',
                       color: 'white',
                       }} data-aos="fade-down">Strong foundations, bold designs, and lasting partnerships </p>

                <p style={{fontSize: '18px',
                     fontFamily: 'Quicksand', 
                     fontWeight: 'bold', 
                     color: 'white',}} data-aos="fade-down">that’s how we build better every day.</p>

                <div className="button-container" style={buttonContainer} data-aos="zoom-in">
                    <a style={buttonStyle}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#d62839'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#e63946'}
                        onClick={() => navigate('/get-in-touch')}>
                            Get In Touch</a>
                </div>
            </div>
        </div>
    );
}

export default Heropage;