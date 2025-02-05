import { createSlice } from "@reduxjs/toolkit"

const initialState = {
     cart : []
    //here we can mutate the state
    // cart:[
    //     {
    //         pizzaId:12, 
    //         name: "chicken pizza",
    //         quantity :2,
    //         unitPrice:18, 
    //         totalPrice : 36
    //     }
    // ]
}

const cartSlice = createSlice({

    name:"cart",

    initialState,

    reducers : {
        addItem(state,action) {
            //payload = newItem
            state.cart.push(action.payload);
        },
        deleteItem(state,action) {
            //payload = pizza id
            state.cart = state.cart.filter(item=>item.pizzaId != action.payload);
        },
        increaseItemQuantity(state,action) {
            //payload = pizza id to find the particular pizza
            const item = state.cart.find(item=>item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state,action) {
            //payload = pizza id to find the particular pizza
            const item = state.cart.find(item=>item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
            //in cart component if pizza quantity is 0, then delete the whole pizza from the cart 
            if(item.quantity === 0){
                state.cart = state.cart.filter(item=>item.pizzaId != action.payload);
            }


        },
        clearCart(state) {
            state.cart = []
        }
    }
})


export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart} =  cartSlice.actions;
export default cartSlice.reducer;

//adding items into the cart and calculating the total cart items
export const getTotalCartQuantity = (state)=> state.cart.cart.reduce((sum,item)=>sum+item.quantity,0);

//adding items into the cart and calculating the total cart price
export const getTotalCartPrice = (state)=> state.cart.cart.reduce((sum,item)=>sum+item.totalPrice,0);

//get the amount of a particular pizza in the cart
export const getCurrentQuantityById = (id) => (state) => 
state.cart.cart.find((item)=>item.pizzaId === id)?.quantity ?? 0;