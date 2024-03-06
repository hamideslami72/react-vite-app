import TodoListItem from "./TodoListItem";

function TodoListApp({todos}){
    
    return(
        <>
            <ul className="list-reset">
                { todos.map((item) => ( <TodoListItem key={item.id} todo={item} />)) }
            </ul>
        </>
    )
}

export default TodoListApp;