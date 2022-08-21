import React from 'react'

function Services() {
    let dummyImage = "http://amitytradingllc.com/wp-content/uploads/2022/05/New-Project-55.png"
    return (
        <>

            <div className='about-us-container' style={{ flexDirection: "row-reverse" }}>

                <div className="right-container">
                    <span className="header">Our Services</span>
                    <span className="title">About AMITY BUILDING MATERIALS</span>
                    <p className="details">
                        Welcome to AMITY BUILDING MATERIALS. We specializes in sale of building materials,
                        construction machinery and equipment's. Amity Building Materials is today known for
                        premium quality with service and customer relationship. Our team of dedicated employees
                        are constantly working to provide our valued customer with quality products and services
                        that enable them to exercise the ultimate satisfaction.
                    </p>
                    <button className='main-button'>VIEW OUR PRODUCTS</button>
                </div>

                <div className="left-container">
                    <img src={dummyImage} alt="" />
                </div>

            </div>
        </>

    )
}

export default Services