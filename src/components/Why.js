import React from 'react'
import { divider, menu,line,line2, wallet, judge,chart } from '../assets/assets'
import '../stylesheets/Why.css';
const Why = () => {
  return (
    <section className='why'>
        <div className='why_flex'>
        <div className='pros_top'>
                    <h2>These are why you should use Niravest</h2>
                    <p>Discover the reasons why Niravest is your top choice, offering unparalleled features, reliability, and support for your investment journey.</p>
                    <img src={divider} />
            </div>
            <div className='why_btm'>
                <div className='why_btm_left'>
                    <div className='why_box first_box'>
                        <img src={menu}/>
                        <h5>Lots Choices</h5>
                        <img src={line}/>
                        <p>There are various types of investments available and you can choose investments.</p>

                    </div>
                    <div className='why_box'>
                        <img src={chart}/>
                        <h5>High Profit</h5>
                        <img src={line}/>
                        <p>The money or assets will gradually grow or increase in value within a certain period.</p>
                    </div>
                    <img src={line2} className='middle_line'/>
                </div>
                <div className='why_btm_right'>
                <div className='why_box second_box'>
                        <img src={wallet}/>
                        <h5>Minimal Risk</h5>
                        <img src={line}/>
                        <p>Interest rate risk in the risk that arises because the relative value.</p>
                    
                    </div>
                    <div className='why_box'>
                        <img src={judge}/>
                        <h5>Legal</h5>
                        <img src={line}/>
                        <p>Our platform has been verified and supervised by related institutions.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Why