// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Navbar from "./screens/Navbar";
import "./assets/css/style.css";
import "./assets/css/style-scss.css";
import ContactUs from "./screens/ContactUs";
import Blog from "./screens/Blog";
import Product from "./screens/Product";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <div className="marging">
            <Navbar />
          </div>
          <Home />
        </div>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <div className="marging">
          <Navbar />
          <AboutUs />
        </div>
      ),
    },
    {
      path: "/about-us",
      element: (
        <div className="marging">
          <Navbar />
          <ContactUs />
        </div>
      ),
    },
    {
      path: "/Blog",
      element: (
        <div className="marging">
          <Navbar />
          <Blog />
        </div>
      ),
    },
    {
      path: "/Product",
      element: (
        <div className="marging">
          <Navbar />
          <Product />
        </div>
      ),
    },
  ]);
  return (
    <div className="container-div">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
