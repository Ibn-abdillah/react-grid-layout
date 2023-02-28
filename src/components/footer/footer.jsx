import React from 'react'
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { BsTwitter, BsPinterest } from 'react-icons/bs'

import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="icons">
        <AiFillFacebook className='icon'/>
        <AiOutlineInstagram className='icon'/>
        <BsTwitter className='icon'/>
        <BsPinterest className='icon'/>
      </div>

      <div className="content">
        <div className="col-1 cols">
            <h4>About</h4>
            <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Details</a></li>
                <li><a href="#">Planning</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>

        <div className="col-2 cols">
            <h4>Company</h4>
            <ul>
                <li><a href="#">Future</a></li>
                <li><a href="#">Employment</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Programs</a></li>
            </ul>
        </div>

        <div className="col-3 cols">
            <h4>Legal</h4>
            <ul>
                <li><a href="#">Hiring</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Policies</a></li>
                <li><a href="#">Advertising</a></li>
            </ul>
        </div>

        <div className="col-4 cols">
            <h4>Information</h4>
            <ul>
                <li><a href="#">Developers</a></li>
                <li><a href="#">Funding</a></li>
                <li><a href="#">Financial</a></li>
                <li><a href="#">Donation</a></li>
            </ul>
        </div>
      </div>

      <div className="copy">
        <small>&copy; Designed by Ibn-Abdillah</small>
      </div>
    </div>
  )
}

export default Footer