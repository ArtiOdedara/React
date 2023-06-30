import React from 'react'
import './App.css'
import  ComponentB from './ComponentB'
import UseReducer from './UseReducer'

export const UserContext = React.createContext() 
export const OccupationContext = React.createContext()

function App() {
  return (
    <>
      <div className='App'>
        <UserContext.Provider value={'Arti'}>
          <OccupationContext.Provider value={'Software Engineer'}>
            <ComponentB />
          </OccupationContext.Provider>
        </UserContext.Provider>
      </div>
      <div>
        <UseReducer />
      </div>
    </>
  )
}

export default App
