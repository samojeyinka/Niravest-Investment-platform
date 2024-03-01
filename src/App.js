import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './routes/Home.js';
import SignUp from './routes/SignUp.js';
import SignIn from './routes/SignIn.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
