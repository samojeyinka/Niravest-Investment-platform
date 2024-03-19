import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className='page-not-found'>
            <div className='pnf-con'>
                    <h2>404</h2>
                    <h3>THE PAGE</h3>
                    <p>is Not Found</p>
                    <Link to={"/"}><button>Back To Home</button></Link>
            </div>
    </section>
  )
}

export default PageNotFound