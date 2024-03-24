import React from 'react'
import logo from '../../assets/logo_4.png'

const Navbar = () => {
  return (
    <nav className="navbar-styled">
      <div className="logoContainer">
        <img src={logo} alt="logo" height="60" width="60" />
      </div>

      <span />
    </nav>
  )
}

export default Navbar
