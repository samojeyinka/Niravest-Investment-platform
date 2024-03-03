import { useRef, useState } from "react";
import '../stylesheets/Sign.css'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
import axios from 'axios';

const Signup = ({ setCurrUser, setShow }) => {
    
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

 
    const handleSubmit = async(e) => {
        try {
            e.preventDefault()
            const response = await axios.post("http://localhost:3000/signup",{"user":formData})
        
            if (response.status === 200) {
                console.log('Sign up successful!!');
                console.log(response)
                const token = response.data.token;
                localStorage.setItem('token', token);
                // const usernameidentifier = response.data.user.username;
                // console.log(usernameidentifier)
                // navigate(`/@${usernameidentifier}`);

       } } catch (error) {
            console.error(error);   
        }
       
        
    }

    const handleClick = e => {
        e.preventDefault()
        setShow(true)
    }

    const handlePasswordVisibility = () => {
        setShowPassword(!showPasssword);
    }

    return (

        <main className='auth'>
            <h1>Hello!
                <br /> Join Us Today</h1>

            <form className='auth__form' onSubmit={handleSubmit}>
                <div className='auth__input_box'>
                    <label>Email</label>
                    <span>
                        <i className='auth__icon'><FaEnvelope /></i>
                        <input type='email'
                            name='email'
                            placeholder='Enter Your Email'
                            onChange={handleChange}
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

                        />
                        <i className='auth__icon' onClick={handlePasswordVisibility}>{showPasssword ? <FaEyeSlash /> : <FaEye />}</i>
                    </span>
                </div>
                <button type='submit' className='auth__btn'>Sign Up</button>

            </form>


            <p className='account-condition'>Already have an account?  <Link to={'/#signup'} onClick={handleClick} >Sign In</Link></p>
        </main>



    )
}
export default Signup
