import React, { useState } from 'react';
import '../stylesheets/Sign.css';
import { BiLock, BiLockAlt, BiLockOpen, BiTargetLock } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            navigate('/profile')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }


    return (
        <section className='login-sec'>
            <div className='login-con'>
                <h1>Register On Niravest</h1>
                <p>Start your awesome journey to profit on niravest</p>
                <span className='signin-link'>
                    <BiLockOpen size={33} style={{ color: '#fff', background: '#58bd7d', borderRadius: '50%', padding: '2px' }} />
                    <small><span>https://</span>niravest.com/signup</small>
                </span>

                {error ? <p style={{ color: 'red' }}>{error}</p> : null}


                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Please fill in the email form' />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Please enter a password' />
                    </div>

                    <div>
                        <button type='submit'>Sign Up</button>
                    </div>
                    <div className='to-signup'>
                        <p>Already A Member?</p>
                        <Link to='/signin'>Login</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUp