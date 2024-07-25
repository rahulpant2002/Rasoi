import { Search_Icon } from "../utils/constant";
import { useState } from "react";

const SearchBar = ({listOfRest, setFilterRest})=>{
    const [searchText, setSearchText] = useState("");

    const searchRest = ()=>{
        const filtered = listOfRest.filter((rest)=>rest?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterRest(filtered);
    }

    return(
        <div>
            <input type="text" className="border-black placeholder:italic placeholder:font-semibold pl-2 rounded-[4px] border-[3px]  focus:outline-blue-500 mr-1 font-medium" placeholder="Search Restaurant..." value={searchText} 
                    onChange={(e)=>{
                        setSearchText(e.target.value);}} 
                    onKeyDown={(e)=>{
                        if(e.key==='Enter'){
                            searchRest()
                        }
                    }}/>

                    <button  onClick={()=>{
                        searchRest();
                    }}><img src={Search_Icon} alt="icon" className=" w-4 h-4" /></button>

        </div>

    )
}
export default SearchBar;