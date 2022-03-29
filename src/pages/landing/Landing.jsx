import './landing.css'
import logo from '../../assets/the_crow.svg'
import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div className='landing__container'>
      <div className='landing__image_container'>
        <img src={logo} alt="Our logo perched on top of Crowate" className='crowgo' />
      </div>
      <div className="landing__text_container">
        <h1 className='landing__text landing__text-title'>Crowate</h1>
        <h2 className='landing__text landing__text-subtitle'>A platform by artists, for artists</h2>
        <Link className='landing__text landing__text-button' to='/signup'>Sign up!</Link>
      </div>
    </div>
  )
}

export default Landing;