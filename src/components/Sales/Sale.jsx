import React from "react";
import Title from "../Title/Title";
import Item from "../Item/Item";

const Sale = ({ endpoint, ifExists }) => {
   const { title, items } = endpoint;

   return (
      <div className="nike-container">
         <Title title={title} />
         <div
            className={`grid items-center  gap-7 lg:gap-5 mt-7 ${
               ifExists
                  ? "grid-cols-3 lg:grid-cols-2 sm:grid-cols-1"
                  : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 "
            }`}
         >
            {items?.map((item, index) => {
               return <Item key={index} item={item} ifExists={ifExists} />;
            })}
         </div>
      </div>
   );
};

export default Sale;
