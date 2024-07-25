import { useContext } from "react"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"

export const Contact = ()=>{
    const {loggedinUser} = useContext(UserContext);

    return (
        <div className="text-center text-pink-800 text-lg h-[100vh]">
            <h1 className="font-bold">{loggedinUser}</h1>
            <h1>For more Information Contact us -:</h1>
            <div className="flex justify-center font-bold">
                <h3>Mail -</h3>
                <Link to="mailto:rahulpant2002@gmail.com"> rahulpant2002@gmail.com </Link>
            </div>    
            <div className="flex justify-center font-bold">
                <h3>Contact No -</h3>
                <Link to="tel: 8756254739"> 8756254739 </Link>
            </div>    

        </div>
    )
}