import React from 'react';
import Crow from '../../assets/the_crow-light.svg';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
const Navbar = () => {
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
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav >
    </>
  )
}

export default Navbar;