import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Context } from "../context/CartContext";

export const Header = ({ toggleCartHandler }) => {
  const { cart } = useContext(Context);

  return (
    <header className=" flex items-center justify-between py-6 w-[90%] max-w-[1470px] mx-auto">
      <Link className=" font-knewave text-xl" to={"/"}>
        Shop.Me
      </Link>

      <div className=" relative" onClick={toggleCartHandler}>
        <p className=" absolute right-[-8px] top-[-15px] p-1 bg-black text-white rounded-lg">
          {cart.length}
        </p>

        <ShoppingCartOutlinedIcon sx={{ fontSize: 30 }} />
      </div>
    </header>
  );
};
