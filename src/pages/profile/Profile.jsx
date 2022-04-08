import { render } from '@testing-library/react';
import { Navbar, Gallery, UploadForm, Modal } from "../../components"
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
  const [postModalDisplay, setPostModalDisplay] = useState(false)

  async function handleLogout() {
    const { err } = await logout()

    if (err) console.error(err)

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

  function handleModalToggle() {
    setPostModalDisplay(!postModalDisplay)
  }

  useEffect(() => {
    getUserData(username)
    return () => {
      setPostModalDisplay(false)
    }
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
        
      </header>
      <div className='profile__main'>
        <div className='profile__main'>
          <div className='profile__content'>
            <div className='gallery__container'>
              <Gallery />
            </div>
          </div>
        </div>
        <button onClick={handleModalToggle}>Upload Post!</button>
        {postModalDisplay &&
          <Modal toggle={handleModalToggle} >
            <UploadForm></UploadForm>
          </Modal>
        } 
      </div>
      
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}



export default Profile