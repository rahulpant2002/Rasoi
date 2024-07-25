import { useContext } from "react";
import UserContext from "../utils/UserContext";

const UserNameBar = ()=>{
    const {loggedinUser, setUserName} = useContext(UserContext);
    return(
        <div>
            <label cla  ssName="font-semibold">User Name: </label>
            <input type="text" className="border-black placeholder:italic placeholder:font-semibold pl-2 rounded-[4px] border-[3px]  focus:outline-blue-500 mr-1 font-medium"
            placeholder="Enter Your Name..." value={loggedinUser} onChange={(e)=>{
                    setUserName(e.target.value.toUpperCase());
                }}/>
        </div>
    )
}
export default  UserNameBar;