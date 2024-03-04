import React from 'react'
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';


const Overview = () => {
  const isLoggedIn = Cookies.get('token');

  console.log(Cookies.get('userId'))

  return (
    <div>
        {isLoggedIn ? 
        <section className='user'>
         <UserNav/>
          <main className='user-main'>
            <h1>Overview</h1>
          </main>
        </section>
        :
        <div>sorry</div>
        
}

        </div>
  )
}

export default Overview