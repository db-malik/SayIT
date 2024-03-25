import React, { useState, memo } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '../../assets/logo_4.png'

import './navbar.css'
import { AuthenticationBar } from "components"

const Menu = () => {
  return (
    <>
      <p className="hover-underline-animation">
        <a href="#home">Home</a>
      </p>
      <p className="hover-underline-animation">
        <a href="#SayIt">What is SayIt?</a>
      </p>
      <p className="hover-underline-animation">
        <a href="#Summariser">Transcript Summarisation</a>
      </p>
      <p className="hover-underline-animation">
        <a href="#speechToText">Speech to Text</a>
      </p>
      <p className="hover-underline-animation">
        <a href="#speechToText">Download Extension</a>
      </p>
    </>
  )
}



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="nv11navbar">
      <div className="nv11navbarLinks">
        <div className="nv11navbarLinksLogo">
          <img src={logo} alt="logo" height="90" width="90" />
        </div>
        <div className="nv11navbarLinksContainer">
          <Menu />
        </div>
      </div>
      <div className="nv11navbarLinksSign">
        <AuthenticationBar />
      </div>
      <div className="nv11navbarMenu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu ? (
          <div className="scale-up-center nv11navbarMenuContainer">
            <div className="nv11navbarMenuLinks">
              <Menu />
            </div>
            <div className="nv11navbarMenuSigns">
              <AuthenticationBar />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default memo(Navbar)
