import React from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';

const Payment = () => {
  const isLoggedIn = Cookies.get('token');
  return (
    <div>
    {isLoggedIn ? 
    <section className='user'>
     <UserNav/>
      <main className='user-main'>
        <h1>Payment</h1>
      </main>
    </section>
    :
    <div>sorry</div>
    
}

    </div>
  )
}

export default Payment