import { useEffect, useState } from "react"


export default function StatusUser(){

    const [isOnline , setIsOnline] = useState(true)

    useEffect(() => {

        function onlineHandler(){
            setIsOnline(true)
        }

        function offlineHandler(){
            setIsOnline(false)
        }

        window.addEventListener('online', onlineHandler)
        window.addEventListener('offline', offlineHandler)

        return() => {
            window.removeEventListener('online', onlineHandler)
            window.removeEventListener('offline', offlineHandler)
        }
        
    } , [])

    return(
        <div className="grid grid-row gap-4 items-center justify-center py-4 bg-cyan-200 w-1/5 mx-auto">
            <div className="">
                <p className="font-bold text-xl">{isOnline ? 'USer Is Online' : 'User Is Offline'}</p>
            </div>
            <div className="flex gap-2">
                <button className={`py-1 px-4 ${isOnline ? 'bg-green-500' : 'bg-rose-700'} text-white rounded`}>{isOnline ? 'Online' : 'Offline'}</button>
                <button className="py-1 px-4 bg-violet-700 text-white rounded">Reset</button>
            </div>
        </div>
    )
} 