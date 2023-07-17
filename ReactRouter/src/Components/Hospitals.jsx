import React from 'react'
import { Outlet } from 'react-router-dom'

function Hospitals() {
  return (
    <>
      <div>Hospitals</div>
      <Outlet/>  
    </>
  )
}

export default Hospitals