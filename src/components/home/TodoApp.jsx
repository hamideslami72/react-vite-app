import { useState } from "react";
import TodoListApp from "./TodoListApp";

function TodoApp({todoSetting}) {

    let todoListItem = [
        {
            id : 1,
            title : "Tailwind CSS To DO App List 1",
            state: true,
        },
        {
            id : 2,
            title : "Tailwind CSS To DO App List 2",
            state: false,
        },
    ]

    const [newTodoListItem, setTodo] = useState(todoListItem) 

    function addTodo(e){
        if(e.key ==="Enter"){
            
            const name = e.target.name;
            const value = e.target.value;
            console.log(value)
    // setInputs(values => ({...values, [name]: value}))
        }
    }

  return (
    <>
      
      <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> {todoSetting.title}</h1>
                </div>
                <div className="relative">
                    <input type="text" name="todo" placeholder="What needs to be done today?"
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" 
                    onKeyDown={addTodo}
                    />
                </div>
                <TodoListApp key={todoListItem.id} todos={newTodoListItem}/>
            </div>
        </div>
    
    </>
  );
}

export default TodoApp;