import React from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import {  FaChartBar, FaChartArea} from 'react-icons/fa';
import numberFormat from '../utils/NumberFormatter';
import PaystackDepositForm from '../components/PayForm';
import WithdrawalForm from '../components/WithdrawalForm';
import Unauthorized from '../utils/Unauthorized';
import '../stylesheets/user/Payment.css'

const Payment = () => {
  
  const isLoggedIn = Cookies.get('token');
  const balance = localStorage.getItem('amount');
  const recentDeposit = localStorage.getItem('recentDeposit');

  

  
  
  return (
    <div>
    {isLoggedIn ? 
    <section className='user'>
     <UserNav/>
      <main className='user-main'>
        <div className='payment'>
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
          </div>
        
          {/* payment form */}
          <div className='d-w-con'>
        <div>
          <PaystackDepositForm/>
          </div>
          <div>
          <WithdrawalForm/>
          </div>
          </div>
        </div>
      </main>
    </section>
    :
        <Unauthorized/>
    
}

    </div>
  )
}

export default Payment