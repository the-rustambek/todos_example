function Todo ({children, handleDelete,id}){
return <li>
    <span>{children}</span>

    <button data-todo-id={id} onClick={handleDelete}>Delete</button>
</li>
}

export default Todo;