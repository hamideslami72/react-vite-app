import TodoListItem from "./TodoListItem";

function TodoListApp({todos, deleteTodo, changeChecked}){
    
    return(
        <>
            <ul className="list-reset">
                { todos.map((item) => ( <TodoListItem key={item.id} todo={item} deleteTodo={deleteTodo} changeChecked={changeChecked} />)) }
            </ul>
        </>
    ) 
}

export default TodoListApp;