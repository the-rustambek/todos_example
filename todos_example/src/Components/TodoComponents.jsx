function Todo ({children, handleDelete,id,handleComplete,isCompleted}){
return <li>
    <span style={{textDecoration: isCompleted && "line-through"}}>{children}</span>

<input checked={isCompleted} type="checkbox" data-todo-id={id} onChange={handleComplete} />
    <button data-todo-id={id} onClick={handleDelete}>Delete</button>
</li>
}

export default Todo;