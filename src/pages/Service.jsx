import React, { useState, useEffect } from 'react';

const Service = () => {
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

    const serviceBackground = {
        backgroundColor: '#212121',
        minHeight: '100vh',
        width: '100%',
        padding: '20px',
        color: 'white',
        fontFamily: 'Poppins, sans-serif'
    };

    const contentContainerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    };

    const headerText = {
        fontSize: isMobile ? '28px' : '40px',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: isMobile ? '30px' : '60px',
    };

    const columnsContainerStyle = {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isMobile ? '40px' : isTablet ? '20px' : '30px'
    };

    const columnStyle = {
        flex: 1,
        width: isMobile ? '100%' : 'auto',
        borderRadius: '10px',
        padding: '10px',
    };

    const sectionTitleStyle = {
        fontSize: isMobile ? '22px' : '24px',
        fontWeight: 'bold',
        marginBottom: isMobile ? '20px' : '30px',
        textAlign: 'center'
    };

    const categoryStyle = {
        marginBottom: isMobile ? '20px' : '30px',
        backgroundColor: '#2c2c2c',
        padding: '20px',
        borderRadius: '10px'
    };

    const categoryTitleStyle = {
        fontSize: isMobile ? '16px' : '18px',
        fontWeight: 'bold',
        marginBottom: '10px'
    };

    const listItemStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: '5px'
    };

    const labelStyle = {
        fontFamily: 'Quicksand',
        fontWeight: 'normal',
        fontSize: isMobile ? '14px' : '16px',
    };

    return (
        <div id='service' style={serviceBackground}>
            <div style={contentContainerStyle}>
                <h1 style={headerText}>JDSB Services</h1>

                <div style={columnsContainerStyle}>
                    {/* Left Column - Applicable Structures */}
                    <div style={columnStyle}>
                        <h2 style={sectionTitleStyle}>Applicable Structures:</h2>
                        
                        <div style={categoryStyle}>
                            <h3 style={categoryTitleStyle}>Buildings:</h3>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Residential</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Commercial</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Industrial</span>
                            </div>
                        </div>

                        <div style={categoryStyle}>
                            <h3 style={categoryTitleStyle}>Warehouse Storage:</h3>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Institutional</span>
                            </div>
                            <div style={{paddingLeft: '20px'}}>
                                <div style={{...labelStyle, marginBottom: '5px'}}>-Healthcare</div>
                                <div style={{...labelStyle, marginBottom: '5px'}}>-Offices</div>
                            </div>
                        </div>

                        <div style={categoryStyle}>
                            <h3 style={categoryTitleStyle}>Educational & Recreational:</h3>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>School</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Event Center</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Civil Center</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Church</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column - Only show separate column if not mobile */}
                    {!isMobile && (
                        <div style={columnStyle}>
                            <div style={{...categoryStyle, marginTop: '53px'}}>
                                <h3 style={categoryTitleStyle}>Agricultural:</h3>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Poultry & Piggery</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Grain Mill</span>
                                </div>
                            </div>

                            <div style={categoryStyle}>
                                <h3 style={categoryTitleStyle}>Horizontal Construction:</h3>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Roads</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Bridges</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Drainage</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Slope Protection</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Other similar projects</span>
                                </div>
                            </div>

                            <div style={categoryStyle}>
                                <h3 style={categoryTitleStyle}>Others:</h3>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Garage</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Swimming Pool</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Fence</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Water Distribution System</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add these columns in the first column if mobile */}
                    {isMobile && (
                        <>
                            <div style={categoryStyle}>
                                <h3 style={categoryTitleStyle}>Agricultural:</h3>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Poultry & Piggery</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Grain Mill</span>
                                </div>
                            </div>

                            <div style={categoryStyle}>
                                <h3 style={categoryTitleStyle}>Horizontal Construction:</h3>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Roads</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Bridges</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Drainage</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Slope Protection</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Other similar projects</span>
                                </div>
                            </div>

                            <div style={categoryStyle}>
                                <h3 style={categoryTitleStyle}>Others:</h3>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Garage</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Swimming Pool</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Fence</span>
                                </div>
                                <div style={listItemStyle}>
                                    <span style={labelStyle}>Water Distribution System</span>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Right Column - Services Offered */}
                    <div style={columnStyle}>
                        <h2 style={sectionTitleStyle}>Services Offered:</h2>

                        <div style={categoryStyle}>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Construction</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Renovation/<br/>Rehabilitation</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Extension</span>
                            </div>
                        </div>

                        <div style={categoryStyle}>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Retrofitting</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Repair & Maintenance</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Finishing Works</span>
                            </div>
                        </div>

                        <div style={categoryStyle}>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Building Completion</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Demolition</span>
                            </div>
                            <div style={listItemStyle}>
                                <span style={labelStyle}>Landscaping</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;