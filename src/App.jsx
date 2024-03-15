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
      <RouterProvider router={router} />
    </CartContext>
  );
}

export default App;
