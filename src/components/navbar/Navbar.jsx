import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  return (
      <div className='navbar_container'>
      <Link to='/home' className='navbar__link'>Home</Link>
      <Link to='/profile' className='navbar__link'>Profile</Link>
      </div>
  )
}

export default Navbar;