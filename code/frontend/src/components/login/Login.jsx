import React, { useState } from 'react'
import './Login.css' // Import your CSS file
// import { userService } from '../../services/userServices'
import {  useNavigate } from 'react-router-dom';

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '', confPassword: '' })
  const navigate = useNavigate();
  // Handle changes in login form input fields
  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  // Handle login form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    navigate('/profile/fonctionalities');
  }

  // Handle register form submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault()
    console.log('Register Data:', registerData) // Send register data to backend or perform register logic
  }

  // Handle changes in register form input fields
  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    setRegisterData({
      ...registerData,
      [name]: value,
    })
  }

  const handleSignupClick = () => {
    const loginForm = document.querySelector('form.login')
    const loginText = document.querySelector('.header .login')
    loginForm.style.marginLeft = '-50%'
    loginText.style.marginLeft = '-50%'
  }

  const handleLoginClick = () => {
    const loginForm = document.querySelector('form.login')
    const loginText = document.querySelector('.header .login')
    loginForm.style.marginLeft = '0%'
    loginText.style.marginLeft = '0%'
    


  }

  const handleSignupLinkClick = (e) => {
    e.preventDefault()
    const signupBtn = document.querySelector('label.signup')
    signupBtn.click()
  }

  return (
    <div className="wrapper">
      <div className="header">
        <div className="title login">Login </div>
        <div className="title signup">Sign Up </div>
      </div>

      <div className="form-container">
        <div className="slider-controls">
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className="slide login" onClick={handleLoginClick}>
            Login
          </label>
          <label htmlFor="signup" className="slide signup" onClick={handleSignupClick}>
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>

        <div className="form-details">
          {/* login form  */}

          <form onSubmit={handleLoginSubmit} className="login">
            <pre></pre>
            <div className="field">
              <input type="email" name="email" value={loginData.email} onChange={handleLoginChange} placeholder="Email Address" required />
            </div>
            <div className="field">
              <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="/forgot_password">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Don't have an account{' '}
              <a href="/signup" onClick={handleSignupLinkClick}>
                Signup now
              </a>
            </div>
          </form>

          {/* signup */}

          <form onSubmit={handleRegisterSubmit} className="signup">
            <div className="field">
              <input type="text" name="username" value={registerData.username} onChange={handleRegisterChange} placeholder="Name" required />
            </div>
            <div className="field">
              <input type="email" name="email" value={registerData.email} onChange={handleRegisterChange} placeholder="Email Address" required />
            </div>
            <div className="field">
              <input style={{color: "gray"}} type="password" name="password" value={registerData.password} onChange={handleRegisterChange} placeholder="Password" required />
            </div>
            <div className="field">
              <input
                type="password"
                name="confPassword"
                value={registerData.confPassword}
                onChange={handleRegisterChange}
                placeholder="Confirm password"
                required
              />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
            <div className="signup-link">
              Already have an account?{' '}
              <a href="/signup" onClick={handleLoginClick}>
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
