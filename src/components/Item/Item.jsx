import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import "../../index.css";
import { setAddCart } from "../../redux/cartSlice";
const Item = ({ item, ifExists }) => {
   const { id, title, text, rating, img, price, color, shadow, btn } = item;
   const dispatch = useDispatch();
   const handleAddCart = () => {
      console.log("fnc is working");
      const item = {
         id,
         title,
         rating,
         img,
         text,
         price,
         color,
         shadow,
      };
      dispatch(setAddCart(item));
      
   };

   return (
      <div
         className={`relative  bg-gradient-to-b  ${color} ${shadow} grid ${
            ifExists ? "justify-items-start" : "justify-items-center"
         }  items-center  rounded-md py-4 px-5 transition-all duration-700 ease-in-out hover:scale-105 `}
      >
         <div
            className={` ${
               ifExists ? "justify-items-start" : "justify-items-center"
            }grid items-center `}
         >
            <h1 className="text-xl text-slate-200 lg:text-lg md:text-base filter drop-shadow-2xl font-medium">
               {title}
            </h1>
            <p className="text-slate-200 filter drop-shadow-2xl text-base md:text-sm font-normal">
               {text}
            </p>

            <div className="flex items-center justify-between w-28 my-2">
               <div className="flex items-center bg-white/80 rounded px-1">
                  <h1 className="text-black text-sm font-medium">${price}</h1>
               </div>
               <div className="flex items-center gap-1">
                  <StarIcon className="icon-style   w-5 h-5  md:w-4 md:h-4" />
                  <h1 className="md:text-sm font-normal text-slate-100">
                     {rating}
                  </h1>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <button
                  type="button"
                  className="bg-white/90 blur-effect-theme  button-theme  p-0.5 shadow shadow-sky-200"
               >
                  <ShoppingCartIcon
                     className="icon-style text-slate-900"
                     onClick={handleAddCart}
                  />
               </button>
               <button
                  type="button"
                  className="bg-white/90 blur-effect-theme  button-theme  p-0.5 shadow shadow-sky-200 text-black  text-sm"
               >
                  {btn}
               </button>
            </div>
         </div>
         <div
            className={`flex items-center ${
               ifExists ? "absolute top-5 right-1" : "justify-center"
            }`}
         >
            <img
               src={img}
               alt=""
               className={`h-32 md:h-24 w-64 transitions-theme  hover:-rotate-12 ${
                  ifExists
                     ? "h-auto w-64  lg:w-56 md:w-48 -rotate-[35deg] "
                     : "h-36 w-64 "
               }`}
            />
         </div>
      </div>
   );
};

export default Item;
