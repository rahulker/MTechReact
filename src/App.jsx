// import React from "react";
import BlogDetails from "./screens/BlogDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import "./assets/css/style.css";
import "./assets/css/style-scss.css";
import ContactUs from "./screens/ContactUs";
import Blog from "./screens/Blog";
import Product from "./screens/Product";
import ProductDetails from "./screens/ProductDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
    {
      path: "/Blog",
      element: <Blog />,
    },
    {
      path: "/Product",
      element: <Product />,
    },
    {
      path: "/Blog-details",
      element: <BlogDetails />,
    },
    {
      path: "/product-details",
      element: <ProductDetails />,
    },
  ]);
  return (
    <div className="container-div">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
