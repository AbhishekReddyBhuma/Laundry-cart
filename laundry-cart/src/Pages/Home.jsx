import React from 'react';
import SignIn from '../components/SignIn/SignIn';
import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='brand-name'>
                Laundry service
            </div>
            <div className='signIn-form'>
                <SignIn />
            </div>
        </div>
    )
}

export default Home
