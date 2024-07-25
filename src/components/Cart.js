import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/Store/cartSlice";
import { useState } from "react";

const Cart = ()=>{
    const itemList = useSelector((store)=> store.cart.items);
    const [bill, setBill] = useState(0);
    const dispatch = useDispatch();
    const emptyCart = ()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center shadow-lg w-[50%] mx-auto">
            <div className="font-bold text-2xl border-b-2 border-black m-5 p-2">Cart</div>
            {!itemList.length ? <div className="m-[50px] font-semibold text-lg">Cart is Empty...</div>
             : <button onClick={emptyCart} className="m-2 p-2 rounded-md text-white bg-black">Clear Cart</button>}
            <ItemList items = {itemList} bill={bill} setBill={setBill} />
            {console.log(bill)}
        </div>
    )
}
export default Cart;