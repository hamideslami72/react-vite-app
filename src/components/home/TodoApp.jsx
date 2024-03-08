import { useState } from "react";
import TodoListApp from "./TodoListApp";

function TodoApp({todoSetting}) {

    const [todoListItem, setTodoListItem] = useState([
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
    ]) 

    const [newTodoTitle, setNewTodoTitle] = useState('')

    const onInputNewTodoChangeHandler = (event) => {
        setNewTodoTitle(event.target.value)
    }

    let i = todoListItem.length

    const addNewTodo = (event) =>{

        if(event.key ==="Enter" && newTodoTitle != ""){
            i += 1
            setTodoListItem([
                ...todoListItem,
                {
                    id: i,
                    title: newTodoTitle,
                    state: false
                }
            ])

            setNewTodoTitle('')
        }
    }

    const deleteTodo = (todo) => {
        let newTodoList = todoListItem.filter( (item) => {
            return todo.id != item.id 
        })
        setTodoListItem(newTodoList)
    }

    const updateTodo = (todo, newTodoTitle) => {
            let newTodoList = todoListItem.map((todoItem) => {
                if(todo.id === todoItem.id){
                    todoItem.title = newTodoTitle
                }
    
                return todoItem
            })
    
            setTodoListItem(newTodoList)
    } 

    const onChangeCheckedHandler = (todo) => {
        let newTodoList = todoListItem.map((todoItem) => {
            if(todo.id === todoItem.id){
                todoItem.state = !todoItem.state
            }

            return todoItem
        })

        setTodoListItem(newTodoList)
    }

  return (
    <>
      
      <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> {todoSetting.title}</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" 
                    onKeyDown={addNewTodo}
                    onChange={onInputNewTodoChangeHandler}
                    value={newTodoTitle}
                    />
                </div>
                <TodoListApp key={todoListItem.id} todos={todoListItem} deleteTodo={deleteTodo} changeChecked={onChangeCheckedHandler} updateTodo={updateTodo} />
            </div>
        </div>
    
    </>
  );
}

export default TodoApp;