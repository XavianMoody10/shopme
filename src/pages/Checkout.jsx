import React, { useContext } from "react";
import {
  AddressElement,
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Header } from "../layouts/Header";
import { Context } from "../context/CartContext";
import { CartItem } from "../components/items/CartItem";

export const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useContext(Context);

  const cartProductsMap = [...cart].map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const results = await stripe.confirmPayment({
      elements,
    });

    if (results.error) {
      console.log("Not Working");
    } else {
    }
  };

  return (
    <div>
      <Header></Header>

      <div className=" w-[90%] mx-auto">
        <h1 className=" font-knewave text-4xl text-center">Checkout</h1>

        <div className=" flex flex-col gap-10 mt-14 max-w-[500px] mx-auto w-full md:flex-row md:max-w-[920px]">
          <div className=" flex flex-col gap-4 w-full">
            <h2 className=" font-kite-one text-lg">Cart</h2>
            {cartProductsMap.length ? (
              <div className=" flex flex-col gap-4 h-full overflow-y-auto max-h-[660px]">
                {cartProductsMap}
              </div>
            ) : (
              <p className=" text-lg text-center font-knewave">Cart Empty!!!</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className=" flex flex-col gap-4 w-full">
            <div className=" flex flex-col gap-4">
              <h2 className=" font-kite-one text-lg">Billing Info: </h2>
              <CardElement className=" p-3 border-[#e6e6e6] border rounded-[5px]" />
            </div>

            <div className=" flex flex-col gap-4 my-5">
              <h2 className=" font-kite-one text-lg">Shipping Info: </h2>
              <AddressElement options={{ mode: "shipping" }} />
              <button
                disabled={!stripe || !cart.length}
                className=" bg-green-600 text-white font-kite-one text-xl py-2 mt-5"
              >
                Checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
