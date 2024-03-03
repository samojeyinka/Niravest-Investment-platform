import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home.js';
import { useState } from 'react';
import Account from './routes/Account.js';
import Login from './components/Login.js';


function App() {



  return (
    <div className="App">
  
      <Header />
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/account' element={<Account />} />

  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
