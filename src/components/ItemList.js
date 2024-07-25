import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/Store/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({items})=>{

    const dispatch = useDispatch()
    const addToCart = (meal)=>{
        dispatch(addItem(meal));
    }
    const remove = (meal)=>{
        dispatch(removeItem(meal));
    }
    return (
        items.map((meal, index)=>(
            <div key={index} className="flex justify-between border-b-2 border-gray-100">
                <div className="p-2 m-2 text-left">
                    <div className="font-semibold">{meal?.card?.info?.name}</div>
                    <div className="font-semibold">₹{(meal?.card?.info?.price || meal?.card?.info?.defaultPrice)/100}</div>
                    <div className="text-left opacity-75 max-w-[70%]">{meal?.card?.info?.description}</div>
                    <br />
                </div>
                <div className="relative p-2">
                    <img src={CDN_URL + meal?.card?.info?.imageId} alt="img" className="rounded-lg w-[150px] h-[150px]" />
                    <button onClick={()=>addToCart(meal)} className="absolute bottom-[3px] left-0 text-center bg-center
                      bg-black text-white font-bold p-1 rounded-md cursor-pointer">ADD+</button>
                    <button onClick={()=>remove(meal)} className="absolute bottom-[3px] right-0 text-center bg-center
                      bg-black text-white font-bold p-1 rounded-md cursor-pointer">Remove-</button>
                </div>
            </div>
        ))
    )
}
export default ItemList;