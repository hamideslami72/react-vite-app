import { useEffect, useState } from "react"


export default function useSearch(value, delay){

    const [debounceValue, setDebounceValue] = useState('')

    useEffect(() => {

        let setTimeOutId = setTimeout( () => {
            setDebounceValue(value)
        }, delay)

        return() => {
            clearTimeout(setTimeOutId)
        }

    }, [value])

    return debounceValue;

}