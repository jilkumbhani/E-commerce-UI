import React from 'react'
import './Css/Loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='loginSignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='enter name'/>
          <input type='email' placeholder='enter email'/>
          <input type='password' placeholder='enter password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, i agree to thr terms of use & privacy policy.</p>
        </div> 
      </div>
    </div>
  )
}

export default LoginSignup
