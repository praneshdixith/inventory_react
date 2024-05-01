import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file for styling

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const userData = {
            username,
            password
        };

        try {
            // Simulate fetch request for registration
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error('Error:', error.message);
            setMessage('Registration failed');
        }
    };

    return (
        <div className="fullscreen">
            <h1 className='Welcome'>WelCome to VishalTraders</h1>
            
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={handleRegisterSubmit}>
                    <div className="input-group">
                        <label htmlFor="new-username">Username:</label>
                        <input
                            type="text"
                            id="new-username"
                            name="new-username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="new-password">New Password:</label>
                        <input
                            type="password"
                            id="new-password"
                            name="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
                <div className="message" id="message">{message}</div>
            </div>
        </div>
    );
}

export default Register;
