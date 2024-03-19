import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import Unauthorized from '../utils/Unauthorized';



const EditPackage = () => {

  const adminLoggedIn = Cookies.get("adminToken");
  const [newPName, setNewPName] = useState('');
  const [newPPrice, setNewPPrice] = useState('');
  const [newTotalProfits, setNewTotalProfits] = useState('');
  const [newDailyProfits, setNewDailyProfits] = useState('');
  const [newPDuration, setNewPDuration] = useState('');
  const [newIsActive, setNewIsActive] = useState();

  const navigate = useNavigate();

  const url = process.env.REACT_APP_URL;


  const params = new URLSearchParams(window.location.search)
  const id = params.get('id');


  // Fetch single package using id

  const getPackage = async () => {
    try {
      const token = Cookies.get('adminToken');
      const { data: { name, price, total_profits, daily_profits, duration, active } } = await axios.get(`${url}/packages/${id}`, {
        headers: {
          Authorization: `${token}`
        }
      })
     
      setNewPName(name);
      setNewPPrice(price);
      setNewTotalProfits(total_profits);
      setNewDailyProfits(daily_profits);
      setNewPDuration(duration);
      setNewIsActive(active);

    } catch (error) {
      console.log(error);
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get('adminToken');
      const { data: { name, price, total_profits, daily_profits, duration, active } } = await axios.patch(`${url}/packages/${id}`, {
        name: newPName,
        price: newPPrice,
        total_profits: newTotalProfits,
        daily_profits: newDailyProfits,
        duration: newPDuration,
        active: newIsActive
      }, {
        headers: {
          Authorization: `${token}`
        }
      })

      setNewPName(name);
      setNewPPrice(price);
      setNewTotalProfits(total_profits);
      setNewDailyProfits(daily_profits);
      setNewPDuration(duration);
      setNewIsActive(active);
      alert('Package successfully updated');
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
      alert('Unable to update package');
    }
  }


  useEffect(() => {
    getPackage();
  }, [])

  return (
    <div>

      {adminLoggedIn ?

        <section className='user'>
          <AdminNav />
          <main className='user-main'>
            <h2>Edit package</h2>
            <div className='pkg-form-con'>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <label>Package name</label>
                  <input type='text'
                    value={newPName}
                    onChange={(e) => setNewPName(e.target.value)}
                    placeholder='Enter investment package name...' required />
                </div>
                <div>
                  <label>Price</label>
                  <input type='number'
                    value={newPPrice}
                    onChange={(e) => setNewPPrice(e.target.value)}
                    placeholder='Enter investment package price...' required />
                </div>
                <div>
                  <label>Total profit</label>
                  <input type='number'
                    value={newTotalProfits}
                    onChange={(e) => setNewTotalProfits(e.target.value)}
                    placeholder='Enter investment total profit...' required />
                </div>
                <div>
                  <label>Daily profit</label>
                  <input type='number'
                    value={newDailyProfits}
                    onChange={(e) => setNewDailyProfits(e.target.value)}
                    placeholder='Enter investment daily profits...' required />
                </div>
                <div>
                  <label>Package duration</label>
                  <input type='text'
                    value={newPDuration}
                    onChange={(e) => setNewPDuration(e.target.value)}
                    placeholder='Enter investment package duration...' required />
                </div>
                <div className='check-active'>
                  <label>Active</label>
                  <input type='checkbox'
                    name='isActive'
                    checked={newIsActive}
                    onChange={(e) => setNewIsActive(e.target.checked)}
                  />
                </div>
                <div>
                  <button type="submit">Update</button>
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

export default EditPackage