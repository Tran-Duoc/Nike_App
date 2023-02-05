import React, { useEffect } from "react";
import CartCount from "./CartCount";
import CartEmpty from "./CartEmpty";
import CartItem from "./CartItem";
import "../../index.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "./Total";
import { setGetTotals } from "../../redux/cartSlice";

const Cart = () => {
   const { cartState, listCart } = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(setGetTotals());
   }, [dispatch, listCart]);

   return (
      <div
         className={`fixed top-0 left-0 right-0 bottom-0 h-screen blur-effect-theme w-full z-[200] opacity-100  ${
            cartState
               ? "opacity-100 translate-x-0 visible"
               : "opacity-0 translate-x-[100%] invisible"
         }`}
      >
         <div
            className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}
         >
            <CartCount />

            {listCart.length > 0 ? (
               <>
                  <div>
                     {listCart.map((cart) => {
                        return <CartItem key={cart.id} cart={cart} />;
                     })}
                  </div>
                  <Total />
               </>
            ) : (
               <CartEmpty />
            )}
         </div>
      </div>
   );
};

export default Cart;
