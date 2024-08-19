import React, { useState } from "react";
import './LoginSignup.css'
import name from '../Assets/name.svg'
import email from '../Assets/email.webp'
import password from '../Assets/password.png'
import { register, login } from '../../api';

const LoginSignup = () => {

    const [action, setAction] = useState("Login");
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        try {
            if (action === "Sign Up") {
                await register(nameInput, emailInput, passwordInput);
                setMessage('Registration successful');
            } else {
                const response = await login(emailInput, passwordInput);
                localStorage.setItem('token', response.data.token);
                setMessage('Login successful');
            }
        } catch (err) {
            setMessage('Error occurred');
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Sign Up" && (
                    <div className='input'>
                        <img src={name} alt="Name-Icon" />
                        <input
                            type="text"
                            placeholder="Name"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                    </div>
                )}
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
            {/* <button onClick={handleSubmit}>{action === "Login" ? "Login" : "Sign Up"}</button> */}
            {/* {message && <p>{message}</p>} */}
            <div className="submit-container">
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => {
                            setAction("Sign Up");
                            setMessage('');
                            handleSubmit();
                    }}>Sign Up
                </div>
                <div 
                    className={action === "Sign Up" ? "submit gray" : "submit"} 
                    onClick={() => {
                        setAction("Login");
                        setMessage('');
                        handleSubmit();
                    }}>Login
                </div>
            </div>
            {message && <p>{message}</p>}
        </div>
    );
}

export default LoginSignup