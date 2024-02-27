import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Pros from './components/Pros';
import ShowCase from './components/ShowCase';
import Why from './components/Why';
import Features from './components/Features';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <ShowCase/>
    <Pros/>
    <Why/>
    <Features/>
    </div>
  );
}

export default App;
