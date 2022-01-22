import { useRef } from "react";

function Todo ({children, handleDelete,id,handleComplete,isCompleted}){
const elHeader =  useRef();

return <li>
    <span ref={elHeader} style={{textDecoration: isCompleted && "line-through"}}>{children}</span>

    <input  checked={isCompleted} type="checkbox" data-todo-id={id} onChange={handleComplete} />
    <button  data-todo-id={id} onClick={handleDelete}>Delete</button>
    <button onDoubleClick={() =>{
        elHeader.current.style.backgroundColor="red"
    }}>add</button>
</li>
}

export default Todo;