import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Clips = ({ imgSrc, clip }) => {
   return (
      <>
         <div className="relative w-32 h-28 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24  md:h-20 sm:h-14">
            <img
               src={imgSrc}
               alt=""
               className="inset-0 flex w-full h-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10"
            />
            <div className="bg-white blur-effect-theme absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100  z-[100] w-8 h-8 md:w-5 md:h-5  flex items-center justify-center rounded-full ">
               <PlayIcon className="icon-style text-slate-900 md:w-3 md:h-3" />
            </div>
            <video
               autoPlay={true}
               loop={true}
               muted={true}
               playsInline={true}
               className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-20 transition-opacity decoration-purple-500"
            >
               <source type="video/mp4" src={clip} />
            </video>
         </div>
      </>
   );
};

export default Clips;
