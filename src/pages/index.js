import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import Banner from '../Components/Banner/Banner'
import BrandList from '../Components/BrandList/BrandList'
import ContsctUs from '../Components/ContactUs/ContsctUs'
import Header from '../Components/Header/Header'
import ProductList from '../Components/ProductList/ProductList'
import Services from '../Components/Services/Services'
import { FbIcon, GplusIcon, InstaIcon, TwitterIcon } from '../Icons/Icons'
import ColoredLayout from '../layouts/ColoredLayout'
import MainLayout from '../layouts/MainLayout'
import PageBody from '../layouts/PageBody'
import '../styles/index.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function index() {
  return (
    <>
      <MainLayout />
      <div className="page-container">
        <Header />
        <Banner/>

        <PageBody>
          <AboutUs />
          <Services />

        </PageBody>
        <ColoredLayout>

          <div className='header'>Our Products</div>
          <h2 className='title'>Product Categories</h2>

          <ProductList />

          <div className='header'>Amity Building Materials</div>
          <h2 className='title'>Our Brands</h2>

          <BrandList />

        </ColoredLayout>

        <PageBody>

          <ContsctUs />

        </PageBody>

        <div className="footer">

          <div className="social-container">
            <div className="icon">
              <FbIcon />
            </div>

            <div className="icon">
              <TwitterIcon />
            </div>

            <div className="icon">
              <GplusIcon />
            </div>

            <div className="icon">
              <InstaIcon />
            </div>


          </div>
          <div className="copyright">© Copyright 2022 Amity</div>
          <div className="powerd-by">Designed by Ather Creation</div>
        </div>

      </div>
    </>
  )
}

export default index