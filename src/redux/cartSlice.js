import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
   cartState: false,
   listCart: localStorage.getItem("listCart")
      ? JSON.parse(localStorage.getItem("listCart"))
      : [],
   cartTotalAmount: 0,
   cartTotalQuantity: 0,
};

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      setOpenCar: (state, action) => {
         state.cartState = action.payload.cartState;
      },
      setCloseCar: (state, action) => {
         state.cartState = action.payload.cartState;
      },
      setAddCart: (state, action) => {
         const itemIndex = state.listCart.findIndex(
            (item) => item.id === action.payload.id
         );
         if (itemIndex >= 0) {
            state.listCart[itemIndex].quantity += 1;
         } else {
            const temp = { ...action.payload, quantity: 1 };
            state.listCart.push(temp);
         }
         localStorage.setItem("listCart", JSON.stringify(state.listCart));
         toast.success("Item is added", {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      },
      removeItem: (state, action) => {
         const newItem = state.listCart.filter(
            (item) => item.id !== action.payload.id
         );
         state.listCart = newItem;
         localStorage.setItem("listCart", JSON.stringify(state.listCart));
      },
      changeQuantity: (state, action) => {
         const itemIndex = state.listCart.findIndex(
            (item) => item.id === action.payload.id
         );
         state.listCart[itemIndex].quantity += action.payload.quantity;

         localStorage.setItem("listCart", JSON.stringify(state.listCart));
      },
      setGetTotals: (state) => {
         let { totalAmount, totalQTY } = state.listCart.reduce(
            (cartTotal, cartItem) => {
               const { price, quantity } = cartItem;
               const totalPrice = price * quantity;
               cartTotal.totalAmount += totalPrice;
               cartTotal.totalQTY += quantity;

               return cartTotal;
            },
            {
               totalAmount: 0,
               totalQTY: 0,
            }
         );
         state.cartTotalAmount = totalAmount;
         state.cartTotalQTY = totalQTY;
      },
   },
});

export const {
   setOpenCar,
   setCloseCar,
   setAddCart,
   removeItem,
   changeQuantity,
   setGetTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
