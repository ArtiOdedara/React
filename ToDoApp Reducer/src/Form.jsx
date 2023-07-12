import React, { useContext, useState } from 'react'
import { ToDoContext } from './App'
import './Form.css'

function Form() {
  const {todos, dispatch} = useContext(ToDoContext)
  const [note, setNote] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inside");

    dispatch({type: "Add", data: note})
    setNote("")
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className='addForm'>
          <input type="text" name="note" id="note" value={note} onChange={e => setNote(e.target.value)} />
          <button type='submit' className='addBtn '>Add</button>
        </form>
      </div>
    </>
  )
}

export default Form