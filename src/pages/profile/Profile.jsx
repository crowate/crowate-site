import { render } from '@testing-library/react';
import { Navbar, Gallery, UploadForm } from "../../components"
import banner from '../../assets/banner.jpg';
import turtle from '../../assets/turtle.jpg';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import './profile.css';
import { Button } from 'react-bootstrap';
import supabase from '../../supabase';


const Profile = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const { username } = useParams();
  const [user, setUser] = useState('')

  async function handleLogout() {
    const { err } = await logout()
    navigate("/login", { replace: true })
  }


  async function getUserData(usr) {
    try {
      const { data, error } =  await supabase
      .from('Profile Data')
      .select('*')
      .eq('Username', usr)
      
      if (error) {
        throw(error)
      } 
      
      setUser(data)
      console.log(data)
      console.log(user)

    } catch (e) {
      console.log(e)
    }

  }

  useEffect(() => {
    getUserData(username)
  },[])

  return (
    <div className='profile'>
      <div className='profile__header-bar'>
        <Navbar />
      </div>
      <header className='profile__header'>
        <img className='profile__header-image' src={(user) ? user[0].Profile_Banner : ""} alt='user uploads image' />
        <div className='profile__info'>
          <div className='profile__frame'>
            <img className='profile__picture' src={(user) ? user[0].Profile_Picture : ""} alt="profile picture"></img>
          </div>
          <div className='profile__info-text'>
            <h3 id='profile__name'>{(user) ? user[0].Username : "loading..."}</h3>
            <h4 id='profile__occupation'>A student</h4>
            <p className='profile__bio'>
              This is a bio
            </p>
          </div>
        </div>
        <div className='profile__main'>
          <div className='profile__content'>
            <div className='gallery__container'>
              <Gallery />
            </div>
          </div>
        </div>
      </header>
      <div className='profile__main'>
        <UploadForm />
      </div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}



export default Profile