import React from 'react'
import { EarthIcon } from '../../Icons/Icons'
import MobileSlider from '../MobileSlider/MobileSlider'

function Banner() {

  let dummyImage = "http://amitytradingllc.com/wp-content/uploads/2022/06/work-tools-white-background-top-view.png"


  return (
    <div className='banner-container'>
      <div className="banner-images-container">
        <img src={dummyImage} alt="" />
        <div className="banner-overlay">
          AMITY BUILDING MATERIALS
        </div>
      </div>

      <div className="banner-slider-static">

        <div className="banner-slider-item">
          <div className="icon"><EarthIcon /></div>
          <span className="title">Amity Building Materials</span>
          <span className="caption">STAINLESS STEEL, GENERAL ITEMS</span>
        </div>

        <div className="banner-slider-item">
          <div className="icon"><EarthIcon /></div>
          <span className="title">Amity Building Materials</span>
          <span className="caption">WELDING EQUIPMENTS, POWER TOOLS, HAND TOOLS</span>
        </div>

        <div className="banner-slider-item">
          <div className="icon"><EarthIcon /></div>
          <span className="title">Amity Building Materials</span>
          <span className="caption">ELECTRICALS, PLUMBING & SANITARY, CARPENTARY</span>
        </div>

      </div>
      <MobileSlider />


    </div>
  )
}

export default Banner