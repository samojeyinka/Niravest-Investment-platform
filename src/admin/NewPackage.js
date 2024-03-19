import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import Unauthorized from '../utils/Unauthorized';



const NewPackage = () => {
  const adminLoggedIn = Cookies.get("adminToken");

  const [pName, setPName] = useState('');
  const [pPrice, setPPrice] = useState('');
  const [totalProfits, setTotalProfits] = useState('');
  const [dailyProfits, setDailyProfits] = useState('');
  const [pDuration, setPDuration] = useState('');
  const [isActive, setIsActive] = useState(false);

  const navigate = useNavigate();

  const url = process.env.REACT_APP_URL;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get('adminToken');
      const post = await axios.post(`${url}/packages/`, {
        name: pName,
        price: pPrice,
        total_profits: totalProfits,
        daily_profits: dailyProfits,
        duration: pDuration,
        active: isActive
      }, {
        headers: {
          Authorization: `${token}`
        }
      })

      setPName('');
      setPPrice('');
      setDailyProfits('');
      setTotalProfits('');
      setPDuration('');
      setIsActive(false)
      navigate("/admin/dashboard");
      alert('Package successfully created');
    } catch (error) {
      alert('Unable to create package');
    }
  }

  return (
    <div>

      {adminLoggedIn ?

        <section className='user'>
          <AdminNav />
          <main className='user-main'>
            <h2>New package</h2>
            <div className='pkg-form-con'>

              <form onSubmit={handleFormSubmit}>
                <div>
                  <label>Package name</label>
                  <input type='text'
                    value={pName}
                    onChange={(e) => setPName(e.target.value)}
                    placeholder='Enter investment package name...' required />
                </div>
                <div>
                  <label>Price</label>
                  <input type='number'
                    value={pPrice}
                    onChange={(e) => setPPrice(e.target.value)}
                    placeholder='Enter investment package price...' required />
                </div>
                <div>
                  <label>Total profit</label>
                  <input type='number'
                    value={totalProfits}
                    onChange={(e) => setTotalProfits(e.target.value)}
                    placeholder='Enter investment total profit...' required />
                </div>
                <div>
                  <label>Daily profit</label>
                  <input type='number'
                    value={dailyProfits}
                    onChange={(e) => setDailyProfits(e.target.value)}
                    placeholder='Enter investment daily profits...' required />
                </div>
                <div>
                  <label>Package duration</label>
                  <input type='text'
                    value={pDuration}
                    onChange={(e) => setPDuration(e.target.value)}
                    placeholder='Enter investment package duration...' required />
                </div>
                <div className='check-active'>
                  <label>Active</label>
                  <input type='checkbox'
                    name='isActive'
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  />
                </div>
                <div>
                  <button type="submit">Create</button>
                </div>
              </form>
            </div>
          </main>
        </section>
        :

        <Unauthorized />

      }

    </div>
  )
}

export default NewPackage