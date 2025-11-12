import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>FoodyGo</h1>
                <p>Getting food delivered at home is always a great idea. But the whole episode of scrolling endlessly, scanning restaurant ratings, hunting for coupon codes...now that’s not fun at all. So, here is the smarter way out with FoodyGo!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>EXPLORE</h2>
                <ul>
                    <li>Offers</li>
                    <li>Blogs</li>
                    <li>Refer & Earn</li>
                  
                </ul>
                </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 90909090</li>
                    <li>foodygo@gmail.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copyright'>@ 2025 Created by Abhishek. All rights reserved.</p>
       </div>
  )
}

export default Footer
