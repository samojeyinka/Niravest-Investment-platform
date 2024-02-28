import React from 'react';
import { divider, platform } from '../assets/assets'

const Attributes = () => {
    return (
        <section className='attributes'>
            <div className='attributes_flex'>
                <div className='attributes_left'>
                    <span>GET STARTED IN MINUTES</span>
                    <h4>3 Main Reaosn to
                        Choose us.</h4>
                    <img src={divider} />
                    <h5>Register and create your first
                        support portal</h5>
                    <p>It only takes 5 minutes. Set-up is smooth & simple,
                        with fully customisable page design to reflect your brand lorem dummy.</p>
                        <h5 className='add_line'>Manage your dashbaord easily</h5>
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