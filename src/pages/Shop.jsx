import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { ShopItem } from "../components/items/ShopItem";
import { Context } from "../context/CartContext";
import { motion } from "framer-motion";

export const Shop = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(Context);

  function toggleCart() {
    setIsOpen((prev) => !prev);
  }

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

  // Display items
  const productsDisplayMap = [...data].map((item) => {
    return <ShopItem key={item.id} item={item} />;
  });

  return (
    <>
      <header className=" flex items-center justify-between py-6 w-[90%] max-w-[1470px] mx-auto">
        <Link className=" font-knewave text-xl">Shop.Me</Link>

        <div className=" relative" onClick={toggleCart}>
          <p className=" absolute right-[-8px] top-[-15px] p-1 bg-black text-white rounded-lg">
            {cart.length}
          </p>

          <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
        </div>
      </header>

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

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0" : "100%" }}
        transition={{ stiffness: 0 }}
        className=" fixed right-0 top-0 h-full w-full max-w-[320px] bg-white border p-2 flex flex-col gap-3"
      >
        <div onClick={toggleCart} className=" ml-auto">
          <ClearOutlinedIcon sx={{ fontSize: 30 }} />
        </div>

        <div className=" h-full overflow-y-auto space-y-7 gap-4">
          <div className=" border h-[140px] w-full"></div>
          <div className=" border h-[140px] w-full"></div>
          <div className=" border h-[140px] w-full"></div>
          <div className=" border h-[140px] w-full"></div>
        </div>

        <button className=" bg-black text-white py-2 font-kite-one">
          Pay With Stripe
        </button>
      </motion.div>
    </>
  );
};
