import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import { AddToCartButton } from "../buttons/AddToCartButton";
import { RemoveButton } from "../buttons/RemoveButton";

export const ShopItem = ({ item }) => {
  const { cart } = useContext(Context);
  const findItemInCart = [...cart].find((i) => i.id === item.id);

  return (
    <div className=" flex flex-col gap-4 max-w-[320px]">
      <img src={item.image} alt="product image" className=" w-[70%] mx-auto" />
      <p className=" font-kite-one">{item.title}</p>
      <p className=" font-knewave">{item.price}</p>

      {!findItemInCart ? (
        <AddToCartButton item={item} />
      ) : (
        <RemoveButton itemID={item.id} />
      )}
    </div>
  );
};
