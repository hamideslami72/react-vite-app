import { useState } from "react";
import TodoApp from "./TodoApp";
import SearchInput from "./SearchInput";
import StopWatch from "./StopWatch";
import Video from "./Video";
import StatusUser from "./StatusUser";


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

    return(
        <>
            <div className="bg-gray-100 pt-5">
                {/* <StopWatch /> */}
                {/* <Video /> */}
                {/* <StatusUser /> */}
                <SearchInput />
                { todoSetting.map((item) => (item.isActive ? <TodoApp key={item.id} todoSetting={item}/> : '' )) }
            </div>
        </>
    )
}