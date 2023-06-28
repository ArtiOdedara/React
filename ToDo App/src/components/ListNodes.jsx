import {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "../ListNodes.css"
import EditNote  from "./EditNote"


function listNodes(props){
  const [checked, setChecked] = useState(false); 

  function completeTask(index, isChecked){
    const newTasks = [...props.todos]
    if(isChecked){
      newTasks[index].completed = true
    }else{
      newTasks[index].completed = false
    }
    setChecked(isChecked)
  }

  function removeTask(index){
    const newTasks = [...props.todos]
    newTasks.splice(index, 1)
    props.setTodos(newTasks)
  }

  const handleEdit = (index, input) => {
      const newTasks = [...props.todos]
      newTasks[index].value = input 
      props.setTodos(newTasks)
  }

  return(
    <>
      <div>
        { props.todos.map((note, index) => (
          <div className="allNotes">
            <input type="checkbox"  className="taskCheckbox" onChange={(e) => {
                completeTask(index, e.target.checked)}} />

            <span id="noteText" style={{ textDecoration: note.completed ? "line-through" : "" }}>
              {note.value}</span>

            <EditNote index= {index} message={note.value} handleEdit = {handleEdit}/>

            <button className="removeBtn" onClick={()=> removeTask(index)}><FontAwesomeIcon icon={faTrash} className="trashIcon" /></button>
          </div>
        ))
        }
      </div>
    </>
  )

}

export default listNodes;
