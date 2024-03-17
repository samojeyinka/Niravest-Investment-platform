import React,{useEffect,useState} from 'react';
import Cookies from 'js-cookie';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import {FaHome,FaWallet,FaRegMoneyBillAlt,FaUser,FaSignOutAlt,FaHeart} from 'react-icons/fa'
import { logo } from '../assets/assets';
import axios from 'axios';
import '../stylesheets/user/Navbar.css'
const UserNav = () => {

  const [userEmail,setUserEmail] = useState("");
  const userId = Cookies.get('userId');

  const getUserInfo = async() => {
      try {
        const token  = Cookies.get('token');
        const response = await axios.get(`http://localhost:3000/users/${userId}/`,{
            headers: {
              Authorization: `${token}`
            
            }
        })
        setUserEmail(response.data.email);
      } catch (error) {
        console.log(error);
      }
  }
    const handleLogOut = () => {
      Cookies.remove('token');
    }


    useEffect(() => {
      getUserInfo();
    },[])

    
  return (
    <>
     <nav className='user-nav'>
            <div className='user-navbar'>
            <div className='user-navbar-top'>
                    <img src={logo} className='logo_img' />
                    <span className='logo_txt'>niravest</span>
                </div>

                <ul className='user-navbar-menu-links'>
                    <li>
                      <NavLink to={"/overview"}>
                      <i className='umml-icon'>
                        <FaHome/>
                      </i>
                      <span>
                        Overview
                      </span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/payment"}>
                      <i className='umml-icon'>
                        <FaWallet/>
                      </i>
                      <span>
                        Payment
                      </span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/packages"}>
                      <i className='umml-icon'>
                        <FaRegMoneyBillAlt/>
                      </i>
                      <span>
                        Packages
                      </span>
                      </NavLink>
                    </li>

                    <li className='u-email'>
                      <Link>
                      <i className='umml-icon'>
                        <FaUser/>
                      </i>
                      <span>
                        {userEmail}
                      </span>
                      </Link>
                    </li>
                    <li>
                      <Link to={'/'} onClick={handleLogOut}>
                      <i className='umml-icon'>
                        <FaSignOutAlt/>
                      </i>
                      <span>
                        Logout
                      </span>
                      </Link>
                    </li>
                </ul>
              </div>
          </nav>
          {/* Mobile nav */}
          
                <div className="mobile-user-nav">
                <div className='user-navbar-top'>
                    <img src={logo} className='logo_img' />
                    <span className='logo_txt'>niravest</span>
                </div>
                <ul className='user-navbar-menu-links-mobile'>
                    <li>
                      <NavLink to={"/overview"}>
                      <i className='umml-icon'>
                        <FaHome/>
                      </i>
                      <span>
                        Overview
                      </span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/payment"}>
                      <i className='umml-icon'>
                        <FaWallet/>
                      </i>
                      <span>
                        Payment
                      </span>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink to={"/packages"}>
                      <i className='umml-icon'>
                        <FaRegMoneyBillAlt/>
                      </i>
                      <span>
                        Packages
                      </span>
                      </NavLink>
                    </li>

                    <li className='u-email'>
                      <Link>
                      <i className='umml-icon'>
                        <FaUser/>
                      </i>
                      <span>
                        {userEmail}
                      </span>
                      </Link>
                    </li>
                    <li className='u-logout'>
                      <Link to={'/'} onClick={handleLogOut}>
                      <i className='umml-icon'>
                        <FaSignOutAlt/>
                      </i>
                      <span>
                        Logout
                      </span>
                      </Link>
                    </li>
                </ul>
                </div>

        </>  
          
  )
  }


export default UserNav