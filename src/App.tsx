import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './Component/LoginPage';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Footer from './Component/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import RegisterPage from './Component/RegisterPage';
  import { BrowserRouter  } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;
