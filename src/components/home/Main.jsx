import { useState } from "react";
import TodoApp from "./TodoApp";
import StopWatch from "./StopWatch";


export default function Main(){
    let todoSetting = [
        {
            id : 1,
            title : "React Todo List",
            isActive : false
        },
        {
            id : 2,
            title : "Vue Todo List",
            isActive : false
        }
    ] 

    // let todoApp = todoSetting.map((item) => (
    //     item.isActive ? <TodoApp key={item.id} todoSetting={item}/> : ''
    // ))

    return(
        <>
            <div className="bg-gray-100 pt-5">
                <StopWatch />
                { todoSetting.map((item) => (item.isActive ? <TodoApp key={item.id} todoSetting={item}/> : '' )) }
            </div>
            
        </>
    )
}