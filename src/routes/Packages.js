import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';
import { dmd } from '../assets/assets';
import { Link } from 'react-router-dom';
import '../stylesheets/Packages.css';


const Packages = () => {

  const [packages, setPackages] = useState([]);



  const isLoggedIn = Cookies.get('token');
  const userId = Cookies.get('userId');
  const balance = Cookies.get('amount');
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



  // const handleAddPackage = async(packageId) => {
  //   // Send a POST request to associate the package with the user
  //   try {
  //     const token = Cookies.get('token');
  //   await axios.post(`http://localhost:3000/users/${userId}/packages`, { package_id: packageId },
  //     {
  //       headers: {
  //         Authorization: `${token}`
  //       }
  //     });
  //     console.log('Package added successfully');
      
  //   } catch (error) {
  //     console.error('Error adding package: ', error);
  //   }
    
  // }

  const handleAddPackage = async (packageId, packagePrice) => {
    if (parseFloat(balance) < parseFloat(packagePrice)) {
        console.log("Insufficient balance");
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
            Cookies.set('amount', newBalance);

        } catch (error) {
            console.error('Error adding package: ', error);
        }
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
                            <b>₦{pkg.daily_profits}</b>
                            <b>₦{pkg.total_profits}</b>
                            <b className='p-price'>₦{pkg.price}</b>

                          </div>
                        </div>

                        <button onClick={() => handleAddPackage(pkg.id,pkg.price)}>Activate</button>
                        {/* <PaystackHookExample amount={pkg.price}  packageId={pkg.id} handleAddPackage={onclick = ()=> handleAddPackage(pkg.id)}/> */}
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