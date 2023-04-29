import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: { 
        cart:[], 
    },
    reducers: {
        addToCart: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id );
            if(itemPresent){
                itemPresent.quantity++;
                itemPresent.selectedSize = action.payload.selectedSize; // Add selected size to existing item in cart
            } else {
                state.cart.push({...action.payload, quantity:1}); // Add new item to cart with selected size
            }
        },
        removeFromCart:(state,action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
        },
        incrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQuantity: (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent.quantity === 1){
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            } else{
                itemPresent.quantity--;
            }
        }
    } 
})

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;
