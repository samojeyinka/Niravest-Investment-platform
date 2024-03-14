import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';
import { dmd } from '../assets/assets';
import { Link } from 'react-router-dom';
import '../stylesheets/Packages.css';
import { FaTrash, FaCashRegister, FaChartBar, FaChartArea, FaChartLine,FaStamp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import numberFormat from '../components/NumberFormatter';
import AdminNav from './AdminNav';

const Dashboard = () => {
  const adminLoggedIn = Cookies.get("adminToken");
  return (
    <div>

      {adminLoggedIn ? 
      
        <section className='user'>
          <AdminNav/>
          <main className='user-main'>

          </main>
        </section>
        :
        
        <div>sorry</div>

      }

    </div>
  )
}

export default Dashboard