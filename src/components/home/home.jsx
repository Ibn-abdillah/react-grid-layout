import React from 'react'
import { FaSearch } from 'react-icons/fa'

import './home.css'

function Home() {
  return (
    <div className='home'>
        <div className="content">
            <h1>Find The Perfect Place</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               Nulla vitae beatae perspiciatis dignissimos, consequuntur 
               distinctio consectetur odio in, dolorum quibusdam tenetur 
               perferendis Delectus sint quae recusand.</p>
         
            <form action="">
                <input type="email" placeholder='Enter your email' />
            
                <div className="btn">
                <input type="radio" name='click' />
                <label>Buy</label>
                <input type="radio" name='click' />
                <label>Rent</label>
                <button type='submit'><FaSearch className='search' /></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Home