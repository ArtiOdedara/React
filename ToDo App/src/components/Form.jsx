import React,{useState} from 'react' 
import ListNodes from './ListNodes';

function inputForm(){
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return ;

    addNote(value);
    setValue("");
  }

  const addNote = (value) => {
    const newTask = [...todos, {value, completed: false}];
    setTodos(newTask);
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="noteText" id="noteText" value={value} onChange={e => setValue(e.target.value)} />
        <input type="submit" name="submitNote" id="submitNote" value="Add"/>
      </form>

      <ListNodes todos = {todos} setTodos= {setTodos}/>
    </>
  )

}

export default inputForm;