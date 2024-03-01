import React, { useState, useEffect, useRef } from 'react'
import { logo } from '../assets/assets'
import { Link } from 'react-router-dom'
import '../stylesheets/Header.css'
import {FaAngleDown} from 'react-icons/fa'

const Header = () => {

    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [dropPackages, setDropPackages] = useState('d1');


    const handleClick = () => {
        setClick(!click);
    }

   const openPage = () => {
    setClick(!click);
   }


   const closedropdown = () => {
    setOpen(!open);
   }

    let dropdown = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!dropdown.current.contains(e.target)) {
                setOpen(false);
                console.log(dropdown.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

    const handleDropPackage = (id) => {
        setDropPackages(dropPackages === id ? "" : id);
    }

    const getPackages = (id) => {
        return dropPackages === id ? "active-packages" : "";
        
    }

    return (

        <header ref={dropdown}>

            <nav className='navbar'>
                <div className='navbar_left'>
                    <img src={logo} className='logo_img' />
                    <span className='logo_txt'>niravest</span>
                </div>

                <div className='hamburger' onClick={handleClick}>
                    <div className={`blur ${click ? 'active' : ''}`}></div>

                    <div className={click ? 'bars-div open bar1 open bar2 open bar3' : 'bars-div'}>
                        <div className='bar1'></div>
                        <div className='bar2'></div>
                        <div className='bar3'></div>

                    </div>
                </div>


                <div className={`navbar_middle ${click ? 'active' : ''}`}>
                    <ul className='menu_links'>
                        <li>
                            <Link to={'/'} onClick={openPage}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to={'/'} onClick={openPage}>
                                Service
                            </Link>
                        </li>


                        <li className='desktop-packages-link'>
                            <Link to={'/'}>
                                Packages
                            </Link>
                        </li>

                        <li onClick={() => handleDropPackage('d1')} id='d1' className='mobile-packages-link'>
                            <Link to={'/'} >
                                Packages
                            </Link>
                            <i className='p-angle'>
                            <FaAngleDown size={25} color='var(--tertiary-color)'/>
                        </i>
                        </li>

                        <div className={`d-packages ${getPackages('d1')}`}>
                            <li><Link to='/' onClick={openPage} >Basic Invest</Link> </li>
                            <li><Link to='/' onClick={openPage}>Smart Invest</Link> </li>
                            <li><Link to='/' onClick={openPage}>Pro Invest</Link> </li>
                            <li><Link to='/' onClick={openPage}>Elite Invest</Link> </li>
                            <li><Link to='/' onClick={openPage}>Prime Invest</Link> </li>
                            <li><Link to='/' onClick={openPage}>Ultimate Invest</Link> </li>
                        </div>

                        <li className='mobile-only-link'>
                            <Link to={'/signin'} onClick={openPage}>
                                Sign In
                            </Link>
                        </li>
                        <li className='mobile-only-link'>
                            <Link to={'/signup'} onClick={openPage}>
                                Sign Up
                            </Link>
                        </li>

                        <li onClick={() => { setOpen(!open) }} className='account_link'>
                            <Link>
                            Account
                            </Link>

                        </li>

                        <div className={`dropdown-menu ${open ? 'opendropdown' : 'closedropdown'}`}>
                            <ul className='dp_links'>
                                <li>
                                    <Link to={'/signin'} onClick={closedropdown}>
                                        Sign In
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/signup'} onClick={closedropdown}>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>




                    </ul>

                </div>
                <div className='navbar_right'>
                    <button>Download The App</button>
                </div>
            </nav>


        </header>
    )
}

export default Header