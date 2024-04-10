
const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addCart: (state, action) => {
            const founded = state.find((product) => product.id === action.payload.id);
            if (founded) {
                founded.quantity +=1
            }else{
                const ProductQuantity =  {...action.payload,quantity:1}
                state.push(ProductQuantity)
                }
          },
          
        removeCart:(state,action)=>{
            let quantity = state.find(i=>i.id === action.payload.id)
            if(quantity.quantity){
                if(quantity.quantity > 1 ){
                    quantity = quantity.quantity -=1
                }else if (quantity.quantity ===1){
                    return state.filter(product=>product.id !== action.payload.id)
                }
            }
        }
    }
})
export const {addCart,removeCart}  = cartSlice.actions;
export default cartSlice.reducer;