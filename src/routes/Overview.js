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
import Unauthorized from '../utils/Unauthorized';
import '../stylesheets/user/Overview.css'

const Overview = () => {

  const [packages, setPackages] = useState([]);
  const [totalPackagePrice, setTotalPackagePrice] = useState("");
  const [estimatedProfits, setEstimatedProfits] = useState("");
  const navigate = useNavigate();


  const isLoggedIn = Cookies.get('token');
  const userId = Cookies.get('userId');
  const balance = localStorage.getItem('amount');
  const recentDeposit = localStorage.getItem('recentDeposit');

  const url = process.env.REACT_APP_URL;

  const showPackages = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(`${url}/users/${userId}/packages/active`, {
        headers: {
          Authorization: `${token}`
        }
      });

      const packages = response.data


      const totalPrice = packages.reduce((acc, pkg) => acc + parseInt(pkg.price), 0);
      setTotalPackagePrice(totalPrice)

      const estimateProfits = packages.reduce((acc, pkg) => acc + parseInt(pkg.total_profits), 0);
      setEstimatedProfits(estimateProfits);


      setPackages(packages);
    } catch (error) {
      console.log(error);
    }
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }



  const packagePage = (currentPackageId) => {
    navigate(`/package?id=${currentPackageId}`);
  }


  useEffect(() => {
    showPackages();
  }, [])

  return (
    <div className='overview'>
      {isLoggedIn ?
        <section className='user'>
          <UserNav />
          <main className='user-main'>


            <div className='stat-con'>
              <div className='stat-con-flex'>

                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                      <FaChartBar />
                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>Balance</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>{numberFormat(balance || 0)}</b>

                  </div>
                </div>
                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                      <FaChartArea />

                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>Recent Deposit</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>{numberFormat(recentDeposit || 0)}</b>
                  </div>
                </div>
                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                      <FaCashRegister />

                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>Investments</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>{numberFormat(totalPackagePrice)}</b>
                  </div>
                </div>

                <div className='stat-box'>
                  <div className='stat-box-top'>
                    <i className='chart-icon'>
                      <FaChartLine />
                    </i>
                  </div>
                  <div className='stat-box-md'>
                    <span>Estimated Profits</span>
                  </div>
                  <div className='stat-box-btm'>
                    <b>{numberFormat(estimatedProfits)}</b>
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
                              <b>{numberFormat(pkg.daily_profits)}</b>
                              <b>{numberFormat(pkg.total_profits)}</b>
                              <b className='p-price'>{numberFormat(pkg.price)}</b>

                            </div>
                          </div>


                          <div className='p-btns'>
                            <button onClick={() => packagePage(pkg.id)} className='p-btns-activate'>Insight</button>
                            <i className='p-btns-active' title='active'><FaStamp /></i>
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
        <Unauthorized />

      }

    </div>
  )
}

export default Overview