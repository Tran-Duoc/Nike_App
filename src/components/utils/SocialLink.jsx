import React from "react";

const SocialLink = ({ icon }) => {
   return (
      <>
         <img
            src={icon}
            alt=""
            className="w-8 h-8 md:w-6 md:h-6 sm:w-5 sm:h-5  cursor-pointer  transition-all duration-500 hover:scale-110"
         />
      </>
   );
};

export default SocialLink;
