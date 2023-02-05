import React from "react";
import "../../index.css";
const Footer = ({ footerAPI }) => {
   const { titles, links } = footerAPI;

   return (
      <footer className="bg-theme pt-7 pb-5 text-slate-200">
         <div className="nike-container">
            <div className="grid grid-cols-3 max-w-2xl m-auto md:max-w-none md:gap-5 w-full">
               {titles.map((item, index) => {
                  return (
                     <div key={index} className="grid items-center">
                        <h1 className="text-lg md:text-sm lg:text-base uppercase font-semibold ">
                           {item.title}
                        </h1>
                     </div>
                  );
               })}
               {links.map((item, index) => {
                  return (
                     <ul key={index} className="grid items-center gap-1 ">
                        {item.map((val, index) => {
                           return (
                              <li key={index} className="text-sm  sm:text-xs">
                                 {val.link}
                              </li>
                           );
                        })}
                     </ul>
                  );
               })}
            </div>
         </div>
      </footer>
   );
};

export default Footer;
