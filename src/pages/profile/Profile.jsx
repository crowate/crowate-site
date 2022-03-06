import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import axios from 'axios';
import './profile.css';

class Profile extends Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = (event) => { //this is a function
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  fileUploadHandler = () => {
    // axios.post('');
  }

  render() {
    return (
      <body className='profile' >
        <div className='profile__header-bar'>
          <img className='logo' alt="crowate"></img>
        </div>
        <header className='profile__header'>
          <input type='file' onChange={this.fileSelectedHandler} />
          <button onClick={this.fileUploadHandler}>Upload</button>
        </header>
        <section className='profile__content'>
          <div className='profile__info'>
            <img className='profile__picture' alt="profile picture"></img>
            <h1 className='profile__name'>Julian Garcia-Hernandez</h1>
            <h2 className='profile__occupation'>Computer Science Student</h2>
            <p className='profile__bio'>
              Julian is currently a student within CSCE 3444 wishing to complete his project.
            </p>
            <div className='profile__socials'>
              <img className='profile__twitter' alt="redirects to user twitter page"></img>
              <img className='profile__instagram' alt="redirects to user instagram page"></img>
            </div>
          </div>
          <div className='profile__gallery'>
            <img className='profile__gallery-image' alt="highlights comments, likes, and commission information"></img>
            <img className='profile__gallery-image' alt="highlights comments, likes, and commission information"></img>
            <img className='profile__gallery-image' alt="highlights additional informaiton"></img>
          </div>
        </section>
        <footer>

        </footer>
      </body>
    );
  }

}

export default Profile