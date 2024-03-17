import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios, { all } from 'axios';
import { dmd } from '../assets/assets';
import { Link } from 'react-router-dom';
import '../stylesheets/Packages.css';
import { FaTrash, FaCashRegister, FaChartBar, FaChartArea, FaChartLine, FaStamp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import numberFormat from '../components/NumberFormatter';
import AdminNav from './AdminNav';
import FormatDate from '../utils/FormatDate'
import Unauthorized from '../utils/Unauthorized';

const Users = () => {
  const adminLoggedIn = Cookies.get("adminToken");
  const [getUsers, setGetUsers] = useState([]);

  const showUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/users`);
      const allUsers = response.data
      console.log("all users", allUsers);

      setGetUsers(allUsers);

    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteUser = async(userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      alert("User successfully deleted");
      showUsers();
    } catch (error) {
      console.log(error);
      alert("Unable to delete user");
    }
  }


  useEffect(() => {
    showUsers();
  }, [])

  return (
    <div>

      {adminLoggedIn ?

        <section className='user'>
          <AdminNav />
          <main className='user-main'>
            <h2>All registered users</h2>
            <div className='users-table-con'>
              <table>
                <thead>
                  <tr>
                    <th>User_ID</th>
                    <th>User_Email</th>
                    <th>Created_At</th>
                    <th>Updated_At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {getUsers.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{FormatDate(user.created_at)}</td>
                      <td>{FormatDate(user.updated_at)}</td>
                      <td className='delete-user' onClick={() => handleDeleteUser(user.id)}>Delete</td>
                    </tr>
                  ))

                  }
                </tbody>

              </table>
            </div>
          </main>
        </section>
        :

       <Unauthorized/>

      }

    </div>
  )
}

export default Users