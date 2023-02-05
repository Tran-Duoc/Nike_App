import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Total = () => {
   const { cartTotalAmount } = useSelector((state) => state.cart);
   return (
      <div className="absolute bottom-0 text-center w-full h-auto bg-slate-100 shadow-slate-200 p-5 ">
         <div className="grid items-center gap-10">
            <div className="flex items-center justify-between ">
               <span className="text-lg lg:text-sm font-semibold uppercase">
                  subtotal
               </span>
               <span className="h-5 bg-slate-900 text-slate-100 p-4 flex items-center ">
                  {cartTotalAmount}
               </span>
            </div>
            <div className="flex flex-col gap-2">
               <span>Complete</span>
               <button className="w-full bg-slate-900 text-slate-100 py-2 active:scale-105">
                  Checkout
               </button>
            </div>
         </div>
      </div>
   );
};

export default Total;
