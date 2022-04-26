import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/the_crow.svg'
import { useAuth } from '../../contexts/AuthContext';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import Searchbar from '../searchbar/Searchbar';
import Data from './data.json'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    const { err } = await logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className='navbar2'>
      <div className='logo-container'>
        <img src={logo} alt="" className="logo" />

      </div>
      <div className='searchbar'>
        <Searchbar placeholder={"Search Username"} data={Data} />
      </div>
      <div className='navlinks'>
        <ul>
          <NavLink
            to='/home'
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >Home</NavLink>
          <NavLink
            to={`/profile/${currentUser.user_metadata.username}`}
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >Profile</NavLink>
          {
            !currentUser &&
            <>
              <NavLink to="/signup" activeStyle>
                Sign Up
              </NavLink>
              <NavBtnLink to='/login'>Log In</NavBtnLink>
            </>
          }
        </ul>
      </div>

    </div>
  )
}

export default Navbar;