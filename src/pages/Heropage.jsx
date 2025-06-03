import React from "react";
import HeroImage from '../assets/builderImage.jpg';


const Heropage = () => {

    const heroBackground = {
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
    };

    const contentStyle = {
        textAlign: 'left',
        color: 'white',
        padding: '3rem',
        maxWidth: '800px',
        zIndex: 1,
      };

    return (
        <div id="hero" className="hero" style={heroBackground}>
            <div className="hero-content" style={contentStyle}>
                <h1 style={{fontSize: '48px',
                     fontFamily: 'Poppins', 
                     fontWeight: 'bold'
                     }}>JD Sumaoang Builders </h1>

                <p style={{fontSize: '20px',
                     fontFamily: 'Quicksand',
                      fontWeight: 'bold',
                       color: 'white'
                       }}>Strong foundations, bold designs, and lasting</p>

                <p style={{fontSize: '20px',
                     fontFamily: 'Quicksand', 
                     fontWeight: 'bold', 
                     color: 'white'}}>partnerships that’s how we build better every day.</p>

                <button style={{backgroundColor: '#D32F2F', 
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    borderRadius: '10px', 
                    fontSize: '18px', 
                    fontFamily: 'Poppins', 
                    fontWeight: 'bold', 
                    cursor: 'pointer'}}>Get Inquiries</button>
            </div>
        </div>
    );
}

export default Heropage;