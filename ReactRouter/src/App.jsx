import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import PatientCare from './Components/PatientCare'
import AboutUs from './Components/AboutUs'
import HealthInformation from './Components/HealthInformation'
import Hospitals from './Components/Hospitals'
import ContactUs from './Components/ContactUs'


function App() {
  
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/patient-care' element={<PatientCare/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/health-information' element={<HealthInformation/>}></Route>
        <Route path='/hospitals' element={<Hospitals/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
      </Routes>
    </>
  )
}

export default App
