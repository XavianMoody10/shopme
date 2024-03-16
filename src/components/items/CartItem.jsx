import React, { useContext } from "react";
import { Context } from "../../context/CartContext";
import numbro from "numbro";

export const CartItem = ({ item }) => {
  const { increaseQuantityHandler, decreaseQuantityHandler } =
    useContext(Context);
  const totalPrice = numbro(item.price * item.quantity).formatCurrency({
    mantissa: 2,
  });

  return (
    <div key={item.id} className=" border w-full flex gap-4 p-2">
      <img
        src={item.image || ""}
        alt="product image"
        className=" max-w-[100px] object-contain"
      />

      <div className=" flex flex-col gap-5 justify-between w-full">
        <div className=" space-y-2">
          <p className=" font-kite-one text-sm">{item.title}</p>
          <p className=" font-knewave text-sm">{totalPrice}</p>
        </div>

        <div>
          <div className=" flex items-center gap-3 w-full">
            <button
              className=" w-full border"
              onClick={() => decreaseQuantityHandler(item.id)}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className=" w-full border"
              onClick={() => increaseQuantityHandler(item.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
