import React from 'react';
import { circle1, circle2, divider, game, shield, tickSquare } from '../assets/assets';
import '../stylesheets/Pros.css'

const Pros = () => {


    const BoxArray = [
        {
            id: 1,
            image: shield,
            title: 'Guarantee Safety',
            details: 'Ensure your investment platform\'s safety with our guarantee, providing peace of mind and secure transactions for all users.'
        },
        {
            id: 2,
            image: tickSquare,
            title: 'All in One App',
            details: 'Experience the ultimate convenience with our all-in-one app, combining functionality, simplicity, and efficiency in a single platform.'
        },

        {
            id: 3,
            image: game,
            title: 'Easy to Use',
            details: 'Simplify your experience with our user-friendly interface, designed for effortless navigation and seamless interactions for all users.'
        },
    ]
    return (
        <section className='pros_section'>
        <div className='pros'>
            <div className='pros_flex'>
                <div className='pros_top'>
                    <h2>Our Best Services
                        For Your Convinience</h2>
                    <p>Explore our premier services tailored for your convenience, ensuring a seamless experience and exceptional support for all your needs.</p>
                    <img src={divider} />
                </div>
                <div className='pros_bottom'>
                    <div className='pros_bottom_flex'>
                        {BoxArray.map(box => (
                            <div className='pros_box'>
                                <div className='pros_img_box'>
                                    <img src={box.image} />
                                </div>
                                <h5>{box.title}</h5>
                                <p>{box.details}</p>
                            </div>
                        ))
                        }

                    </div>

                </div>
            </div>

            <div className='scattered'>
    <img src={circle1} className='circleone'/>
    <img src={circle2} className='circletwo'/>

</div>
        </div>
        </section>
    )
}

export default Pros