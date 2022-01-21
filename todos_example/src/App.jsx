import { useState } from 'react';
import './App.css';
import Todo from './Components/TodoComponents';

function App() {

const [todos,setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [] );

const handleDelete = (evt) =>{
    // console.log(evt.target.dataset.todoId);
    const todoId  = evt.target.dataset.todoId - 0;

    const filterTodos = todos.filter((row) => row.id !== todoId);
    // console.log(filterTodos, "alo")
    setTodos([...filterTodos]);

    
    window.localStorage.setItem("todos",JSON.stringify([...filterTodos]));
    
}


return ( 
      <>
          <input 
              onKeyUp={(evt)=>{
                  if(evt.code === "Enter"){
                    
                      const newTodo = {
                          id: todos[todos.length-1]?.id + 1 || 0,
                          title: evt.target.value,
                          isCompleted: false
                      };
                      setTodos([...todos,newTodo]);

                      window.localStorage.setItem("todos",JSON.stringify([...todos,newTodo]));
                      evt.target.value = null;

          }

          }} 
          type="text"
          placeholder="todo..."
           />


          <ul>
                {todos.map((row) =>(
             <Todo handleDelete={handleDelete} key={row.id} id={row.id} >
                 {row.title}
                  </Todo>
                ))}
          </ul>
</>

);
}

export default App;