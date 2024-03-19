import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './routes/Home.js';
import { useState,useEffect } from 'react';
import Signup from './routes/Signup.js';
import Login from './routes/Login.js';
import Overview from './routes/Overview.js';
import Cookies from 'js-cookie';
import Payment from './routes/Payment.js'
import Packages from './routes/Packages.js';
import Account from './routes/Account.js';
import PaystackDepositForm from './components/PayForm.js';
import Package from './routes/Package.js';
import Services from './routes/Services.js';
import AdminLogin from './admin/Login.js';
import Dashboard from './admin/Dashboard.js';
import Users from './admin/Users.js';
import EditPackage from './admin/EditPackage.js';
import NewPackage from './admin/NewPackage.js';
function App() {

  return (
    
    <div className="App">
      <Header />
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup'  element={<Signup />} />
        <Route path='/signin'  element={<Login />} />
        <Route path='/overview'  element={<Overview />} />
        <Route path='/payment'  element={<Payment />} />
        <Route path='/Packages'  element={<Packages />} />
        <Route path='/account'  element={<Account />} />
        <Route path='/package'  element={<Package />} />
        <Route path='/services'  element={<Services/>} />
       {/* Admin routes */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/dashboard' element={<Dashboard/>} />
        <Route path='/admin/users' element={<Users/>} />
        <Route path='/admin/package/edit' element={<EditPackage/>} />
        <Route path='/admin/package/new' element={<NewPackage/>} />
      </Routes>
    </div>
  );
}

export default App;
