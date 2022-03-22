import { render } from '@testing-library/react';
import { Navbar, Gallery } from "../../components"
import banner from '../../assets/banner.jpg';
import turtle from '../../assets/turtle.jpg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import React, { Component, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import { Button } from 'react-bootstrap';


const Profile = () => {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError('')

    const {err} = await logout()
    navigate("/login", {replace: true})

  }

  return (
    <div className='profile'>
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
            <h3 id='profile__name'>{currentUser.user_metadata.username}</h3>
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
          <Gallery />
        </div>
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}



export default Profile