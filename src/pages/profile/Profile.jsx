import { render } from '@testing-library/react';
import { Navbar, Gallery } from "../../components"
import banner from '../../assets/banner.jpg';
import turtle from '../../assets/turtle.jpg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import React, { Component, useState } from 'react';
import './profile.css';

class Profile extends Component {
  state = {
    selectedFile: null
  }

  render() {
    return (
      <body className='profile'>
        <div className='profile__header-bar'>
          <Navbar />
        </div>
        <header className='profile__header'>
          <img className='profile__header-image' src={banner} alt='user uploads image' />
          <div className='profile__info'>
            <div className='profile__frame'>
              <img className='profile__picture' src={turtle} alt="profile picture"></img>
            </div>
            <div className='profile__info-text'>
              <h3 id='profile__name'>Julian Garcia-Hernandez</h3>
              <h4 id='profile__occupation'>Computer Science Student</h4>
              <p className='profile__bio'>
                Julian is currently a student within CSCE 3444 wishing to complete his project.
              </p>
            </div>
            <div className='profile__socials'>
              <img className='profile__facebook' src={facebook} alt="redirects to user facebook page"></img>
              <img className='profile__twitter' src={twitter} alt="redirects to user twitter page"></img>
            </div>
          </div>
        </header>
        <div className='profile__main'>
          <div className='profile__content'>
            <div className='gallery__container'>
              <Gallery />
            </div>
          </div>
        </div>

      </body>
    );
  }

}

export default Profile