import React from 'react';
import './loginform.css';

const LoginForm = () => {
    return (
        <div className='cover'>
            <h1>Admin Login</h1>
            <input type="text" placeholder='Username'/>
            <input type="password" placeholder='Password'/>
            <div className='login-btn'>Login</div>
        </div>
        
    )
}

export default LoginForm