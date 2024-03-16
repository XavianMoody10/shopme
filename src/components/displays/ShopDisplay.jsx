import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ShopItem } from "../items/ShopItem";

export const ShopDisplay = ({ data }) => {
  // Display items
  const productsDisplayMap = [...data].map((item) => {
    return <ShopItem key={item.id} item={item} />;
  });

  return (
    <div className=" w-[90%] mx-auto max-w-[1470px] min-[1156px]:mt-14">
      <div className=" flex gap-1 p-1 border max-w-[300px] mx-auto min-[1156px]:mx-0">
        <SearchOutlinedIcon sx={{ opacity: "0.2" }} />
        <input
          type="text"
          placeholder=" Search Product"
          className=" w-full outline-none"
        />
      </div>

      <div className=" mt-10 flex flex-wrap items-end justify-center gap-y-20 gap-x-10">
        {productsDisplayMap}
      </div>
    </div>
  );
};
