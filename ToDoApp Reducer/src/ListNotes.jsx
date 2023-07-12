import React, { useContext } from 'react'
import { ToDoContext } from './App'
import EditNote from './EditNote'
import './ListNotes.css'


function ListNotes() {
  const {todos, dispatch} = useContext(ToDoContext)

  const handleDelete = (elementId) => {
    dispatch({
      type: "Remove",
      id: elementId
    })
  }

  return (
    <>
      <div>
        {
          todos.map((element) => (
            <>  
              <div className='allData'>
                <p title={element.message} key={element.id} className='noteText'>{element.message}</p>
                <div className='btns'>
                  <EditNote element={element} />
                  <button className='removeBtn' onClick={()=> handleDelete(element.id)}>Remove</button>
                </div>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default ListNotes