import React, { useState } from 'react';
import { contextProvider } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import './AddNewAddress.css'

const AddAddressForm = () => {
const {addNewAddress} = contextProvider();
const navigate = useNavigate();
const [newAddress,setNewAddress] = useState({
    address:"",
    district:"",
    state:"",
    pinCode:"",
    phoneNumber:""
});

const handleChange = (e) => {
    setNewAddress({...newAddress,
    [e.target.name]:e.target.value})
}

// const handleSubmit = (e) => {
//     e.preventdefault();
//     addNewAddress(newAddress)
// }

  return (
      <div className='addNewAddress-container'>
          <div className='form-cancel' onClick={() => navigate("/products")}>x</div>
          <form method='POST' action="/products" onSubmit={e => {
              e.preventDefault();
              addNewAddress(newAddress);
              navigate("/products");
          }}>
              <input className='new-address' name='address' onChange={handleChange} />
              <input className='new-state' name='state' onChange={handleChange} />
              <input className='new-district' name='district' onChange={handleChange} />
              <input className='new-pinCode' name='pinCode' onChange={handleChange} />
              <input className='new-phoneNumber' name='phoneNumber' onChange={handleChange} />
              <button type='Submit'>Add</button>
          </form>
      </div>
  )
}

export default AddAddressForm
