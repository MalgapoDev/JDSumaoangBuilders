import React from 'react';

const Footer = () => {

    // SVG Icon Components
    const MapIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const MailIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const PhoneIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59531 1.99522 8.06632 2.16708 8.43717 2.48353C8.80802 2.79999 9.05426 3.23945 9.10999 3.72C9.21396 4.68007 9.41939 5.62273 9.71999 6.53C9.83624 6.88792 9.86078 7.27691 9.79139 7.65088C9.72201 8.02485 9.56068 8.37326 9.31999 8.66L8.08999 9.89C9.513 12.4135 11.5865 14.487 14.11 15.91L15.34 14.68C15.6267 14.4393 15.9751 14.278 16.3491 14.2086C16.7231 14.1392 17.1121 14.1638 17.47 14.28C18.3773 14.5806 19.3199 14.786 20.28 14.89C20.7658 14.9462 21.2094 15.1965 21.5265 15.5707C21.8437 15.9449 22.0122 16.4194 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );

    const footerStyle = {
        backgroundColor: '#212121',
        color: 'white',
        padding: '0',
        width: '100%',
    };

    const footerContentStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '40px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '40px',
        flexWrap: 'wrap',
    };

    const footerSectionStyle = {
        flex: '1',
        minWidth: '250px',
        marginBottom: '20px',
    };

    const footerHeadingStyle = {
        fontSize: '18px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        marginBottom: '15px',
        color: '#ecf0f1',
    };

    const footerTextStyle = {
        fontSize: '14px',
        fontFamily: 'Quicksand',
        lineHeight: '1.6',
        color: '#bdc3c7',
        margin: '0',
    };

    const footerListStyle = {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    };

    const footerListItemStyle = {
        fontSize: '14px',
        fontFamily: 'Quicksand',
        color: '#bdc3c7',
        marginBottom: '8px',
        paddingLeft: '0',
    };

    const footerContactStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '10px',
    };

    const footerContactTextStyle = {
        fontSize: '14px',
        fontFamily: 'Quicksand',
        color: '#bdc3c7',
    };

    const footerScheduleStyle = {
        fontSize: '14px',
        fontFamily: 'Quicksand',
        color: '#bdc3c7',
        margin: '5px 0',
    };

    const footerBottomStyle = {
        borderTop: '1px solid #34495e',
        backgroundColor: '#212121',
        padding: '20px',
        textAlign: 'center',
    };

    const footerCopyrightStyle = {
        fontSize: '12px',
        fontFamily: 'Quicksand',
        color: '#95a5a6',
        margin: '0',
    };

    return (
        <>
        {/* Footer Section */}
            <footer style={footerStyle}>
                <div style={footerContentStyle}>
                    <div className='footer-section' style={footerSectionStyle}>
                        <h4 className='footer-heading' style={footerHeadingStyle}>JD Sumaoang Builders</h4>
                        <p className='footer-text' style={footerTextStyle}>
                            Your trusted partner in construction. Building dreams with quality, 
                            reliability, and excellence since our establishment.
                        </p>
                    </div>
                    
                    <div className='footer-section' style={footerSectionStyle}>
                        <h4 className='footer-heading' style={footerHeadingStyle}>Our Services</h4>
                        <ul style={footerListStyle}>
                            <li className='footer-text' style={footerListItemStyle}>Residential Construction</li>
                            <li className='footer-text' style={footerListItemStyle}>Commercial Building</li>
                            <li className='footer-text' style={footerListItemStyle}>Home Renovation</li>
                            <li className='footer-text' style={footerListItemStyle}>Interior Design</li>
                            <li className='footer-text' style={footerListItemStyle}>Project Management</li>
                        </ul>
                    </div>
                    
                    <div className='footer-section' style={footerSectionStyle}>
                        <h4 className='footer-heading' style={footerHeadingStyle}>Quick Contact</h4>
                        <div style={footerContactStyle}>
                            <MapIcon />
                            <span style={footerContactTextStyle}>Santa Ignacia, Tarlac City</span>
                        </div>
                        <div style={footerContactStyle}>
                            <PhoneIcon />
                            <span style={footerContactTextStyle}>0956 608 7639</span>
                        </div>
                        <div style={footerContactStyle}>
                            <MailIcon />
                            <span style={footerContactTextStyle}>jdsumaoangbuilders@gmail.com</span>
                        </div>
                    </div>
                    
                    <div className='footer-section' style={footerSectionStyle}>
                        <h4 className='footer-heading' style={footerHeadingStyle}>Build it thru:</h4>
                        <div className='footer-text' style={footerTextStyle}>
                            <p className='footer-text' style={footerScheduleStyle}>PAG - IBIG Loan</p>
                            <p className='footer-text' style={footerScheduleStyle}>Bank Loan</p>
                        </div>
                    </div>
                </div>
                
                <div style={footerBottomStyle}>
                    <p style={footerCopyrightStyle}>
                        © 2025 JD Sumaoang Builders. All rights reserved. | Licensed & Insured Construction Company
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;