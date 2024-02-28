import React from 'react';
import { divider, platform } from '../assets/assets'
import '../stylesheets/Attributes.css';

const Attributes = () => {
    return (
        <section className='attributes'>
            <div className='attributes_flex'>
                <div className='attributes_left'>
                    <span>GET STARTED IN MINUTES</span>
                    <h4>Three Main Reasons to Choose Us.</h4>
                    <img src={divider} />
                    <h5>Register and activate your first investent package</h5>
                    <p>Begin Your Investment Journey: Register and Activate Your First Investment Package Today for a Secure Financial Future.</p>
                        <h5 className='add_line'>Manage your dashboard easily</h5>
                        <h5 className='add_line'>Start Investing</h5>
                </div>
                <div className='attributes_right'>
                        <div className='attributes_right_img_box'>
                            <img src={platform}/>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Attributes