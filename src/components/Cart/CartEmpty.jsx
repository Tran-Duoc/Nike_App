import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import emptybag from "../../assets/emptybag.png";
import "../../index.css";

const CartEmpty = () => {
   return (
      <div className="flex items-center justify-center flex-col h-screen  px-11 text-center gap-7">
         <div>
            <img
               src={emptybag}
               alt=""
               className="w-40 h-auto  lg:w-36 sm:w-28  object-fill  transition-all duration-300 hover:scale-110"
            />
         </div>
         <button className="button-theme flex  items-center justify-center gap-3 text-sm py-3 font-semibold  active:scale-110 text-slate-900 bg-gradient-to-b from-amber-500 to-orange-500 shadow-orange-500  ">
            <ArrowLeftIcon className="icon-style w-5 h-5 text-slate-900 " />
            <span className="">Back to Nike Store</span>
         </button>
      </div>
   );
};

export default CartEmpty;
