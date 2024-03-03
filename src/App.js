import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home.js';
import { useState } from 'react';
import Signup from './routes/Signup.js';
import Login from './routes/Login.js';



function App() {



  return (
    <div className="App">
  
      <Header />
    
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/signin' exact element={<Login />} />
        

  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
