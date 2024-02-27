import React from 'react'
import { button, mcur, smartphone } from '../assets/assets'

const Features = () => {
  return (
    <section className='features'>
        <div className='features_flex'>
            <div className='feature_box'>
                <div className='left'>
                    <div className='f_icon_box'>
                    <img src={smartphone}/>
                    </div>
                    <h4>Transact in Multiple Currencies</h4>
                    <p>Effortlessly transact in multiple currencies with our platform, simplifying international transactions and expanding your reach.</p>    
                    <img src={button}/>
                </div>
                <div className='right'>
                    <div className='mcur_box'>
                        <img src={mcur}/>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Features