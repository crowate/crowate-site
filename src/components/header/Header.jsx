import './header.css'
import logo from '../../assets/the_crow.svg' 
import React from 'react'
import AuthenticationButton from '../auth0/AuthenticationButton'

const Header = () => {

  return (
    <div className='header__container'>
        <div className='header__image_container'>
          <img src={logo} alt="Our logo perched on top of Crowate" className='crowgo'/>
        </div>
        <div className="header__text_container">
          <h1 className='header__text header__text-title'>Crowate</h1>
          <h2 className='header__text header__text-subtitle'>A platform by artists, for artists</h2>
          <AuthenticationButton />
        </div>
    </div>
  )
}

export default Header