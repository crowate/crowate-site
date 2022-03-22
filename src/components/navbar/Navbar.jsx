import React from 'react';
import { useNavigate } from 'react-router-dom';
import Crow from '../../assets/the_crow-light.svg';
import { useAuth } from '../../contexts/AuthContext';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = () => {
  const navigate = useNavigate()
  const { currentUser, logout } = useAuth()

  async function handleLogout() {
    const { err } = await logout()
    navigate('/login', {replace: true})
  }

  return (
    <>
      <Nav>
        <NavLink to="/home">
          <h1>Crowate</h1>
        </NavLink>
        <NavMenu>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          {
            !currentUser &&
            <>
              <NavLink to="/signup" activeStyle>
                Sign Up
              </NavLink>
              <NavBtnLink to='/login'>Log In</NavBtnLink>
            </>
          }
        </NavMenu>
      </Nav >
    </>
  )
}

export default Navbar;