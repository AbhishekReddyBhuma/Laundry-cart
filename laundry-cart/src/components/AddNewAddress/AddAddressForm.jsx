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


  return (
      <div className='addNewAddress-container'>
          <div className='form-cancel' onClick={() => navigate("/products")}>x</div>
          <form method='POST' action="/products" onSubmit={e => {
              e.preventDefault();
              addNewAddress(newAddress);
              navigate("/products");
          }}>
              <input className='new-address' name='address' placeholder="Address" onChange={handleChange} />
              <input className='new-state' name='state' placeholder="State" onChange={handleChange} />
              <input className='new-district' name='district' placeholder="District" onChange={handleChange} />
              <input className='new-pinCode' name='pinCode' placeholder="Pin Code" onChange={handleChange} />
              <input className='new-phoneNumber' name='phoneNumber' placeholder="Phone Number" onChange={handleChange} />
              <input className='save-as' name='title'  placeholder="Save As" onChange={handleChange} />
              <button type='Submit'>Add</button>
          </form>
      </div>
  )
}

export default AddAddressForm
