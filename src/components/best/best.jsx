import React from 'react'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import './best.css'

function Best() {
  return (
    <div className='best'>
        <h2>Find Best Rated Properties</h2>
        <div className="choose">
            <p><b>All</b></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricultural</p>
        </div>
        <div className="image">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
        </div>
        <button>View All</button>
    </div>
  )
}

export default Best