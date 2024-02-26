import React,{useState,useEffect,useRef} from 'react'
import {logo} from '../assets/assets'
import { Link } from 'react-router-dom'
import '../stylesheets/Header.css'

const Header = () => {

    const [open,setOpen] = useState(false);
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

  return (
   
    <header ref={dropdown}>

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

                    <li onClick={() => {setOpen(!open)}} >
                        <Link to={'/'} className='account_link'
                        >
                            <span>Account </span>
                        </Link>
                        
                    </li>

                    <div className={`dropdown-menu ${open ? 'opendropdown' : 'closedropdown'}`}>
                        <ul className='dp_links'>
                        <li>
                        <Link to={'/'}>
                            Sign In
                        </Link>
                        </li>
                        <li>
                        <Link to={'/'}>
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