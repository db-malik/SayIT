import React from 'react'
import {Routes} from 'react-router-dom'

import './page404.css'

const Page404 = () => {
  return (
    <Routes>
      <div className="pg44pageNotFound gradientText">
        <div className="pg44Number">404</div>
        <div className="pg44Oops">Oops..! 404 Page Not Found</div>
        <div className="pg44TextMsg">We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</div>
      </div>
    </Routes>
  )
}

export default Page404
