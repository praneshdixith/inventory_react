import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file for styling

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username,
            password
        };

        try {
            // Simulate fetch request
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
        } catch (error) {
            console.error('Error:', error.message);
            setMessage('Login failed');
        }
    };

    return (
        <div className="fullscreen">
            <h1 className='Welcome'>WelCome to VishalTraders</h1>
            
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div className="message" id="message">{message}</div>
        </div>
        </div>
    );
}

export default LoginForm;
