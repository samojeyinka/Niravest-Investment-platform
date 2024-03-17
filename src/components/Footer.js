import React,{useState,useEffect} from 'react';
import '../stylesheets/Footer.css';
import { logo } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaTwitter, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import axios from 'axios';

//The footer section

const Footer = () => {

  const [packages, setPackages] = useState([]);

useEffect(() => {
  const showPackages = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/package-list`);
  
        const packages = response.data
        setPackages(packages);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    showPackages();
},[])

  return (
    <section className='footer-sec'>
      <div className='footer-con'>
        <div className='footer-left'>
          <Link to='/'>
            <div className='f-logo-flex'>
              <img src={logo} className='f-logo-img' />
              <span className='f-logo-text text-white'>nairavest</span>
            </div>
          </Link>

          <h2 className= 'text-white'>Let's invest! 🤙</h2>
          <p>+2349131710995</p>
          <p>niravestdummy@gain.com</p>
          <p>Osogbo,Osun State.Nigeria</p>
        </div>

        <div className='footer-middle'>
          <div className='products'>
            <h5 className='text-whit'e>Products</h5>
            <ul>
            {packages.map((pkg) => (
              <li><Link to='/' className='text-white'>{pkg.name}</Link> </li>
              ))}
            </ul>
          </div>

          <div className='services'>
            <h5 className='text-white'>Services</h5>
            <ul>
              <li><Link to='/' className='text-white'>Buy Package</Link> </li>
              <li><Link to='/' className='text-white'>Profits</Link> </li>
              <li><Link to='/' className='text-white'>Withdrawal Fee</Link> </li>
              <li><Link to='/' className='text-white'>Affiliate Program</Link> </li>
              <li><Link to='/' className='text-white'>Referral Program</Link> </li>
              <li><Link to='/'  className='text-white'>Flutterwave</Link> </li>

            </ul>
          </div>


        </div>

        <div className='footer-right'>
          <h2 className='text-white'>Newsletters</h2>
          <p>Subscribe Our Newsletter
            To Get More Verified Investment News & Updates.</p>
          <form className='f-form'>
            <input type='text' placeholder='Enter Your Email' />
            <button type='submit'>Submit</button>
          </form>
          {/* The footer icon links that direct to my personal profile on social medias,meet me there */}
          <div className='f-links'>
            <a href="https://github.com/samojeyinka" target='_blank'><FaGithub className='text-white f_social_icon' /></a>
            <a href="https://linkedin.com/in/ojeyinka-samuel-02406125a" target='_blank' className='f_social_icon'><FaLinkedin className='text-white f_social_icon'/></a>
            <a href="https://wa.me/2348122624063" target='_blank' className='f_social_icon'><FaWhatsapp className='text-white f_social_icon' /></a>
            <a href="https://twitter.com/sam_ojeyinka" target='_blank' className='f_social_icon'><FaTwitter className='text-white f_social_icon'/></a>

          </div>


        </div>
      </div>
      <p className='copyRight text-white'>©2024 nairavest.com All Rights Reserved. Terms Of Service | Privacy Terms</p>
      <p className='copyRight text-white'>Developed by : Sam Ojeyinka | Fullstack Developer</p>
    </section>
  )
}

export default Footer