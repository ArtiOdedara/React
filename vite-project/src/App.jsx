import { useState } from 'react'

import './App.css'
import  List from './List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(0) }>Reset</button>
      <button onClick={() => setCount(prev => prev+1 )}>Increment</button>
      <button onClick={() => setCount(prev =>  prev-1 )}>Decrement</button>
      <hr />
      <List count = {count}/>
    </>
  )
}

export default App
