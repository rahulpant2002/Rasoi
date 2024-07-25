import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState :{
        items : [],
    },
    reducers :{
        addItem : (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem : (state, action)=>{
            // state.items.pop();
            for(let i=0; i<state.items.length; i++){
                if(current(state.items[i])===action.payload){
                    console.log(i);
                    state.items.splice(i, 1);
                    break;
                }
            }
            // console.log(current(state.items));
        },
        clearCart : (state)=>{
            state.items.length = 0;
        },
    },
});
export const{addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;