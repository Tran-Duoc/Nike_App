import React, { useEffect, useState } from "react";
import {
   HeartIcon,
   MagnifyingGlassIcon,
   ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import "../../index.css";
import logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCar } from "../../redux/cartSlice";

const Navbar = () => {
   const [navState, setNavState] = useState(false);
   const { listCart } = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const onNavScroll = () => {
      if (window.scrollY > 30) {
         setNavState(true);
      } else {
         setNavState(false);
      }
   };
   useEffect(() => {
      window.addEventListener("scroll", onNavScroll);

      return () => {
         window.removeEventListener("scroll", onNavScroll);
      };
   }, []);

   const handleOpenCart = () => {
      console.log("fnc is working");
      dispatch(
         setOpenCar({
            cartState: true,
         })
      );
   };

   return (
      <header
         className={
            !navState
               ? "absolute top-7 left-0  right-0  opacity-100 z-50"
               : "fixed  top-0 left-0 right-0 h-[9vh] flex items-center justify-center  opacity-100 z-[100]  blur-effect-theme"
         }
      >
         <nav className="flex items-center justify-between nike-container">
            <div>
               <img
                  src={logo}
                  alt=""
                  className={`w-16 h-auto ${navState && "filter brightness-0"}`}
               />
            </div>
            <ul className="flex items-center justify-center gap-2">
               <li className="grid items-center ">
                  <MagnifyingGlassIcon
                     className={`icon-style ${
                        navState && "text-slate-900 transition-all duration-300"
                     }`}
                  />
               </li>
               <li className="grid items-center ">
                  <HeartIcon
                     className={`icon-style ${
                        navState && "text-slate-900 transition-all duration-300"
                     }`}
                  />
               </li>
               <li className="grid items-center ">
                  <button
                     onClick={handleOpenCart}
                     type="button"
                     className="border-none outline-none active:scale-110 transition-all duration-300 relative"
                  >
                     <ShoppingBagIcon
                        className={`icon-style ${
                           navState &&
                           "text-slate-900 transition-all duration-300"
                        }`}
                     />
                     <div
                        className={`absolute top-4 ring-0    w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full  cursor-pointer hover:scale-110 transition-all duration-300 flex items-center justify-center ${
                           navState
                              ? "bg-slate-900 text-slate-200 shadow-slate-900"
                              : "bg-slate-200 text-slate-900 shadow-slate-200"
                        } `}
                     >
                        {listCart.length}
                     </div>
                  </button>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Navbar;
