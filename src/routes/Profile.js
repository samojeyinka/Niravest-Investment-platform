import React from 'react'
import Cookies from 'js-cookie';


const Profile = () => {
    const isLoggedIn = Cookies.get('token');
  return (
    <div>
        {isLoggedIn ? 
        <div>Profile</div>
        :
        <div>sorry</div>
        
}

        </div>
  )
}

export default Profile