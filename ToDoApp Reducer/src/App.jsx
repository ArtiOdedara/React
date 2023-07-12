import { createContext, useReducer, useState } from 'react'
import './App.css'
import Form from './Form';
import ListNotes from './ListNotes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const ToDoContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [
        ...state, 
        {
          id: state.length,
          message: action.data
        }
      ]
    case "Remove":
      return state.filter((element)=> element.id !== action.id)
    case "Edit":
      return state.map((element) => element.id === action.id ? {...element, message: action.data} : element )
    default:
      break;
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, [])
  return (
    <>
      <ToDoContext.Provider value={{todos: todos, dispatch: dispatch}}>
        <Form/>
        <ListNotes/>
      </ToDoContext.Provider>
    </>
  )
}

export default App
