import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/useRestMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestMenu = ()=>{
    const {restId} = useParams();
    
    //Lifting the State up
    const [showIndex, setShowIndex] = useState(0);

    // Custom Hook
    const restInfo = useRestMenu(restId);

    if(restInfo===null) return <Shimmer/>;

    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cat) =>{
        return cat?.card?.["card"]?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    });

    return(
        <div className="text-center">
            <h1 className="text-xl m-4 font-bold">{restInfo?.cards[2]?.card?.card?.info?.name }</h1>
            <h2 className="center text-lg font-semibold">Menu</h2>

            {categories.map((cat, index)=><MenuCategory key={cat?.card?.card?.title} 
                data = {cat?.card?.card} showItems={index===showIndex ? true:false} 
                setShowIndex = { ()=>{
                    showIndex===index ? setShowIndex(null) : setShowIndex(index);
                }
            } />)}
        </div>
    );
}
export default RestMenu;