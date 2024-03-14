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
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Home = () => {
  const isLoggedIn = Cookies.get("token");
  return (
    <>
    {isLoggedIn ? 
    <React.Fragment>
      <section className='logged_in_user_home'>
          <div>
            <h2>Go Back to your <Link to={"/overview"}>dashbaord</Link></h2>
          </div>
      </section>
    </React.Fragment>
    :

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
}
    </>
  )
}

export default Home