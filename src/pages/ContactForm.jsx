import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {TextField, Button} from '@mui/material';
import emailjs from "@emailjs/browser";

const ContactForm = () => {

    const form = useRef();
    const location = useLocation();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_0d73nlm",
            "template_onqfixf",
            form.current,
            "aJ7_Gm-8AIuTpnijE"
        )
        .then((result) => {
            console.log("SUCCESS!", result.text);
            alert("Message sent successfully!");
            form.current.reset();
            
        }, (error) => {
            console.error("FAILED...", error.text);
            alert("Failed to send message.");
            }
        );
    };

    const contactFormStyle = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
        textAlign: 'center',
    };

    const HeaderText = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textAlign: 'center',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Poppins',
    };

    const contentStyle = {
        textAlign: 'center',
        color: 'white',
        padding: '3rem',
        maxWidth: '800px',
        zIndex: 1,
    };

    const paragraphStyle = {
        fontSize: '16px',
        color: '#fff',
        textAlign: 'center',
        marginBottom: '20px',
        fontFamily: 'Poppins',
        fontWeight: 'normal',
    };

    const FormStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginTop: '20px',
        backgroundColor: '#ffffff',
        opacity: '0.75',
        padding: '2rem',
        borderRadius: '10px',
    };

    return (
        <>
        <div id="get-in-touch" className="contact-form-container" style={contactFormStyle}>
            <div className="contact-form-content" style={contentStyle}>
                <h2 style={HeaderText}>Get in Touch with Us</h2>
                <p style={paragraphStyle}>We'd love to hear from you. Please fill out the form or check out our contact information.</p>

                <div className="contact-form" style={FormStyle}>
                    <form ref={form} onSubmit={sendEmail}>
                        <TextField 
                            label="Name"
                            name="name" 
                            variant="outlined"
                            margin="normal" fullWidth required 
                            placeholder="John Doe"/>

                        <TextField 
                            label="Email" 
                            name="email" 
                            variant="outlined" 
                            margin="normal" 
                            fullWidth required 
                            placeholder="sample@gmail.com"/>

                        <TextField 
                            label="Subject"
                             name="subject" 
                             variant="outlined"
                              margin="normal" 
                              fullWidth required />

                        <TextField 
                            label="Message" 
                            name="message" 
                            variant="outlined" 
                            multiline rows={4} 
                            margin="normal" 
                            fullWidth required />

                        <Button 
                            type="submit" 
                            variant="contained" 
                            style={{ backgroundColor: '#e63946', color: 'white', marginTop: '20px' }}>
                            Send
                        </Button>
                    </form>
                </div>

            </div>
        </div>
        </>
    );
}

export default ContactForm;