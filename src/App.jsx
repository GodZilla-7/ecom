import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Dock from "./assets/Dock";
import ProductPage from "./assets/Productpage";
import Orders from "./Orders";
import Help from "./Help";
import AddressForm from "./checkout/AddressForm";
import PaymentForm from "./checkout/PaymentForm";
import OrderSummary from "./checkout/OrderSummary";
import Confirmation from "./checkout/Confirmation";
import WishlistPage from "./Wishlist";
import { CheckoutProvider } from "./checkout/CheckoutContext";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  { path: "/", element: <><Home /><Dock /></> },
  { path: "/help", element: <><Help /><Dock /></> },
  { path: "/orders", element: <><Orders /><Dock /></> },
  { path: "/product/:productId", element: <ProductPage /> },
  { path: "/wishes", element: <WishlistPage /> },

  // Checkout Routes
  { path: "/checkout/:productId/address", element: <AddressForm /> },
  { path: "/checkout/:productId/payment", element: <PaymentForm /> },
  { path: "/checkout/:productId/summary", element: <OrderSummary /> },
  { path: "/checkout/confirmation", element: <Confirmation /> },
]);

function App() {
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <CheckoutProvider>
      <RouterProvider router={router} />
    </CheckoutProvider>
    </>
  );
}

export default App;
