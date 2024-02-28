import React from 'react';
import '../stylesheets/Advert.css';
import { Link } from 'react-router-dom';

// Advert section component
const Advert = () => {
  

    return (
        // Section containing the advertisement before the footer section
        <section className='adver-sec'>
            <div className='advert-con'>
                <div className='advert-flex'>
                    <div className='ad-details'>
                        {/* Title of the advertisement */}
                        <h2 className='text-white'>
                            Earn up to ₦250k worth of assets
                        </h2>
                        {/* Description of the advertisement */}
                        <p className='text-white'>
                            Discover How Specific investment package Work — And Get A Bit Of Each To Try Out For Yourself.
                        </p>
                    </div>

                    {/* Button to create an account */}
                    <button>
                        <Link to='/signup'>
                            Create Account
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Advert;