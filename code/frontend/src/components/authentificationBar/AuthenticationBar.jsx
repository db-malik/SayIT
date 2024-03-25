import React, {  memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { getToken } from "utils/getToken"



const AuthenticationBar = () => {
  const navigate = useNavigate();
  
  const token = getToken()

  
  const signInBtn = () => {
    if (token) {
      navigate('/profile')
    } else {
      navigate('/signin')
    }
  }

  return (
    <>
      <p>Sign in</p>
      <button onClick={signInBtn} type="button">
        Sign up
      </button>
    </>
  )
}

export default memo(AuthenticationBar)