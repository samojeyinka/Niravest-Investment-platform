import React,{useEffect} from 'react';
import Cookies from 'js-cookie';
import UserNav from '../components/UserNav';
import axios from 'axios';

const Packages = () => {
  const isLoggedIn = Cookies.get('token');
  const userId = Cookies.get('userId');
  const showPackages = async() => {
    try {
      const token = Cookies.get('token');
      const response = await axios.get(`http://localhost:3000/packages/`,{
        headers: {
          Authorization: `${token}`
        }
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }


useEffect(() => {
  showPackages();
})
  return (
    <div>
    {isLoggedIn ? 
    <section className='user'>
     <UserNav/>
      <main className='user-main'>
        <h1>Packages</h1>
      </main>
    </section>
    :
    <div>sorry</div>
    
}

    </div>
  )
}

export default Packages