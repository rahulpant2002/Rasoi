import { CDN_URL } from "../utils/constant";

const ResCard = ({resData})=>{
  const {cloudinaryImageId, name, cuisines, avgRating, sla, locality, areaName} = resData?.card?.card?.info;

  return(
    <div className=' w-[200px] bg-slate-200 hover:bg-slate-300 rounded-[4px] p-[8px] mb-3'>
      <img className=' h-[150px] w-[100%] rounded-sm' src={CDN_URL+ 
      cloudinaryImageId} alt='resImg' height='200px' ></img>
      <h3 className=" text-center font-bold">{name}</h3><br></br>
      <h5 className=" text-sm">{cuisines.join(", ")}</h5> <br></br>
      <h5 className=" flex justify-between ">
       <div>{avgRating}✴️</div>  <div>{sla?.deliveryTime} minute</div>
      </h5>
      <br />
      <h5>{locality+', '+areaName}</h5>
    </div>
  )
}

// Higher Order Component
export const promotedCard = (ResCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white p-1 rounded-lg m-1" >Promoted</label>
        <ResCard {...props}/>
      </div>
    );
  };
};

export default ResCard;