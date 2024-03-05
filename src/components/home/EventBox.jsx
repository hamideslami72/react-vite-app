export default function EventBox(props){
    return(
        <div>
            <h4>{props?.course?.title}</h4>
            <p>{props?.course?.description}</p>
        </div>
    )
}