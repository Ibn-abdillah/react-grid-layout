import React from 'react'
import house1 from '../../assets/house1.jpg'
import bed1 from '../../assets/bed1.jpg'
import bed2 from '../../assets/bed2.jpg'
import bath1 from '../../assets/bath1.jpg'
import dinning from '../../assets/dinning.jpg'

import house2 from '../../assets/house2.jpg'
import bed3 from '../../assets/bed3.jpg'
import bed4 from '../../assets/bed4.jpg'
import kitchen from '../../assets/kitchen.jpg'
import sitting from '../../assets/sitting.jpg'

import './feature.css';

function Feature() {
  return (
    <div className='grid'>
        <h2>Top Featured Listings</h2>
        <p className='text'>Selected listings by city, state and Zip based on views</p>
        <div className="content">
            <img src={house1} alt="" />

            <div className="small-img">
                <img src={bed1} alt="" />
                <img src={bed2} alt="" />
                <img src={dinning} alt="" />
                <img src={bath1} alt="" />
            </div>

            <div className="col-1">
                <div className="inner-text">
                    <h4>123 Ache Dallas, TY</h4>
                    <p>House for sale</p>
                    <p className='green'><b>$2,667,000</b></p>
                </div>
                <div className="inner-text">
                    <h4>Bedrooms</h4>
                    <p>5</p>
                    <p><b>Square feet</b></p>
                    <p>8,138</p>
                </div>
                <div className="inner-text">
                    <h4>Bathrooms</h4>
                    <p>7</p>
                    <p><b>First payment</b></p>
                    <p><b>$10,000/Annual</b></p>
                </div>
            </div>

            <div className="col-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                   Nesciunt asperiores, perferendis tempore debitis itaque nihil, 
                   quibusdam nobis ipsum laudantium obcaecati aspernatur adipisci. 
                   Incidunt tempora.</p>
                   <button>View More</button>
            </div>
        </div>

        <div className="content section-two">
            <div className="small-img">
                <img src={bed3} alt="" />
                <img src={bed4} alt="" />
                <img src={kitchen} alt="" />
                <img src={sitting} alt="" />
            </div>

            <img src={house2} alt="" />

            <div className="col-2">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                   Nesciunt asperiores, perferendis tempore debitis itaque nihil, 
                   quibusdam nobis ipsum laudantium obcaecati aspernatur adipisci. 
                   Incidunt tempora.</p>
                   <button>View More</button>
            </div>

            <div className="col-1">
                <div className="inner-text">
                    <h4>123 Ache Dallas, TY</h4>
                    <p>House for sale</p>
                    <p className='green'><b>$2,667,000</b></p>
                </div>
                <div className="inner-text">
                    <h4>Bedrooms</h4>
                    <p>5</p>
                    <p><b>Square feet</b></p>
                    <p>8,138</p>
                </div>
                <div className="inner-text">
                    <h4>Bathrooms</h4>
                    <p>7</p>
                    <p><b>First payment</b></p>
                    <p><b>$10,000/Annual</b></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature