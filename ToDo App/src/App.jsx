import { useState } from 'react'
import InputForm from './components/Form' 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h3>ToDo App</h3>
    <InputForm />
    </>
  )
}

export default App
