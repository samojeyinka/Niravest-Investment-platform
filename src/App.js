import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Pros from './components/Pros';
import ShowCase from './components/ShowCase';
import Why from './components/Why';
import Features from './components/Features';
import Attributes from './components/Attributes';
import Faq from './components/Faq';
import Reviews from './components/Reviews';
import Advert from './components/Advert';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <ShowCase/>
    <Pros/>
    <Why/>
    <Features/>
    <Attributes/>
    <Faq/>
    <Reviews/>
    <Advert/>
    <Download/>
    <Footer/>
    </div>
  );
}

export default App;
