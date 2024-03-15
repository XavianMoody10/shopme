import React, { useContext } from "react";
import { Context } from "../../context/CartContext";

export const RemoveButton = ({ itemID }) => {
  const { deleteFromCartHandler } = useContext(Context);

  return (
    <button
      onClick={() => deleteFromCartHandler(itemID)}
      className=" font-kite-one text-lg bg-red-500 text-white w-full py-2 hover:bg-green-500"
    >
      Remove
    </button>
  );
};
