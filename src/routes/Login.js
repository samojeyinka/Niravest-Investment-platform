import { useRef, useState } from "react";
import '../stylesheets/Sign.css'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Footer from "../components/Footer";

const Login = () => {

  const navigate = useNavigate()
  const [showPasssword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState();

  
  
  const [formData, setFormData] = useState({
      email: '',
      password: '',
  });

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


  const url = process.env.REACT_APP_URL;
 

  const handleSubmit = async(e) => {
    e.preventDefault();
      try {
         
          const response = await axios.post(`${url}/login`,{"user":formData})
      
             
              const token = response.headers.get("Authorization");
              Cookies.set('token', token);
              const userId = response.data.data.id;
              Cookies.set('userId', userId);
  
              navigate(`/overview`);

      } catch (error) {
          alert("Wrong login credentials, please try again")
      }

      }
 

     
      
  
 

  const handlePasswordVisibility = () => {
    setShowPassword(!showPasssword);
  }


  return (
    <>
      <main className='auth'>
        <h1>Hey there! <br /> Welcome Back</h1>

        <form className='auth__form'  onSubmit={handleSubmit}>
          <div className='auth__input_box'>
            <label>Email</label>
            <span>
              <i className='auth__icon'><FaEnvelope /></i>
              <input type='email'
                name='email'
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
                required

              />
              <i className='auth__icon' onClick={handlePasswordVisibility}>{showPasssword ? <FaEyeSlash /> : <FaEye />}</i>
            </span>
          </div>
          <button type='submit' className='auth__btn'>Log in</button>
        </form>


        <p className='account-condition'>Don't have an account? <Link to={'/signup'}>Sign up</Link></p>
      </main>
      <Footer/>
    </>
  )
}
export default Login