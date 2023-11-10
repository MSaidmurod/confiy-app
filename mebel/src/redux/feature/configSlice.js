import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {  
    cartItems: [],
    numItemsInCart: 0,
    cartTotal: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0,
    addUser:null,
    authisReady: false,
    name: ''
  };

  const getLocalStorage = () => {
    return JSON.parse(localStorage.getItem("cart")) || defaultState
 }
    
    const cartSlice = createSlice({  name: 'cart',
      initialState: getLocalStorage(),
      reducers: { 
       addItem: (state, action ) => {  
        const { product } = action.payload;   
         const item = state.cartItems.find((i) => i.cartID === product.cartID); 
         if (item) {
          item.amount += product.amount
       } else {
          state.cartItems.push(product)
       }
       state.numItemsInCart += product.amount
       state.cartTotal += product.price * product.amount
       cartSlice.caseReducers.calculateProducts(state)  
       toast.success("item added to cart!") 
      
      }, 
      removeCart: (state, {payload}) => {
        state.cartItems = state.cartItems.filter(element => element.cartItems !== payload.cartItems)
      },
       removeItem: (state, action) => {
        const item = state.cartItems.find((item) => item.productID === action.payload.productID)
        state.numItemsInCart -= item.amount
        state.cartTotal -= item.amount * item.price
        state.cartItems = state.cartItems.filter(element => element.productID !== item.productID)
        cartSlice.caseReducers.calculateProducts(state)
        toast.error("cart removed!")
     },
         editItem: (state, action) => {
          const item = state.cartItems.find((item) => item.cartId === action.payload.cartId)
          const editAmount = item.amount - action.payload.amount
          item.amount -= editAmount
          state.numItemsInCart -= editAmount
          state.cartTotal -= item.price * editAmount
          cartSlice.caseReducers.calculateProducts(state)
          toast.success("cart updated!")
 
       },
         calculateProducts: (state) => {
          state.tax = 0.1 * state.cartTotal
          state.orderTotal = state.cartTotal + state.shipping + state.tax
          localStorage.setItem("cart", JSON.stringify(state))
       } ,
       login: (state, {payload}) => {
          state.addUser = payload
       },
       logout: (state) => {
          state.addUser = null
       },
       authReady: (state) => {
          state.authisReady = true
       },
             },   
        
     },);


     export const { addItem, removeItem, addName, editItem, removeCart, clearCart, login, logout, authReady } = cartSlice.actions;
     export default cartSlice.reducer;
