import {useState} from "react";

function listNodes(props){
  const [checked, setChecked] = useState(false); 

  function completeTask(index, isChecked){
    const newTasks = [...props.todos];
    if(isChecked){
      newTasks[index].completed = true; 
    }else{
      newTasks[index].completed = false;
    }
    setChecked(isChecked)
  }

  function removeTask(index){
    const newTasks = [...props.todos]
    newTasks.splice(index, 1);
    props.setTodos(newTasks)
  }

  return(
    <>
      <div>
        { props.todos.map((note, index) => (
          <div>
            <input type="checkbox"  onChange={(e) => {
                completeTask(index, e.target.checked)
            }} />
            <span id="noteText" style={{ textDecoration: note.completed ? "line-through" : "" }}>
              {note.value}</span>
            <button onClick={()=> removeTask(index)}>X</button>
        </div>
        ))
        }
      </div>
    </>
  )

}

export default listNodes;
