
import axios from 'axios';
import React, { useState } from 'react';
import '../CSS/LoginPage.css'; //
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Services/axiosInstance';
type Props = {};

const LoginPage = (props: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
 const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
           const response = await axiosInstance.post('/Auth/login', {
                username,
                password,
            });
            if(response.data.token){
                setUsername('');
                setPassword('');
            }
            localStorage.setItem('token', response.data.token);
             navigate('/dashboard');
            // Redirect to the dashboard or home page
        } catch (error) {
            setErrorMessage('Invalid username or password');
             setTimeout(() => {
                navigate('/register'); // Redirect to the registration page after a delay
            }, 2000); // 2-second delay
        }
    };

    return (      
       
  <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"
          value={username} 
                        onChange={(e) => setUsername(e.target.value)}  required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"
           value={password} 
                        onChange={(e) => setPassword(e.target.value)}  required />

          <button type="submit">Login</button>
            {errorMessage && <p>{errorMessage}</p>}
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
    );
};

export default LoginPage;
