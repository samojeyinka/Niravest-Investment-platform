import React from 'react'
import { button, graph, layers, mcur, phoneFrame, smartphone, star } from '../assets/assets'
import '../stylesheets/Features.css'

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
            <div className='feature_box second'>
        
                <div className='right'>
                    <div className='mcur_box'>
                        <img src={phoneFrame}/>
                    </div>
                </div>

                <div className='left'>
                    <div className='f_icon_box'>
                    <img src={layers}/>
                    </div>
                    <h4>Plan Your Expenses Based on Your Profits.</h4>
                    <p>Strategic Expense Planning: Maximizing Profit by Aligning Your Budget with Your Financial Goals and Business Strategy.</p>    
                    <img src={button}/>
                </div>

            </div>
            <div className='feature_box'>
                <div className='left'>
                    <div className='f_icon_box'>
                    <img src={star}/>
                    </div>
                    <h4>Chart to see your profit grow.</h4>
                    <p>Track Profit Growth: A Visual Guide to Monitoring Your Financial Success and Investment Returns.</p>    
                    <img src={button}/>
                </div>
                <div className='right'>
                    <div className='mcur_box'>
                        <img src={graph} className='graph'/>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Features