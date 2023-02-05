import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import "../../index.css";
import { changeQuantity, removeItem } from "../../redux/cartSlice";

const CartItem = ({ cart }) => {
   const { id, title, rating, img, price, color, shadow, quantity, text } =
      cart;
   const dispatch = useDispatch();
   const handleDeleteItem = () => {
      console.log(id);

      dispatch(
         removeItem({
            id,
         })
      );
   };
   const handleChangeQuantity = (val) => {
      dispatch(
         changeQuantity({
            id,
            quantity: val,
         })
      );
   };
   cart;
   return (
      <div className="flex items-center justify-between px-2 py-3 border-black border rounded-xl m-5 nike-container">
         <div className="flex items-start gap-5">
            <div
               className={`bg-gradient-to-b ${color} ${shadow} p-3 grid items-center hover:scale-105 transition-all duration-75 e`}
            >
               <img
                  src={img}
                  alt=""
                  className="lg:w-28 h-auto object-fill rotate-12  w-36"
               />
            </div>
            <div className="grid  gap-4 items-start">
               <div className="grid items-start leading-none">
                  <h1 className="text-lg lg:text-sm text-slate-900 font-medium">
                     {title}
                  </h1>
                  <p className="text-sm lg:text-xs text-slate-800 font-light">
                     {text}
                  </p>
               </div>
               <div className="flex gap-5 items-center">
                  <button
                     onClick={() => handleChangeQuantity(-1)}
                     type="button"
                     className="bg-slate-900 p-0.5 rounded-lg"
                  >
                     <MinusIcon className="icon-style w-5 h-5" />
                  </button>
                  <span className="bg-slate-900  rounded-lg text-base w-7 h-6 text-slate-100 flex items-center  justify-center">
                     {quantity}
                  </span>
                  <button
                     onClick={() => handleChangeQuantity(1)}
                     type="button"
                     className="bg-slate-900 p-0.5 rounded-lg"
                  >
                     <PlusIcon className="icon-style w-5 h-5" />
                  </button>
               </div>
            </div>
         </div>
         <div className="grid items-center gap-5">
            <div>
               <span>${price * quantity}</span>
            </div>
            <div>
               <button type="button" className="bg-slate-900 p-0.5 rounded-lg">
                  <TrashIcon
                     className="icon-style w-5 h-5"
                     onClick={handleDeleteItem}
                  />
               </button>
            </div>
         </div>
      </div>
   );
};

export default CartItem;
