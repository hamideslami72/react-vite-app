import { useEffect, useState } from "react"


export default function SearchInput(){

    const [searchTerm, setSearchTerm] = useState('')
    const [debounceValue, setDebounceValue] = useState('')

    useEffect(() => {

        let setTimeOutId = setTimeout(()=>{
            setDebounceValue(searchTerm)
        }, 1000)

        return() => {
            clearTimeout(setTimeOutId)
        }

    }, [searchTerm])

    useEffect(() => {
        
        if(searchTerm != ''){
            console.log(`Send Request Ajax ${searchTerm}`)
        }

    } , [debounceValue])

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600">Search Input</h1>
                </div>
                <input 
                    type="text" 
                    className="w-full py-2 px-4 border border-purple-200" 
                    placeholder="What do you want?"
                    onChange={(event) => {setSearchTerm(event.target.value)}}
                />
            </div>
        </div>
    )
}