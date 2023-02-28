import React from 'react'
import './navbar.css'
import { useState } from 'react'

import { FaHome } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
  const [open , setOpen] = useState(false)
  const clickMenuBtn = () => setOpen(!open)
  const close = () => setOpen(false)

  return (
    <div className='navbar'>
      <nav>
        <h1><span><FaHome/>Real</span>Estate</h1>
        <button>Sign In</button>

        <ul className={open ? 'nav-menu active' : 'nav-menu'}>
            <li><a href="#" onClick={close}>Home</a></li>
            <li><a href="#" onClick={close}>Search</a></li>
            <li><a href="#" onClick={close}>About</a></li>
            <li><a href="#" onClick={close}>Contact</a></li>
        </ul>

        <div className="hamburger" onClick={clickMenuBtn}>
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>
    </div>
  )
}

export default Navbar

