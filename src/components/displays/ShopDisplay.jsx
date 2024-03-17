import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { ShopItem } from "../items/ShopItem";

export const ShopDisplay = ({ data }) => {
  const [search, setSearch] = useState("");

  // Display items
  const productsDisplayMap = [...data].map((item) => {
    return <ShopItem key={item.id} item={item} />;
  });

  // Filter Items
  const productsFilterMap = [...data].map((item) => {
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return <ShopItem key={item.id} item={item} />;
    } else {
      return;
    }
  });

  return (
    <div className=" w-[90%] mx-auto max-w-[1470px] min-[1156px]:mt-14">
      <div className=" flex gap-1 p-1 border max-w-[300px] mx-auto min-[1156px]:mx-0">
        <SearchOutlinedIcon sx={{ opacity: "0.2" }} />
        <input
          type="text"
          placeholder=" Search Product"
          className=" w-full outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className=" mt-10 flex flex-wrap items-end justify-center gap-y-20 gap-x-10">
        {productsFilterMap.length ? productsFilterMap : productsDisplayMap}
      </div>
    </div>
  );
};
