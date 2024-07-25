import Shimmer from "./Shimmer";
import ResCard, {promotedCard} from "./ResCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useALLRestInfo from "../utils/useAllRestInfo";

import SearchBar from "./SearchBar";
import TopRatedRest from "./TopRatedRest";
import UserNameBar from "./UserNameBar";

const Body = ()=>{
  const [listOfRest, setListOfRest] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  
  // Higher Order Component
  const RestCardPromoted = promotedCard(ResCard);

  const isOnline = useOnlineStatus();
  
  useALLRestInfo(setFilterRest, setListOfRest);
  
  if(!isOnline){
    return(
      <div className="flex flex-col items-center justify-center h-[100vh] font-semibold text-lg bg-gradient-to-tr from-[#d16ba5] via-[#c777b9] via-[#ba83ca] via-[#aa8fd8] via-[#9a9ae1] via-[#8aa7ec] via-[#79b3f4] via-[#69bff8] via-[#52cffe] via-[#41dfff] via-[#46eefa]  to[#5ffbf1]">
        <div>Oops!!! Seems You are Offline...</div>
        <div>Check your Internet Connection...</div>
      </div>
    )
  };

  if(listOfRest.length === 0){
    return <Shimmer/>;
  }

  return(
    <div>
      <div className="flex m-5 gap-5">
        <SearchBar listOfRest={listOfRest} setFilterRest={setFilterRest}/>
        <TopRatedRest listOfRest={listOfRest} setFilterRest={setFilterRest} />
        <UserNameBar/>
      </div>

      <div className=' flex flex-wrap justify-evenly '>
        {filterRest.map((rest)=>(
          <Link to={"/restaurants/" + rest?.card?.card?.info?.id} key={rest?.card?.card?.info?.id}>
           {rest?.card?.card?.info?.promoted ? <RestCardPromoted resData={rest}/> : <ResCard resData = {rest}/>}
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Body;