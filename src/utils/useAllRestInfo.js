import { useEffect } from "react";
import { REST_LIST } from "./constant";
const useALLRestInfo = (setFilterRest, setListOfRest)=>{
  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async()=>{
    const data = await fetch(REST_LIST);
    const json = await data.json();

    const myData = json?.data?.cards;
    const filtered = myData.filter((rest)=>{
    return rest?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
  });

  setListOfRest(filtered);
  setFilterRest(filtered);
  }
}
export default useALLRestInfo;