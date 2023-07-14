import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css'

function Navbar() {
  return (
    <>
      <nav className= 'navbarNav'>
        <ul className='navbarUl'>
          <li className='navbarLi'><Link to={'/patient-care'}>Patient Care</Link></li>
          <li className='navbarLi'><Link to={'/about-us'}>About Us</Link></li>
          <li className='navbarLi'><Link to={'/health-information'}>Health Information</Link></li>
          <li className='navbarLi'><Link to={'/hospitals'}>Hospitals</Link></li>
          <li className='navbarLi'><Link to={'contact-us'}>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar