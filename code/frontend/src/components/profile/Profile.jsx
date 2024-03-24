import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import GridFonctionalities from './GridFonctionalities'
import { Routes, Route, Outlet } from 'react-router-dom'
import TitleUser from './TitleUser'

const Profile = () => {
  return (
    <div className="home-styled">
      <div className="content">
        <div>
          <Navbar />
          <TitleUser />
        </div>
        <div className="outletContainer">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Profile
