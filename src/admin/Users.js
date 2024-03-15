import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios, { all } from 'axios';
import { dmd } from '../assets/assets';
import { Link } from 'react-router-dom';
import '../stylesheets/Packages.css';
import { FaTrash, FaCashRegister, FaChartBar, FaChartArea, FaChartLine,FaStamp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import numberFormat from '../components/NumberFormatter';
import AdminNav from './AdminNav';

const Users = () => {
  const adminLoggedIn = Cookies.get("adminToken");
  const [users, setUsers] = useState([]);

  const showUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users`);
      const allUsers = response.data
      console.log(allUsers);

      setUsers(allUsers);
      
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    showUsers();
  },[])
  
  return (
    <div>

      {adminLoggedIn ? 
      
        <section className='user'>
          <AdminNav/>
          <main className='user-main'>
           {users.map(user => {
              <div key={user.id}>
                  <b>{user.email}</b>
              </div>
           })

           }
          </main>
        </section>
        :
        
        <div>sorry</div>

      }

    </div>
  )
}

export default Users