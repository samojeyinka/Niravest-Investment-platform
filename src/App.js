import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home.js';
import { useState,useEffect } from 'react';
import Signup from './routes/Signup.js';
import Login from './routes/Login.js';
import Overview from './routes/Overview.js';
import Cookies from 'js-cookie';
import Payment from './routes/Payment.js'
import Packages from './routes/Packages.js';
import Account from './routes/Account.js';
function App() {

  return (
    
    <div className="App">
      <Header />
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/signin' exact element={<Login />} />
        <Route path='/overview' exact element={<Overview />} />
        <Route path='/Payment' exact element={<Payment />} />
        <Route path='/Packages' exact element={<Packages />} />
        <Route path='/account' exact element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
