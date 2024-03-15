import React, { useContext } from "react";
import { Context } from "../../context/CartContext";

export const AddToCartButton = ({ item }) => {
  const { addToCartHandler } = useContext(Context);

  return (
    <button
      onClick={() => addToCartHandler(item)}
      className=" font-kite-one text-lg bg-black text-white w-full py-2 hover:bg-green-500"
    >
      Add To Cart
    </button>
  );
};
