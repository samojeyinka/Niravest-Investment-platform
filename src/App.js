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
import Watchlist  from './routes/Watchlist.js';
import PayForm from './components/PayForm.js';
import PaystackDepositForm from './components/PayForm.js';
function App() {

  return (
    
    <div className="App">
      <Header />
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup'  element={<Signup />} />
        <Route path='/signin'  element={<Login />} />
        <Route path='/overview'  element={<Overview />} />
        <Route path='/payment'  element={<Payment />} />
        <Route path='/watchlist'  element={<Watchlist  />} />
        <Route path='/Packages'  element={<Packages />} />
        <Route path='/account'  element={<Account />} />
        <Route path='/pay'  element={<PaystackDepositForm />} />
      </Routes>
    </div>
  );
}

export default App;
