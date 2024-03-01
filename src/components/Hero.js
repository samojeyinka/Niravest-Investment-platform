import React from 'react'
import { Link } from 'react-router-dom'
import { playCircle,path1, shape1, path2, bg, path3, shape2 } from '../assets/assets'
import '../stylesheets/Hero.css'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero_flex'>
            <h1>We make it easy for everyone to invest</h1>
            <p>We specialize in providing investment services, encompassing various finance and economics meanings. We strategically accumulate assets, anticipating future profits and returns.
            </p>

            <div className='action_btns'>
                <Link to={'/signup'}><button>Get Started</button></Link>
                <Link>
                <img src={playCircle}/>
                <span>Watch Demo</span>
                
                </Link>
            </div>
        </div>
        <div className='scattered'>
    <img src={path1} className='pathone'/>
    <img src={shape1} className='shapeone'/>
    <img src={path2} className='pathtwo'/>
    <img src={path3} className='paththree'/>
    <img src={shape2} className='shapetwo'/>
    
</div>

<div className='bg-img'>
<img src={bg} className='bg-img'/>
</div>
    </section>
  )
}

export default Hero