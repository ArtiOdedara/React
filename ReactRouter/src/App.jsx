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
import InternationalPatients from './Components/PatientCare/InternationalPatients'
import FindDoctor from './Components/PatientCare/FindDoctor'
import Location from './Components/Hospitals/Location'
import Infrastucture from './Components/AboutUs/Infrastructure'
import Home from './Components/Home'


function App() {
  
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/patient-care' element={<PatientCare/>}></Route>
        <Route path='/about-us' element={<AboutUs/>}></Route>
        <Route path='/health-information' element={<HealthInformation/>}></Route>
        <Route path='/hospitals' element={<Hospitals/>}></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/patient-care/international-patients' element={<InternationalPatients/>}></Route>
        <Route path='/patient-care/find-doctor' element={<FindDoctor/>}></Route>
        <Route path='/hospitals/location' element={<Location/>}></Route>
        <Route path='/about-us/infrastructure' element={<Infrastucture/>}></Route>
      </Routes>
    </>
  )
}

export default App
