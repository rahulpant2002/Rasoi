import { useEffect } from "react"
import { MENU_API } from "./constant";
import { useState } from "react";

const useRestMenu = (restId)=>{
    const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
        fetchData(restId);
    }, [])

    const fetchData = async(restId)=>{
        const data = await fetch(MENU_API + restId );
        const json = await data.json();
    
        setRestInfo(json.data);
    }
    return restInfo
}
export default  useRestMenu;
