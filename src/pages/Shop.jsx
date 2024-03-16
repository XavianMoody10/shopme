import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../layouts/Header";
import { ShopDisplay } from "../components/displays/ShopDisplay";
import { CartDisplay } from "../components/displays/CartDisplay";

export const Shop = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Fetch the api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((products) => {
        setData(products.data);
      })
      .catch(() => {
        console.log("Cant Fetch Data");
      });
  }, []);

  // Toggles cart open and close
  function toggleCart() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <Header toggleCartHandler={toggleCart} />
      <ShopDisplay data={data} />
      <CartDisplay toggleCartValue={isOpen} toggleCartHandler={toggleCart} />
    </>
  );
};
