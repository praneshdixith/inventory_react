import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

function LoginForm({ setLoginMessage }) {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username: loginUsername,
            password: loginPassword
        };

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            setMessage(data.message);
            // Update the message in the parent component
            setLoginMessage(data.message);
        } catch (error) {
            console.error('Error:', error.message);
            setMessage('Login failed');
            // Update the message in the parent component
            setLoginMessage('Login failed');
        }
    };

    return (
        <div className="fullscreen">
            <h1 className='Welcome'>Welcome to VishalTraders</h1>
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="input-group">
                        <label htmlFor="login-username">Username:</label>
                        <input
                            type="text"
                            id="login-username"
                            name="login-username"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="login-password">Password:</label>
                        <input
                            type="password"
                            id="login-password"
                            name="login-password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <Link to="/register">Register</Link>
                </form>
                <div className="message" id="login-message">{message}</div>
            </div>
        </div>
    );
}

export default LoginForm;
