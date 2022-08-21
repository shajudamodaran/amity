import { Button, Dropdown, Menu } from 'antd';
import React from 'react'
import { companyDetails } from '../../Constants/Data'
import { CallIcon, EmailIcon, OptionIcon } from '../../Icons/Icons'



function Header() {


    const menu = (

        <Menu
        style={{width:"250px"}}
        items={[
          {
            key: '1',
            label: (<div>Home</div>),
          },
          {
            key: '2',
            label: (<div>About Us</div>),
          },
          {
            key: '3',
            label: (<div>Services</div>),
          },
          {
            key: '4',
            label: (<div>Product</div>),
          },
          {
            key: '5',
            label: (<div>Categories</div>),
          },
          {
            key: '6',
            label: (<div>Brands</div>),
          },
          {
            key: '7',
            label: (<div>Contact Us</div>),
          },
        ]}
      />
    );

    return (
        <div className='header-container'>

            <h3>AMITY BUILDING MATERIALS</h3>



            <div className="right-container">
                <ul className='header-options'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>Categories</li>
                    <li>Brands</li>
                    <li>Contact Us</li>
                </ul>

                <div className="contact-container">
                    <div className="contact-item">
                        <CallIcon />
                        <span>{companyDetails.phone}</span>
                    </div>

                    <div className="contact-item">
                        <EmailIcon />
                        <span>{companyDetails.email}</span>
                    </div>
                </div>

                <Dropdown overlay={menu} trigger={['click']}>
                    <div className="hamburger">

                        <OptionIcon />

                    </div>
                </Dropdown>
            </div>




        </div>
    )
}

export default Header