import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const model = { ...item, quantity: 1 };
    setCart((prev) => [...prev, model]);
  }

  function deleteFromCart(itemID) {
    const doesItemExist = [...cart].find((item) => item.id === itemID);

    if (doesItemExist) {
      const updatedCart = [...cart].filter((item) => item.id !== itemID);
      setCart(updatedCart);
    }
  }

  function increaseQuantity(itemID) {
    const updatedCart = [...cart].map((item) => {
      if (item.id === itemID) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(itemID) {
    const findItem = [...cart].find((item) => item.id === itemID);

    if (findItem.quantity > 1) {
      const updatedCart = [...cart].map((item) => {
        if (item.id === itemID) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });

      setCart(updatedCart);
    } else {
      return;
    }
  }

  return (
    <Context.Provider
      value={{
        cart: cart,
        addToCartHandler: addToCart,
        deleteFromCartHandler: deleteFromCart,
        increaseQuantityHandler: increaseQuantity,
        decreaseQuantityHandler: decreaseQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};
