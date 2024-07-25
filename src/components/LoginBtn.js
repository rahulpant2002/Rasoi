import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const LoginBtn = ()=>{
    const [currState, setCurrState] = useState("Login");
    const {setUserName} = useContext(UserContext)
    return(
        <button className="h-[40px] border-[2px] p-1 bg-slate-300 rounded-md border-black" onClick={()=>{
            if(currState==="Login"){
                setCurrState("Logout");
                setUserName("RAHUL PANT")
            }
            else {
                setCurrState("Login")
                setUserName("");
            }
        }}>{currState}</button>
    );
}
export default LoginBtn;