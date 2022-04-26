import { Navbar, UploadForm, Modal, UpdateProfile, Gallery } from "../../components"
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import './profile.css';
import { Button } from 'react-bootstrap';
import supabase from '../../supabase';


const Profile = () => {
  const { logout, currentUser } = useAuth()
  const { user_metadata } = currentUser

  const navigate = useNavigate()
  const { username } = useParams();

  const [user, setUser] = useState()
  const [postModalDisplay, setPostModalDisplay] = useState(false)
  const [profileModalDisplay, setProfileModalDisplay] = useState(false)

  async function handleLogout() {
    const { err } = await logout()

    if (err) console.error(err)

    navigate("/login", { replace: true })
  }

  function handleModalToggle() {
    setPostModalDisplay(!postModalDisplay)
  }

  function handleSettingsToggle() {
    setProfileModalDisplay(!profileModalDisplay)
  }

  useEffect(() => {
    async function getUserData(usr) {
      try {
        const { data, error } = await supabase
          .from('Profile Data')
          .select('*')
          .eq('Username', usr)

        if (error) {
          throw (error)
        }
        setUser(data)

      } catch (e) {
        console.log(e)
      }

    }

    getUserData(username)
    return () => {
      setPostModalDisplay(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (user) {
    return (
      <>
        <Navbar />
        <div className='profile'>
          
          <header className='profile__header'>
            <img className='profile__header-image' src={(user) ? user[0].Profile_Banner : ""} alt='user uploaded banner' />
            <div className='profile__info'>
            <div className="profile__picture_container">
                <img className='profile__picture' src={(user) ? user[0].Profile_Picture : ""} alt="Users profile icon"></img>
            </div>
                
              <div className='profile__info-text'>
                <h1 id='profile__name'>{(user) ? user[0].Username : "loading..."}</h1>
                <p className='profile__bio'>
                  This is a bio!
                </p>
              </div>
            </div>
            {(user[0].Username === user_metadata.username) && <button className="form__button profile__button" onClick={handleSettingsToggle}>Update Profile</button>}
            {profileModalDisplay &&
              <Modal toggle={handleSettingsToggle} >
                <UpdateProfile />
              </Modal>
            }
          </header>

          <div className='profile__main'>
            {(user[0].Username === user_metadata.username) && <button className="form__button profile__button" onClick={handleModalToggle}>Upload Post!</button>}
            {postModalDisplay &&
              <Modal toggle={handleModalToggle} >
                <UploadForm></UploadForm>
              </Modal>
            }
            <Gallery user_id={currentUser.id} />
          </div>
        </div>
      </>
    );
  } else {
    return (
      // Loading animation here soon :)
      <h1>LOADING!!!!</h1>
    )
  }
}

export default Profile