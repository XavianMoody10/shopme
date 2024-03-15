import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const model = { ...item, quantity: 1 };
    setCart((prev) => [...prev, model]);
  }

  function deleteFromCart(itemId) {
    const doesItemExist = [...cart].find((item) => item.id === itemId);

    if (doesItemExist) {
      const updatedCart = [...cart].filter((item) => item.id !== itemId);
      setCart(updatedCart);
    }
  }

  function increaseQuantity() {
    const cartDeepCopy = JSON.parse(JSON.stringify(cart));
    const foundItem = cartDeepCopy.find((item) => item.id === itemId);
    foundItem.quantity = foundItem.quantity + 1;
  }

  function decreaseQuantity() {}

  return (
    <Context.Provider
      value={{
        cart: cart,
        addToCartHandler: addToCart,
        deleteFromCartHandler: deleteFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};
