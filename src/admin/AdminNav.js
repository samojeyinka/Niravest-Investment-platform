import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaRegMoneyBillAlt, FaUsers, FaUser, FaSignOutAlt, FaPlus } from 'react-icons/fa'
import { logo } from '../assets/assets';
import axios from 'axios';

const AdminNav = () => {

  const adminEmail = Cookies.get("adminEmail");




  const handleLogOut = () => {
    Cookies.remove('adminToken');
    Cookies.remove('adminEmail');
  }





  return (
    <>
      <nav className='user-nav'>
        <div className='user-navbar'>
          <div className='user-navbar-top'>
            <img src={logo} className='logo_img' />
            <span className='logo_txt'>niravest[Admin]</span>
          </div>

          <ul className='user-navbar-menu-links'>

            <li>
              <NavLink to={"/admin/dashboard"}>
                <i className='umml-icon'>
                  <FaRegMoneyBillAlt />
                </i>
                <span>
                  Packages
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink to={"/admin/package/new"}>
                <i className='umml-icon'>
                  <FaPlus />
                </i>
                <span>
                  New Package
                </span>
              </NavLink>
            </li>

            <li>
              <NavLink to={"/admin/users"}>
                <i className='umml-icon'>
                  <FaUsers />
                </i>
                <span>
                  Users
                </span>
              </NavLink>
            </li>

            <li>
              <Link>
                <i className='umml-icon'>
                  <FaUser />
                </i>
                <span>
                  {adminEmail}
                </span>
              </Link>
            </li>
            <li>
              <Link to={'/'} onClick={handleLogOut}>
                <i className='umml-icon'>
                  <FaSignOutAlt />
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
            <NavLink to={"/admin/dashboard"}>
              <i className='umml-icon'>
                <FaRegMoneyBillAlt />
              </i>
              <span>
                Packages
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/admin/package/new"}>
              <i className='umml-icon'>
                <FaPlus />
              </i>
              <span>
                New Package
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink to={"/admin/users"}>
              <i className='umml-icon'>
                <FaUsers />
              </i>
              <span>
                Users
              </span>
            </NavLink>
          </li>

          <li className='u-email'>
            <Link>
              <i className='umml-icon'>
                <FaUser />
              </i>
              <span>
                {adminEmail}
              </span>
            </Link>
          </li>
          <li className='u-logout'>
            <Link to={'/home'} onClick={handleLogOut}>
              <i className='umml-icon'>
                <FaSignOutAlt />
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


export default AdminNav