import { useRef, useState } from "react";
import '../stylesheets/Sign.css'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Login = ({ setCurrUser, setShow }) => {
  const [showPasssword, setShowPassword] = useState(false);

  const formRef = useRef()
  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/login"
    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(userInfo)
      })
      const data = await response.json()
      if (!response.ok)
        throw data.error
      localStorage.setItem("token", response.headers.get("Authorization"))
      setCurrUser(data)
    } catch (error) {
      console.log("error", error)
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    login(userInfo, setCurrUser)
    e.target.reset()
  }
  const handleClick = e => {
    e.preventDefault()
    setShow(false)
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPasssword);
  }


  return (
    <>
      <main className='auth'>
        <h1>Hey there! <br /> Welcome Back</h1>

        {/* <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name='email' placeholder="email" />
        <br/>
        Password: <input type="password" name='password' placeholder="password" />
        <br/>
        <input type='submit' value="Login" />
      </form> */}
        <form className='auth__form' ref={formRef} onSubmit={handleSubmit}>
          <div className='auth__input_box'>
            <label>Email</label>
            <span>
              <i className='auth__icon'><FaEnvelope /></i>
              <input type='email'
                name='email'
                placeholder='Enter Your Email'
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
                required

              />
              <i className='auth__icon' onClick={handlePasswordVisibility}>{showPasssword ? <FaEyeSlash /> : <FaEye />}</i>
            </span>
          </div>
          <button type='submit' className='auth__btn'>Log in</button>
        </form>


        <p className='account-condition'>Don't have an account? <Link to={'/#signup'} onClick={handleClick} >Sign up</Link></p>
      </main>
    </>
  )
}
export default Login