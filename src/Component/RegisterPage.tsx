import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/RegisterPage.css';   
import axiosInstance from '../Services/axiosInstance';

type Props = {}

const RegisterPage = (props: Props) => {
     const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

      const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/Auth/register', {
                email,
                password,
                firstName,
                lastName,
            });
            if (response.status === 200) {
                setEmail('');
                setPassword('');
                setFirstName('');
                setLastName('');
                navigate('/'); // Redirect to the login page after successful registration
            }
        } catch (error) {
            setErrorMessage('Registration failed. Please try again.');
        }
    };
    
  return (
    <div className='register-container-body' >
       
    <form className='register-container' onSubmit={handleSubmit}>
         <center><h1>Register</h1> </center>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
            />
            <button type="submit">Register</button>
            {errorMessage && <p>{errorMessage}</p>}
        </form>
        </div>
  )
}

export default RegisterPage