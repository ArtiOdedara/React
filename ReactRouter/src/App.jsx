import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import PatientCare from './Components/PatientCare'
import AboutUs from './Components/AboutUs'
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
        <Route path='patient-care' element={<PatientCare/>}>
          <Route path='international-patients' element={<InternationalPatients/>}/>
          <Route path='find-doctor' element={<FindDoctor/>}/>
        </Route>
        <Route path='about-us' element={<AboutUs/>}>
          <Route path='infrastructure' element={<Infrastucture/>}></Route>
        </Route>
        <Route path='hospitals' element={<Hospitals/>}>
          <Route path='location' element={<Location/>}></Route>
        </Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
      </Routes>
    </>
  )
}

export default App
