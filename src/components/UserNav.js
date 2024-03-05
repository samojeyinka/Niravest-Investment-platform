import React from 'react';
import Cookies from 'js-cookie';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import {FaHome,FaWallet,FaRegMoneyBillAlt,FaUser,FaSignOutAlt,FaHeart} from 'react-icons/fa'
import { logo } from '../assets/assets';

const UserNav = () => {
    const handleLogOut = () => {
      Cookies.remove('token');
    }
    
  return (
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
                      <NavLink to={"/watchlist"}>
                      <i className='umml-icon'>
                        <FaHeart/>
                      </i>
                      <span>
                      Watchlist 
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

                    <li>
                      <NavLink to={"/account"}>
                      <i className='umml-icon'>
                        <FaUser/>
                      </i>
                      <span>
                        My account
                      </span>
                      </NavLink>
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
          
  )
  }


export default UserNav