import React from 'react'
import Sidebar from '../../components/profile/Sidebar'
import Profile from '../../components/profile/Profile'
import '../../styles/profileStyles/Global.scss'


const ProfilePage = () => {
    return (
        <div className='app-styled'>
            <Sidebar />
            <Profile />
        </div>
    )
}

export default ProfilePage