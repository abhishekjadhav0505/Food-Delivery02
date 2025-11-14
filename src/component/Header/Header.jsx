import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header' id='header'>
        <div className='header-contents'>
            <h2>Tasty Meals at Your Doorstep</h2>
            <p>Explore a menu featuring a delectable dishes crafted with the finest ingredients and culinary expertise . Our mission is to satisfy your cravings and elevate your dining</p>
            <button><a href='#explore-menu'>View Menu</a></button>

        </div>
      
    </div>
  )
}

export default Header