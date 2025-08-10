import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import Layout from "./components/Layout";
import HomePage from "./components/Homepage";
import ProductSuperstar from "./components/products/productSuperstar";
import ProductSamba from "./components/products/productSamba";
import ProductGazello from "./components/products/productGazello";
import ProductSl72 from "./components/products/productSl72";
import ProductCampus from "./components/products/productCampus";
import ProductForum from "./components/products/productForum";
import ProductCricket from "./components/products/productCricket";
import Cart from "./components/Cart";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App() {

  const cartItems = useSelector((state) => state.cart.items);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <ScrollToTop />,
          children: [
            { path: "/", element: <HomePage /> },
            { path: "/superstar", element: <ProductSuperstar /> },
            { path: "/samba", element: <ProductSamba /> },
            { path: "/gazelle", element: <ProductGazello /> },
            { path: "/SL72", element: <ProductSl72 /> },
            { path: "/campus", element: <ProductCampus /> },
            { path: "/forum", element: <ProductForum /> },
            { path: "/cricket", element: <ProductCricket /> },
            { path: "/cart", element: <Cart /> },
          ],
        },
      ],
    },
  ]);

  return (
    <>
  
        <RouterProvider router={router} />

    </>
  );
}

export default App;
