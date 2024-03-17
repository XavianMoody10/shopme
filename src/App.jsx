import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Shop } from "./pages/Shop";
import { Checkout } from "./pages/Checkout";
import { Error } from "./pages/Error";
import { CartContext } from "./context/CartContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <CartContext>
      <Elements stripe={stripePromise}>
        <RouterProvider router={router} />
      </Elements>
    </CartContext>
  );
}

export default App;
