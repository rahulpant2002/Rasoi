const TopRatedRest = ({listOfRest, setFilterRest})=>{
    return(
        <div>
            <button className=" bg-gray-300 px-2 rounded-md border-[2px] border-black " onClick={()=>{
            const filtered = listOfRest.filter((res)=> res?.card?.card?.info?.["avgRating"]>=4.3);
            setFilterRest(filtered);
        }}>Top Rated Restaurant</button>
        </div>
    )
}
export default  TopRatedRest;