import React from 'react'

function ContsctUs() {
    return (
        <div className='contact-us-container'>
            <div className="header">Lets Get In Touch</div>
            <div className="title">Contact Us</div>

            <div className="contact-body">

                <div className="left-container">

                    <div className="left-grid">

                        <div className="contact-item">
                            <div className="contact-item-title">Our Address</div>
                            <div className="contact-item-content">AMITY TRADING L.L.C, sanayya, Salalah 211, Oman</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-title">Our Phone</div>
                            <div className="contact-item-content">+968 97124125, +968 99081467</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-title">Our Email</div>
                            <div className="contact-item-content">amitytradingoman@gmail.com</div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-title">Our Support</div>
                            <div className="contact-item-content">Saturday to Thursday 8AM to 6PM</div>
                        </div>

                    </div>

                </div>
                <div className="right-container">
                    <div className="map-dummy">
                        <iframe id='map' className='map-container' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125531.57793071153!2d76.1532102903434!3d10.511548707385993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee15ed42d1bb%3A0x82e45aa016ca7db!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1647153610591!5m2!1sen!2sin" 
                        width="400" height="600" 
                        loading="lazy"></iframe>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContsctUs