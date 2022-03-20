import { render } from '@testing-library/react';
import {Tabs} from '../../components'
import Navbar from '../../components'
import Paper from '@material-ui/core/Paper';
import banner from '../../assets/banner.jpg';
import turtle from '../../assets/turtle.jpg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import {NavLink} from 'react-router-dom';
import Crow from '../../assets/the_crow.svg';
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
          {/* <NavLink to='/home' className='profile__header-link'>
            <a href='' className='header-link'>
              <img className='logo' source={Crow} alt="Crowate"/>
            </a>
          </NavLink> */} {/*This doesn't work*/}
        </div>
        <header className='profile__header'>
          <img className='profile__header-image' src={banner} alt='user uploads image' />
        </header>
        <div className='profile__main'>
          <section className='profile__content'>
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
          </section>
          <section className='tab__explorer'>
            <div className='tab__names'>
              {/* <Tabs/> */}
            </div>
            <div className='tab__content'>

            </div>
          </section>
        </div>

      </body>
    );
  }

}

export default Profile