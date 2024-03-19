import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const Login = () => {
  const [showPasssword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState();
  const navigate = useNavigate();

  const url = process.env.REACT_APP_URL;



  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  // Function that check for valid email

  const handleChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;

    if (e.target.name === 'email') {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const isValidEmail = emailPattern.test(inputValue);
      setIsValid(isValidEmail);
    }

    setFormData({ ...formData, [e.target.name]: e.target.value });
  }



  // Function to toggling of password visibility
  const handlePasswordVisibility = () => {
    setShowPassword(!showPasssword);
  }



  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const email = document.getElementById('email');
      const password = document.getElementById('password');

      if (email.value == process.env.REACT_APP_ADMIN_EMAIL && password.value == process.env.REACT_APP_ADMIN_PASSWORD) {
        const response = await axios.post(`${url}/login`, { "user": formData })


        const adminToken = response.headers.get("Authorization");
        Cookies.set('adminToken', adminToken);
        const adminEmail = response.data.data.email;
        Cookies.set('adminEmail', adminEmail);

        navigate(`/admin/dashboard`);
      } else {
        alert("Wrong login credentials. Please try again");
      }

    } catch (error) {

      console.error(error);
    }

  }

  return (
    <section className='admin-login'>
      <div className='admin-login-con'>
        <h3>Login as Admin</h3>

        <form className='auth__form' onSubmit={handleSubmit}>
          <div className='auth__input_box'>
            <label>Email</label>
            <span>
              <i className='auth__icon'><FaEnvelope /></i>
              <input type='email'
                name='email'
                id='email'
                placeholder='Enter Your Email'
                onChange={handleChange}
                required
              />
            </span>
          </div>
          <br /><br />
          <div className='auth__input_box'>
            <label>Password</label>
            <span>
              <i className='auth__icon'><FaLock /></i>
              <input type={showPasssword ? 'text' : 'password'}
                placeholder='Enter Your Password'
                name='password'
                onChange={handleChange}
                id='password'
                required

              />
              <i className='auth__icon' onClick={handlePasswordVisibility}>{showPasssword ? <FaEyeSlash /> : <FaEye />}</i>
            </span>
          </div>
          <button type='submit' className='auth__btn'>Log in</button>
        </form>


      </div>
    </section>
  )
}

export default Login