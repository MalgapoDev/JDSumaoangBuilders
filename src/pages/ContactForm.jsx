import React, { useRef, useState } from "react";
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef();

    // Snackbar alert state
    const [alert, setAlert] = useState({ open: false, severity: "", message: "" });

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
            setAlert({
                open: true,
                severity: "success",
                message: "Your message has been sent successfully!"
            });
            form.current.reset();
        }, (error) => {
            console.error("FAILED...", error.text);
            setAlert({
                open: true,
                severity: "error",
                message: "There was a problem sending your message. Please try again."
            });
        });
    };

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') return;
        setAlert({ ...alert, open: false });
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
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Poppins',
        marginTop: '30px',
    };

    const contentStyle = {
        textAlign: 'center',
        color: 'white',
        padding: '3rem',
        maxWidth: '800px',
        zIndex: 1,
    };

    const paragraphStyle = {
        fontSize: '14px',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        marginTop: '20px',
    };

    const FormStyle = {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        backgroundColor: '#ffffff',
        opacity: '0.75',
        padding: '0.75rem',
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
                            <TextField label="Name" name="name" variant="outlined" margin="normal" fullWidth required placeholder="John Doe"/>
                            <TextField label="Email" name="email" variant="outlined" margin="normal" fullWidth required placeholder="sample@gmail.com"/>
                            <TextField label="Subject" name="subject" variant="outlined" margin="normal" fullWidth required />
                            <TextField label="Message" name="message" variant="outlined" multiline rows={3} margin="normal" fullWidth required />

                            <Button 
                                type="submit" 
                                variant="contained"
                                endIcon={<SendIcon />}
                                fullWidth
                                style={{ backgroundColor: '#C75B7A', color: 'white', marginTop: '20px' }}
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Snackbar Notification */}
            <Snackbar 
                open={alert.open} 
                autoHideDuration={4000} 
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default ContactForm;
