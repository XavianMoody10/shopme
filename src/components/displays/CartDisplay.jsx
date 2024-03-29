import React, { useContext } from "react";
import { motion } from "framer-motion";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { CartItem } from "../items/CartItem";
import { Context } from "../../context/CartContext";
import numbro from "numbro";
import { Link } from "react-router-dom";

export const CartDisplay = ({ toggleCartValue, toggleCartHandler }) => {
  const { cart } = useContext(Context);

  const cartProductsMap = [...cart].map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const fullPrice = [...cart].reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: toggleCartValue ? "0" : "100%" }}
      transition={{ stiffness: 0 }}
      className=" fixed right-0 top-0 h-full w-full max-w-[320px] bg-white border p-2 flex flex-col gap-3"
    >
      <div onClick={toggleCartHandler} className=" ml-auto">
        <ClearOutlinedIcon sx={{ fontSize: 30 }} />
      </div>

      <div className=" h-full overflow-y-auto space-y-7 gap-4">
        {cartProductsMap}
      </div>

      <div className=" space-y-3">
        <p>
          <span className=" font-kite-one">Full Price:</span>{" "}
          <span className=" font-knewave">
            {numbro(fullPrice).formatCurrency({ mantissa: 2 })}
          </span>
        </p>
        <input
          type="text"
          placeholder="Promo Code"
          className=" border p-1 w-full"
        />
      </div>

      <Link
        to={"checkout"}
        className=" text-center bg-black text-white py-2 font-kite-one"
      >
        Pay With Stripe
      </Link>
    </motion.div>
  );
};
