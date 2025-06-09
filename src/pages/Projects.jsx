import React from 'react';
import projectImage1 from '../assets/project1.jpg';
import projectImage2 from '../assets/project2.jpg';
import projectImage3 from '../assets/project3.jpg';

const Projects = () => {

    const cardProjects = [
        {
            id: 1,
            name: "CONSTRUCTION OF BARANGAY HEALTH CENTER OF PADAPADA - PHASE 1",
            description: "Description:",
            fullDescription: "Phase 1 of the Barangay Health Center project includes foundation work, structural framing, roofing, and basic utilities installation. This facility will provide essential healthcare services to the local community including maternal care, immunization services, and basic medical consultations.",
            imageUrl: projectImage1,
        },
        {
            id: 2,
            name: "CONSTRUCTION OF COVERED COURT ROOFING EXTENSION AT BARANGAY VARGAS",
            description: "Description:",
            fullDescription: "The covered court roofing extension project at Barangay Vargas aims to provide additional weather protection community activities. The design includes steel trusses, metal roofing, and proper drainage systems to ensure durability during various weather conditions.",
            imageUrl: projectImage2,
        },
        {
            id: 3,
            name: "RENOVATION AND EXTENSION OF 2-STOREY RESIDENCE (PUNZALAN RESIDENCE)",
            description: "Description:",
            fullDescription: "Comprehensive renovation and extension of the Punzalan Residence featuring modern architectural elements while preserving the original character of the home. The project includes structural reinforcement, room additions, updated electrical and plumbing systems, and contemporary interior finishes.",
            imageUrl: projectImage3,
        }
    ];

    const projectBackground = {
        backgroundColor: '#212121',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    };

    const contentContainer = {
        borderRadius: '20px',
        padding: '1.5rem',
        width: '100%',
        maxWidth: '1200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        border: '1px solid #ccc',
    };

    const projectGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        '@media (max-width: 640px)': {
            gridTemplateColumns: '1fr',
            gap: '1rem',
        },
    };

    const projectCard = {
        backgroundColor: '#333',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #ccc',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    };

    const projectContent = {
        padding: '1rem',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
    };

    const projectImageContainer = {
        width: '100%',
        height: '150px',
        marginBottom: '10px',
        overflow: 'hidden',
        borderRadius: '5px',
    };

    const projectImage = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    };

    const projectName = {
        fontWeight: '500',
        marginBottom: '0.25rem',
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 'clamp(14px, 2.5vw, 16px)',
        lineHeight: '1.3',
    };

    const projectDescriptionStyle = {
        color: '#ddd',
        marginBottom: '0.5rem',
        fontFamily: 'Poppins',
        fontSize: 'clamp(14px, 2vw, 16px)',
    };

    const projectFullDescriptionStyle = {
        color: '#aaa',
        fontFamily: 'Poppins',
        fontSize: 'clamp(12px, 1.8vw, 14px)',
        lineHeight: '1.5',
        textAlign: 'justify',
        flexGrow: 1,
    };

    const textStyle = {
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: 'clamp(24px, 5vw, 40px)',
        marginBottom: '20px',
        marginTop: '30px',
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
        marginTop: '30px',
        fontFamily: 'Poppins',
        display: 'inline-block',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    };

    const buttonContainer = {
        width: '100%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'center',
        '@media (min-width: 640px)': {
            justifyContent: 'flex-end',
        },
    };

    // Responsive styles for mobile
    const mobileStyles = `
        @media (max-width: 640px) {
            .project-grid-container {
                padding: 1rem !important;
            }
            .project-background {
                padding: 15px !important;
            }
            .project-image-container {
                height: 120px !important;
            }
            .button-container {
                justify-content: center !important;
            }
        }
        
        @media (min-width: 641px) {
            .button-container {
                justify-content: flex-end !important;
            }
        }
    `;

    return (
        <>
            <style>{mobileStyles}</style>
            <div id='projects' className='project-background' style={projectBackground}>
                <h1 style={textStyle}>JDSB Projects</h1>
                <div className='project-grid-container' style={contentContainer}>
                    <div className='project-grid' style={projectGrid}>
                        {cardProjects.map((project) => (
                            <div className='project-card' key={project.id} style={projectCard}>
                                <div className='project-content' style={projectContent}>
                                    <div 
                                        className='project-image-container project-image' 
                                        style={projectImageContainer}
                                    >
                                        <img src={project.imageUrl} alt={project.name} style={projectImage} />
                                    </div>
                                    <h2 style={projectName}>{project.name}</h2>
                                    <p style={projectDescriptionStyle}>{project.description}</p>
                                    <p style={projectFullDescriptionStyle}>{project.fullDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='button-container' style={buttonContainer}>
                    <a 
                        style={buttonStyle} 
                        href='#ViewProject'
                        onMouseOver={(e) => e.target.style.backgroundColor = '#d62839'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#e63946'}
                    >
                        See more projects
                    </a>
                </div>
            </div>
        </>
    );
}

export default Projects;