import React, {  memo } from 'react'
import { useHistory } from 'react-router-dom'
import { getToken } from "utils/getToken"



const AuthenticationBar = () => {
  const history = useHistory()
  
  const token = getToken()

  
  const signInBtn = () => {
    if (token) {
      history.push('/profile')
    } else {
      history.push('/signin')
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