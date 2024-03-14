import { useEffect, useState } from "react"


export default function useOnlineStatus(){

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

    return isOnline;
}