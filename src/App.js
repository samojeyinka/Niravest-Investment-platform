import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home.js';
import { useState } from 'react';
import User from './components/User.js';


function App() {
  const [currUser, setCurrUser]=useState(null);

  return (
    <div className="App">
  
      <Header />
      <User currUser={currUser} setCurrUser={setCurrUser} />
      <Routes>
        <Route path='/' exact element={<Home />} />
  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
