import React from 'react';
import './Register.css';

const states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana",
                "Himachal Pradesh","Jharkhand","Karnataka","Kerala","Maharashtra","Madhya Pradesh","Manipur",
                "Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Tripura",
                "Telangana","Uttar Pradesh","Uttarakhand","West Bengal","Andaman & Nicobar (UT)","Chandigarh (UT)",
                "Dadra & Nagar Haveli and Daman & Diu (UT)","Delhi (NCT)","Jammu & Kashmir (UT)","Ladakh (UT)",
                "Lakshadweep (UT)","Puducherry (UT)"]

const Register = () => {
  return (
      <div className='register-form'>
          <span className='register-title'>REGISTER</span>
          <form method='POST' action='"/users/register' onSubmit={e => {
              e.preventDefault();
          }}>
            <div className='form-grid'>
            <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
              <input type='text' placeholder='Phone' />
              <select type='text' placeholder='State'>
                {states.map(state => {
                   return <option value={state}>{state}</option>
                })}
              </select>
              <input type='text' placeholder='District' />
              <input type='text' placeholder='Address' />
              <input type='text' placeholder='Pincode' />
              <input type='password' placeholder='Password' />
              <input type='password' placeholder='Confirm Password' />
            </div>
              <div className='terms'>
                <input type='checkbox' id='terms' />
                <label for='terms'>I agree to Terms & Condition receiving marketing and promotional materials</label>
              </div>
              <button type='Submit'>Register</button>
          </form>
      </div>
  )
}

export default Register




