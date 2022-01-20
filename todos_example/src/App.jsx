import { useState } from 'react';
import './App.css';

function App() {

const [todos,setTodos] = useState([
{id:1, title: "code yozdim", isCompleted: true},
{id:2, title: "code yozmadim", isCompleted: true}
])
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
          }

          }} 
          type="text"
          placeholder="todo..."
           />


          <ul>
                {todos.map((row) =>(
                   <li key={row.id}>
                      {row.title} 
          </li>
                ))}
          </ul>
</>

);
}

export default App;