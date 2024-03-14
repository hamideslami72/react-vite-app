import { useState } from "react";


export default function useFormInput(initialValue){

    const [value , setValue] = useState(initialValue)

    const onchangeHandler = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange: onchangeHandler
    }

}