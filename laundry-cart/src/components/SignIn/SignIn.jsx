import React from 'react';
import './SignIn.css';
import padlock from './padlock.svg';

const SignIn = () => {
  return (     
      <form method='POST' action='"#'>
        <span className='signIn-title'>SIGN IN</span>
        <input type='text' placeholder='Mobile/Email' name='email'/>
        <input type='text' placeholder='Password' name='password' />
        <img src={padlock}/>
        <span className='forgot-password'>Forgot Password?</span>
        <button type='Submit' >Sign In</button>
      </form>
  )
}

export default SignIn
