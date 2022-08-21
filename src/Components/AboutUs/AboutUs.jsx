import React from 'react'

function AboutUs() {

    let dummyImage = "http://amitytradingllc.com/wp-content/uploads/2022/05/1.jpg"
    return (
        <>

            <div className='about-us-container'>

                <div className="left-container">
                    <span className="header">About Us</span>
                    <span className="title">AMITY BUILDING MATERIALS</span>
                    <p className="details">
                        Welcome to AMITY BUILDING MATERIALS. We specializes in sale of building materials,
                        construction machinery and equipment's. Amity Building Materials is today known for
                        premium quality with service and customer relationship. Our team of dedicated employees
                        are constantly working to provide our valued customer with quality products and services
                        that enable them to exercise the ultimate satisfaction.
                    </p>
                    <button className='main-button'>VIEW MORE</button>
                </div>

                <div className="right-container">
                    <img src={dummyImage} alt="" />
                </div>

            </div>
        </>

    )
}

export default AboutUs