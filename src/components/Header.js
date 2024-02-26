import React from 'react'
import {logo} from '../assets/assets'
import { Link } from 'react-router-dom'
import '../stylesheets/Header.css'

const Header = () => {
  return (
    <header>
        <nav className='navbar'>
            <div className='navbar_left'>
                <img src={logo} className='logo_img'/>
                <span className='logo_txt'>niravest</span>
            </div>
            <div className='navbar_middle'>
                <ul className='menu_links'>
                    <li>
                        <Link to={'/'}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'}>
                            Service
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'}>
                            Packages
                        </Link>
                    </li>

                    <li>
                        <Link to={'/'}>
                            Account
                        </Link>
                    </li>

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