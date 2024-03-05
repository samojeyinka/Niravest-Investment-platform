import React from 'react';
import Hero from '../components/Hero'
import Pros from '../components/Pros';
import ShowCase from '../components/ShowCase';
import Why from '../components/Why';
import Features from '../components/Features';
import Attributes from '../components/Attributes';
import Faq from '../components/Faq';
import Reviews from '../components/Reviews';
import Advert from '../components/Advert';
import Download from '../components/Download';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}

export default Home