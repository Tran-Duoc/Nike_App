import React from "react";
import Title from "../Title/Title";
import CartProduct from "../CardProduct/CartProduct";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import "../../index.css";
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
   const SlideOptions = {
      perPage: 5,
      perMove: 1,
      type: "loop",
      rewind: true,
      keyboard: "global",
      gap: "1rem",
      pagination: false,
      padding: "2rem",
      breakpoints: {
         1200: { perPage: 3 },
         991: { perPage: 2.3 },
         768: { perPage: 2 },
         500: { perPage: 1.3 },
         425: { perPage: 1 },
      },
   };

   return (
      <>
         <div className="nike-container mb-11">
            <Title title={title} />
            <div className="mt-7">
               <Splide options={SlideOptions}>
                  {news.map((item, index) => {
                     return (
                        <SplideSlide key={index} className="mb-0.5">
                           <div className="relative grid items-center gap-4 bp-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                              <div className="flex items-center justify-center">
                                 <img
                                    src={item.img}
                                    alt=""
                                    className="rounded-tr-xl rounded-tl-xl  w-auto h-auto object-cover shadow shadow-slate-200 "
                                 />
                              </div>
                              <div className="w-full flex items-center justify-between px-4 ">
                                 <div className="flex items-center gap-0.5">
                                    <HeartIcon className="icon-style w-5 h-5 text-red-500" />
                                    <span className="text-sm font-bold">
                                       {item.like}
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-0.5">
                                    <ClockIcon className="icon-style w-4 h-5 text-black" />
                                    <span className="text-xs font-bold">
                                       {item.time}
                                    </span>
                                 </div>
                                 <div className="flex items-center gap-0.5">
                                    <HashtagIcon className="icon-style  text-blue-600 " />
                                    <span className="font-bold text-blue-600 text-xs">
                                       {item.by}
                                    </span>
                                 </div>
                              </div>
                              <div className="grid items-center justify-items-start px-4">
                                 <h1 className="text-base font-semibold lg:text-sm">
                                    {item.title}
                                 </h1>
                                 <p className="text-sm  lg:text-xs text-justify">
                                    {truncate(item.text, { length: 175 })}
                                 </p>
                              </div>
                              <div className="flex items-center justify-center  w-full ">
                                 <a
                                    href={item.url}
                                    target="_blank"
                                    role={"button"}
                                    className="w-full bg-gradient-to-t from-slate-900 to-black shadow-md shadow-black text center text-slate-200 text-center py-1.5 button-theme"
                                 >
                                    {item.btn}
                                 </a>
                              </div>
                           </div>
                        </SplideSlide>
                     );
                  })}
               </Splide>
            </div>
         </div>
      </>
   );
};

export default Stories;
