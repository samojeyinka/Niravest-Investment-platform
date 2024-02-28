import React, { useState, useRef, useEffect } from 'react';
import '../stylesheets/Reviews.css';
import { pro1, pro2, pro3 } from '../assets/assets';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Reviews = () => {


    const [width, setWidth] = useState(0);
    const revCon = useRef();

    useEffect(() => {
        setWidth(revCon.current.scrollWidth - revCon.current.offsetWidth);
    }, []);


    return (
        <section className='review-sec'>
            <div className='review-con'>
                <div className='rev-left'>
                    <h1 className='text-white'>Our Customers Love What We Do</h1>
                    <h3 className='text-white'>Turn Your Investment Idea into Reality with Niravest.</h3>
                    <p className='text-light-gray'>It Is A Well-Known Fact That Investment Decisions Can Be Influenced By the Clarity and Readability of the Information Provided.</p>

                    <div className='profile-pics-flex'>
                        <img src={pro1} />
                        <img src={pro2} />
                        <img src={pro3} />

                    </div>

                    <h4><span>30+ </span> Customer Reviews</h4>
                </div>

                <div className='rev-right'>
                    <motion.div className='rev-con' ref={revCon}>
                        <motion.div className='rev-carousel' drag='x' dragConstraints={{ right: 0, left: -width }}>
                            <motion.div className='rev-box'>
                                <i className='qoutation'>
                                    <FaQuoteLeft size={40} style={{ color: 'var(--primary-color)' }} />
                                </i>


                                <h2>"I stumbled upon this investment website
                                    and it's been a game-changer! The user
                                    interface is intuitive, making it easy to
                                    navigate through the world of investment.
                                    The security measures are top-notch. Highly recommend!"</h2>

                                <div className='bottom-flex'>
                                    <div className='profile-det'>
                                        <img src={pro1} />
                                        <span className='profile-det-flex'>
                                            <h4>Kunle Igala</h4>
                                            <p>Economist</p>
                                        </span>
                                    </div>
                                    <h5>Lagos,Nigeria</h5>
                                </div>
                            </motion.div>

                            <motion.div className='rev-box'>
                                <i className=' qoutation'>
                                    <FaQuoteLeft size={40} style={{ color: 'var(--primary-color)' }} />
                                </i>


                                <h2>"As an investment enthusiast, I've tried numerous websites,
                                    but this one stands out. The platform offers a wide range of packages to invest on,resolving any issues promptly. A reliable choice for all your investment needs!"</h2>

                                <div className='bottom-flex'>
                                    <div className='profile-det'>
                                        <img src={pro2} />
                                        <span className='profile-det-flex'>
                                            <h4>MCagabakin</h4>
                                            <p>Stocks Expert</p>
                                        </span>
                                    </div>
                                    <h5>Oja oba,Texas</h5>
                                </div>
                            </motion.div>

                            <motion.div className='rev-box'>
                                <i className='qoutation'>
                                    <FaQuoteLeft size={40} style={{ color: 'var(--primary-color)' }} />
                                </i>


                                <h2>
                                    "I've finally found an investment website that meets my expectations. The website's design is sleek and modern, providing a seamless investing experience.
                                    The educational resources available are comprehensive!"
                                </h2>
                                <div className='bottom-flex'>
                                    <div className='profile-det'>
                                        <img src={pro3} />
                                        <span className='profile-det-flex'>
                                            <h4>connor krex</h4>
                                            <p>Technicalist</p>
                                        </span>
                                    </div>
                                    <h5>Yekemi off Dubai</h5>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Reviews