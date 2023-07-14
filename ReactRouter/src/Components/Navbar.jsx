import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar.css'

function Navbar() {
  const handleDisplay = (eleId) => {
    document.getElementById(eleId).style.display = 'block'
  }
  const handleDisplayNone = (eleId) => {
    document.getElementById(eleId).style.display = 'none'
  }
  return (
    <>
      <nav className= 'navbarNav'>
        <ul className='navbarUl'>
          <li className='navbarLi' onMouseOver={() => handleDisplay('subNavbar1')} onMouseLeave={() => handleDisplayNone('subNavbar1')}><Link to={'/patient-care'}>Patient Care</Link>
            <ul className='subNavbar' id='subNavbar1'>
              <li><Link to={'/patient-care/international-patients'}>International Patients</Link></li>
              <li><Link to={'/patient-care/find-doctor'}>FInd a Doctor</Link></li>
            </ul>
          </li>

          <li className='navbarLi' onMouseOver={() =>handleDisplay('subNavbar2')} onMouseLeave={() => handleDisplayNone('subNavbar2')}><Link to={'/about-us'}>About Us</Link>
            <ul className='subNavbar' id='subNavbar2'>
              <li><Link to={'/about-us/infrastructure'}>Infrastucture</Link></li>
            </ul>
          </li> 

          <li className='navbarLi' onMouseOver={() => handleDisplay('subNavbar3')} onMouseLeave={() => handleDisplayNone('subNavbar3')}><Link to={'/hospitals'}>Hospitals</Link>
            <ul className='subNavbar' id='subNavbar3'>
              <li><Link to={'/hospitals/location'}>Location</Link></li>
            </ul>
          </li>


          <li className='navbarLi'><Link to={'contact-us'}>Contact Us</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar