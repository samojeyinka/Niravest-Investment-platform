import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';
import { dmd } from '../assets/assets';
import { Link } from 'react-router-dom';
import '../stylesheets/Packages.css';
import {FaTrash,FaCashRegister,FaChartBar,FaChartArea,FaChartLine} from 'react-icons/fa'

const Overview = () => {

  const [packages, setPackages] = useState([]);



  const isLoggedIn = Cookies.get('token');
  const userId = Cookies.get('userId');
  const balance = Cookies.get('amount');


  const showPackages = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(`http://localhost:3000/users/${userId}/packages/active`, {
        headers: {
          Authorization: `${token}`
        }
      });

      const packages = response.data

      setPackages(packages);

      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const handleRemovePackage = async(packageId) => {
try {
    const token = Cookies.get('token');
    await axios.delete(`http://localhost:3000/users/${userId}/packages/${packageId}`,
      {
        headers: {
          Authorization: `${token}`
        }
      })

      console.log('Package removed successfully');
      showPackages();
    
} catch (error) {
    console.error('Error removing package: ', error);
}
  
  }
    

  //Activate - Work by updating the package activeness to true

  const activatePackage = async(packageeId) => {
    try {
      const token = Cookies.get('token');
      await axios.patch(
        `http://localhost:3000/users/${userId}/packages/${packageeId}/edit`,
        {},
        {
          headers: {
            Authorization: `${token}` // Correct way to pass the token
          }
        }
      );
  
      console.log('Package activated successfully');
      showPackages();
    } catch (error) {
      console.error('Error activating package: ', error);
    }
  }
  
     

  useEffect(() => {
    showPackages();
  }, [])
  
  return (
    <div>
      {isLoggedIn ?
        <section className='user'>
          <UserNav />
          <main className='user-main'>


            <div className='stat-con'>
              <div className='stat-con-flex'>

                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                      <FaChartBar/>
                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>Balance</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>₦{balance}</b>
                  </div>
                </div>
                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                    <FaChartArea/>
                     
                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>received this month</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>₦7,000</b>
                  </div>
                </div> 
                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                      <FaCashRegister/>
                      
                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>Investments</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>₦56,000</b>
                  </div>
                </div>

                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                    <FaChartLine/>
                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>Cashback</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>₦1,100</b>
                  </div>
                </div>
              </div>

            </div>

              <div className='active-packages'>
            <h2>Active Packages</h2>
            {packages.length === 0 ? (<div className='empty-watchlist'>

                <p>Browse our available <Link to={'/packages'}>packages</Link> and add packages to your watchlist to later activate them.</p>
            </div>) :
            (<div className='packages-grid'>
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
                          <b>₦{pkg.daily_profits}</b>
                          <b>₦{pkg.total_profits}</b>
                          <b className='p-price'>₦{pkg.price}</b>

                        </div>
                      </div>

                      {/* <button onClick={() => handleAddPackage(pkg.id)}>Add to Watchlist</button> */}
                      <div className='p-btns'>
                      <button onClick={() => activatePackage(pkg.id)} className='p-btns-activate'>Activate</button>
                      <i onClick={() => handleRemovePackage(pkg.id)}  className='p-btns-rm' title='Remove'><FaTrash/></i>
                      </div>
                      
                    </div>

                  </div>

                </div>



              ))
              }
              
            </div>)
}
</div>
          </main>
        </section>
        :
        <div>sorry</div>

      }

    </div>
  )
}

export default Overview