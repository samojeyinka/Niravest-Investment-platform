import { useRef, useState } from "react";
import '../stylesheets/Sign.css'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Signup = ({ setCurrUser, setShow }) => {
    const [showPasssword, setShowPassword] = useState(false);

    const formRef = useRef()
    const signup = async (userInfo, setCurrUser) => {
        const url = "http://localhost:3000/signup"
        try {
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            })
            const data = await response.json()
            if (!response.ok) throw data.error
            localStorage.setItem('token', response.headers.get("Authorization"))
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
        signup(userInfo, setCurrUser)
        e.target.reset()
    }

    const handleClick = e => {
        e.preventDefault()
        setShow(true)
    }

    const handlePasswordVisibility = () => {
        setShowPassword(!showPasssword);
    }

    return (
        //     <div>
        //     <form ref={formRef} onSubmit={handleSubmit}>
        //         Email: <input type="email" name='email' placeholder="email" />
        //         <br/>
        //         Password: <input type="password" name='password' placeholder="password" />
        //         <br/>
        //         <input type='submit' value="Submit" />
        //     </form>
        //     <br />
        //     <div>Already registered, <a href="#login" onClick={handleClick} >Login</a> here.</div>
        // </div>

        <main className='auth'>
            <h1>Hello!
                <br /> Join Us Today</h1>

            <form className='auth__form' ref={formRef} onSubmit={handleSubmit}>
                <div className='auth__input_box'>
                    <label>Email</label>
                    <span>
                        <i className='auth__icon'><FaEnvelope /></i>
                        <input type='email'
                            name='email'
                            placeholder='Enter Your Email'

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