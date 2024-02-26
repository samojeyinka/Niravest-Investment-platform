import React from 'react'
import {showCaseImg,bg,shape3, path4} from '../assets/assets'
import '../stylesheets/Showcase.css'

const showCase = () => {
  return (
    <section className='showcase'>
        <div className='showcase_img_box'>
             <img src={showCaseImg} className='showcase_img'/>
             <div className='scattered'>
    <img src={shape3} className='shape3'/>
    <img src={path4} className='path4'/>
    
</div>
        </div>
        <div className='bg-img'>
<img src={bg} className='bg-img'/>
</div>
    </section>
  )
}

export default showCase