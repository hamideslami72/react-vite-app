import { useState } from "react";
import EventBox from "./EventBox";
import EventList from "./EventList";

export default function Main(){
    
    let course = [
        "AmirAli Eslmai",
        "Reza Eslami", 
        "Hamid Eslami"
    ]

    let courseList = [
        {
            id: 1,
            title: "Learning PHP",
            description: "THis Description Learnin PHP 8.2"
        },
        {
            id: 2,
            title: "Learning Laravel",
            description: "THis Description Learnin Laravel 10"
        },
        {
            id: 3,
            title: "Learning Javascript",
            description: "THis Description Learnin Javascript"
        }
    ]

    const [courses, setCourses] = useState(courseList)

    const [loading, setLoading] = useState(false)

    function loadMoreList(){
        setLoading(true)
        setInterval(() => {
            setCourses(prevState => 
                [
                    ...courses,
                    {
                        id: 4,
                        title: "Learning ReactJs",
                        description: "THis Description Learnin ReactJs"
                    },
                    {
                        id: 5,
                        title: "Learning VueJs",
                        description: "THis Description Learnin VueJs"
                    }
                ]
            )
            setLoading(false)
        }, 3000);
    }

    let newCourse = courses.map((item) => (
        <EventBox key={item.id} course={item} />
    ))
    return(
        <>
            <EventList>
                { newCourse }
            </EventList>

            {
                loading 
                ? <span> Loading ... </span>
                : <button onClick={loadMoreList}>load more</button>
            }
            
        </>
    )
}