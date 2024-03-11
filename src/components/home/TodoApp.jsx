import { useEffect, useState } from "react";
import TodoListApp from "./TodoListApp";
import CreateTodoInput from "./CreateTodoInput";

function TodoApp({todoSetting}) {

    const [todoListItem, setTodoListItem] = useState([]) 

    let i = todoListItem.length + 1

    const addNewTodoHandler = (todoTitle) =>{
        i += 1
        let newTodo = [
            ...todoListItem,
            {
                id: i,
                title: todoTitle,
                state: false
            }
        ]
        setTodoListItem(newTodo)
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

    useEffect(() => {
        setTodoListItem(JSON.parse(localStorage.getItem('todos_list')) ?? [])
    }, [])

    useEffect(() =>{
        localStorage.setItem('todos_list', JSON.stringify(todoListItem))
    }, [todoListItem])

  return (
    <>  
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> {todoSetting.title}</h1>
                </div>
                <CreateTodoInput addNewTodoHandler={addNewTodoHandler} />
                <TodoListApp key={todoListItem.id} todos={todoListItem} deleteTodo={deleteTodo} changeChecked={onChangeCheckedHandler} updateTodo={updateTodo} />
            </div>
        </div>
    </>
  );
}

export default TodoApp;