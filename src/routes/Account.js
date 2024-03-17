import React from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import Unauthorized from '../utils/Unauthorized';

const Account = () => {
  const isLoggedIn = Cookies.get('token');
  return (
    <div>
    {isLoggedIn ? 
    <section className='user'>
     <UserNav/>
      <main className='user-main'>
        <h1>Account</h1>
      </main>
    </section>
    :
    <Unauthorized/>
    
}

    </div>
  )
}

export default Account