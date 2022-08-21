import React from 'react'

import Slider from 'react-slick';
import { EarthIcon } from '../../Icons/Icons';

function MobileSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:false,
        nextArrow:false
    };

    return (
        <div className='mobile-slider-container'>
            <Slider {...settings}>
                <div className='slider-item'>
                   
                        <div className="icon"><EarthIcon /></div>
                        <span className="title">Amity Building Materials</span>
                        <span className="caption">STAINLESS STEEL, GENERAL ITEMS</span>
                   
                </div>
                <div className='slider-item'>
                    <div className="icon"><EarthIcon /></div>
                    <span className="title">Amity Building Materials</span>
                    <span className="caption">WELDING EQUIPMENTS, POWER TOOLS, HAND TOOLS</span>
                </div>
                <div className='slider-item'>
                    <div className="icon"><EarthIcon /></div>
                    <span className="title">Amity Building Materials</span>
                    <span className="caption">ELECTRICALS, PLUMBING & SANITARY, CARPENTARY</span>
                </div>

            </Slider>
        </div>
    )
}

export default MobileSlider