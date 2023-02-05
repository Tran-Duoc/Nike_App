import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { setCloseCar } from "../../redux/cartSlice";

const CartCount = () => {
   const dispatch = useDispatch();

   const handleCloseCart = () => {
      console.log(`fnc is working`);
      dispatch(
         setCloseCar({
            cartState: false,
         })
      );
   };

   return (
      <div className="bg-white flex items-center justify-between px-3  sticky  top-0  left-0 right-0  w-full py-3">
         <div className="flex items-center gap-3 ">
            <div className="grid items-center cursor-pointer ">
               <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
            </div>
            <div className="grid items-center">
               <h1 className="text-base font-medium text-slate-900 ">
                  Your Cart
                  <span className="bg-theme-cart rounded-sm text-slate-200 font-normal ml-2 py-0.5">
                     ( 0 items )
                  </span>
               </h1>
            </div>
         </div>
         <div className="grid items-center">
            <button
               onClick={handleCloseCart}
               type="button"
               className="rounded-sm bg-theme-cart active:scale-90 p-0.5"
            >
               <XMarkIcon className="w-5 h-5 text-white stroke-[2]" />
            </button>
         </div>
      </div>
   );
};

export default CartCount;
