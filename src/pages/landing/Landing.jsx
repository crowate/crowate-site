import './landing.css'
import logo from '../../assets/the_crow.svg'
import React from 'react'


const Landing = () => {
  return (
    <div className='landing__container'>
      <div className='landing__image_container'>
        <img src={logo} alt="Our logo perched on top of Crowate" className='crowgo' />
      </div>
      <div className="lnading__text_container">
        <h1 className='landing__text landing__text-title'>Crowate</h1>
        <h2 className='landing__text landing__text-subtitle'>A platform by artists, for artists</h2>
        <a className='landing__text landing__text-button' href='https://docs.google.com/forms/d/e/1FAIpQLSdyUrLOQe4IbghI9A3f_0IJXhh4b8hb5u_9fF_3SYaSCf7AyQ/viewform'>Join our Mailing List</a>
      </div>
    </div>
  )
}

export default Landing;