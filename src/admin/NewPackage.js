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

const NewPackage = () => {
  const adminLoggedIn = Cookies.get("adminToken");
  return (
    <div>

      {adminLoggedIn ? 
      
        <section className='user'>
          <AdminNav/>
          <main className='user-main'>
              <div className='pkg-form-con'>
                <form>
                  <div>
                    <label>Package name</label>
                    <input type='text' placeholder='Enter investment package name...' required/>
                  </div>
                  <div>
                    <label>Price</label>
                    <input type='number' placeholder='Enter investment package price...' required/>
                  </div>
                  <div>
                    <label>Total profit</label>
                    <input type='number' placeholder='Enter investment total profit...' required/>
                  </div>
                  <div>
                    <label>Daily profit</label>
                    <input type='number' placeholder='Enter investment daily profits...' required/>
                  </div>
                  <div>
                    <label>Package duration</label>
                    <input type='text' placeholder='Enter investment package duration...' required/>
                  </div>
                  <div className='check-active'>
                    <label>Active</label>
                    <input type='checkbox'/>
                  </div>
                  <div>
                    <button>Create</button>
                  </div>
                </form>
              </div>
          </main>
        </section>
        :
        
        <div>sorry</div>

      }

    </div>
  )
}

export default NewPackage