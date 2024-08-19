import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './LoginSignup.css';
import email from '../Assets/email.webp';
import password from '../Assets/password.png';
import { login } from '../../api';

const Login = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await login(emailInput, passwordInput);
            localStorage.setItem('token', response.data.token);
            setMessage('Login successful');
        } catch (err) {
            setMessage('Error occurred');
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email} alt="Email-Icon"/>
                    <input
                        type="email"
                        placeholder="Email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <img src={password} alt="Password-Icon"/>
                    <input
                        type="password"
                        placeholder="Password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                </div>
            </div>
            <div className="link">
                New to To-Do? <Link to='/register'>Click here</Link> <span>to register</span>
            </div>
            <div className="submit" onClick={handleSubmit}>Login</div>
            <div className="link">
                <Link to='/todo'>Go straight to To-Do!</Link>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
