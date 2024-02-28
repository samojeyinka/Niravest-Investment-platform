import React from 'react';
import '../stylesheets/Download.css';
import {phoneFrame,platform,appstore,playstore} from '../assets/assets';

const Download = () => {
  return (
    <div className='dl-section'>

        <div className='dl-container'>

            <div className='dl-left'>       

            <h2>Download our app to get most out of it</h2>
            <p>Experience the Next Level of Investment Management: Download Our App Today to Seamlessly Navigate and Maximize Your Investment Portfolio. Gain Access to Exclusive
               Features and Insights Tailored to Your Financial Goals.</p>

             <div className='dl-images'>
                <img src={playstore}/>
                <img src={appstore}/>

             </div>

            </div>

            <div className='dl-right'>
            <img src={platform}/>

            </div>

        </div>

    </div>
  )
}

export default Download;