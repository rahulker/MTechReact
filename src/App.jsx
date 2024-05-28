// import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import Navbar from "./screens/Navbar";
import "./assets/css/style.css";
import "./assets/css/style-scss.css";
import ContactUs from "./screens/ContactUs";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/contact-us",
      element: (
        <>
          <Navbar />
          <AboutUs />
        </>
      ),
    },
    {
      path: "/about-us",
      element: (
        <>
          <Navbar />
          <ContactUs />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
