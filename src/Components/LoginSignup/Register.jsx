import React, { useState } from "react";
import { Link } from 'react-router-dom'
import './LoginSignup.css';
import name from '../Assets/name.svg';
import email from '../Assets/email.webp';
import password from '../Assets/password.png';
import { register } from '../../api';

const Register = () => {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        try {
            await register(nameInput, emailInput, passwordInput);
            setMessage('Registration successful');
        } catch (err) {
            setMessage('Error occurred');
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={name} alt="Name-Icon" />
                    <input
                        type="text"
                        placeholder="Name"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </div>
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
                Already have an account? <Link to='/login'>Click here</Link> <span>to login</span>
            </div>
            <div className="submit" onClick={handleSubmit}>Sign Up</div>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Register;
