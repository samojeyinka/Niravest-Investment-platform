import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';
import { dmd } from '../assets/assets';
import { Link } from 'react-router-dom';
import '../stylesheets/Packages.css';
import numberFormat from "../components/NumberFormatter"


const Packages = () => {

  const [packages, setPackages] = useState([]);
  const [activatedPackages, setActivatedPackages] = useState([]);
  const [btnText, setBtnText] = useState("Activated");



  const isLoggedIn = Cookies.get('token');
  const userId = Cookies.get('userId');
  const balance = localStorage.getItem('amount');
  console.log(balance);

  const showPackages = async () => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(`http://localhost:3000/packages/`, {
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






  const handleAddPackage = async (packageId, packagePrice) => {
    if (parseFloat(balance) < parseFloat(packagePrice)) {
      console.log("Insufficient balance");
    } else if (activatedPackages.includes(packageId)) {
      console.log("Package already activated");
      alert("Package already activated");
    } else {
      try {
        const token = Cookies.get('token');
        await axios.post(`http://localhost:3000/users/${userId}/packages`, { package_id: packageId },
          {
            headers: {
              Authorization: `${token}`
            }
          });
        console.log('Package added successfully');

        // Deduct package price from balance
        const newBalance = parseFloat(balance) - parseFloat(packagePrice);
        localStorage.setItem('amount', newBalance);

        // Store package ID in local storage
        let updatedActivatedPackages = [...activatedPackages, packageId];
        localStorage.setItem('activatedPackages', JSON.stringify(updatedActivatedPackages));

          // Store activation date for the package
    let activationDate = new Date().toISOString();
    localStorage.setItem(`activationDate-${packageId}`, activationDate);

        const updatedPackages = packages.map(pkg => {
          if (pkg.id === packageId) {
            pkg.activated = true;
          }
          return pkg;
        });
        setPackages(updatedPackages);

      } catch (error) {
        console.error('Error adding package oops!: ', error);
      }
    }
  }




  useEffect(() => {
    setPackages(prevPackages => {
      return prevPackages.map(pkg => {
        if (activatedPackages.includes(pkg.id)) {
          return { ...pkg, activated: true };
        }
        return pkg;
      });
    });
  }, [activatedPackages]);



  useEffect(() => {
    const storedActivatedPackages = JSON.parse(localStorage.getItem('activatedPackages')) || [];
    setActivatedPackages(storedActivatedPackages);
  }, []);


  const activePackages = JSON.parse(localStorage.getItem('activatedPackages')) || [];
  activePackages.forEach((pack) => {
    console.log(pack)
  });



  useEffect(() => {
    showPackages();
  }, [])
  return (
    <div>
      {isLoggedIn ?
        <section className='user'>
          <UserNav />
          <main className='user-main'>
            <h2>Packages to Invest On</h2>
            {packages.length === 0 ? (<div className='empty-watchlist'>

              <p>Sorry! There are no packages to invest in at the moment.</p>
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
                        <button onClick={() => handleAddPackage(pkg.id, pkg.price)}>Activate</button>






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
        <div>sorry</div>

      }

    </div>
  )
}

export default Packages