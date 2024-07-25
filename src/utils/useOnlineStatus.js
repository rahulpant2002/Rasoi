import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    
    useEffect(()=>{
        window.addEventListener('online', ()=>{
            setIsOnline(true);
        });
    
        window.addEventListener("offline", ()=>{
            setIsOnline(false);
        })
    }, [])

    return isOnline;
}

export default useOnlineStatus;