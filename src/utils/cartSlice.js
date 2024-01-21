import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // we are mutating/modifying the state over here.
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
             state.items.length = 0; // this will make your state empty []
        },
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

/**
 * 
 * createSlice() function takes a config, this config will have a name, and it will take a initial state of the slice & this initial state will be an object, this initialState object has items, these items are like cart items initially we are giving it as an empty array.
 *
 * 
 * Then we have reducers, it is an object which contains the different type of actions which we can take like addItem, removeItem, clearCart. { for all these actions we have corresponding reducer functions }
 * 
 * addItem: (state, action) => {
            state.items.push(action.payload);
 }

 this is a reducer function with a name addItem, but this will map to a action. We will modify our state based on the action.

 removeItem: (state) => {
            state.items.pop();// we are doing just simple pop from the end but we can write complex logic to remove a particular item from the cart.
        }

clearCart: (state) => {
             state.items.length = 0; // this will make your state empty []
        },



        ................

        This is how we create a slice.

        Now when we have build the slice, we have to add this slice to the store. 
        go to appStore.js


        ................

        Now just try to read the data from the card. { We want to show that how many items we have in the cart besides the card icon, for this we have to subscribe to the store using a selector. }


 */