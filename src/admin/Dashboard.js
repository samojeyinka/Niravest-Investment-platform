import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';
import { dmd } from '../assets/assets';
import { Link } from 'react-router-dom';
import '../stylesheets/Packages.css';
import { FaTrash, FaCashRegister, FaChartBar, FaChartArea, FaChartLine, FaStamp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import numberFormat from '../utils/NumberFormatter';
import AdminNav from './AdminNav';
import Unauthorized from '../utils/Unauthorized';

const Dashboard = () => {
  const adminLoggedIn = Cookies.get("adminToken");
  const [packages, setPackages] = useState([]);


  const url = process.env.REACT_APP_URL;


  // Fetch packages from API endpoint
  const showPackages = async () => {
    try {
      const token = Cookies.get('adminToken');
      const response = await axios.get(`${url}/packages/`, {
        headers: {
          Authorization: `${token}`
        }
      });

      const packages = response.data

      setPackages(packages);

     
    } catch (error) {
      console.log(error);
    }
  }


  // Function that transform first letter or word to uppercase
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  // Function to delete package
  const handleDeletePackage = async (packageId) => {
    try {
      const token = Cookies.get('adminToken');
      axios.delete(`${url}/packages/${packageId}`, {
        headers: {
          Authorization: `${token}`
        }
      })
      showPackages();
      alert(`Successfully deleted ${packageId}`)
    } catch (error) {
      alert("Unable to delete package")
      console.log(error)
    }
  }

  useEffect(() => {
    showPackages();
  })


  return (
    <div>

      {adminLoggedIn ?

        <section className='user'>
          <AdminNav />
          <main className='user-main'>
            {packages.length === 0 ? (<div className='empty-watchlist'>

              <p>Sorry! There are no packages.</p>
            </div>) :
              (<div className='packages-grid admin'>
                {packages.map((pkg) => (
                  <div className='package-box' key={pkg.id}>
                    <div className='p-box-top'>
                      <b>{capitalizeFirstLetter(pkg.name)}</b>
                      <b>{pkg.duration}</b>
                    </div>
                    <div className='p-box-btm'>
                      <div className='p-box-btm-left'>
                        <div className='pbbl-img-box'>
                          <img src={dmd} />
                        </div>
                      </div>
                      <div className='p-box-btm-right'>
                        <div className='p-box-btm-right-details'>
                          <div className='p-box-details-left'>
                            <b>Daily Profits</b>
                            <b>Total Profits</b>
                            <b className='p-price'>Price</b>
                          </div>
                          <div className='p-box-details-right'>
                            <b>{numberFormat(pkg.daily_profits)}</b>
                            <b>{numberFormat(pkg.total_profits)}</b>
                            <b className='p-price'>{numberFormat(pkg.price)}</b>

                          </div>
                        </div>
                        <div className='p-btns'>

                          <i className='trash-package' title='Trash this package' onClick={() => handleDeletePackage(pkg.id)}><FaTrash /></i>
                          <Link to={`/admin/package/edit?id=${pkg.id}`}><button className='admin-package-update-btn'>Edit</button></Link>

                        </div>





                      </div>

                    </div>

                  </div>
                ))
                }
              </div>)

            }
          </main>
        </section>
        :

        <Unauthorized />

      }

    </div>
  )
}

export default Dashboard