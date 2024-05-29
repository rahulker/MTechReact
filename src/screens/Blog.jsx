// import React from "react";
import Navbar from "./Navbar";
import HeaderTitle from "../component/custom/HeaderTitle";
function Blog() {
  return (
    <header className="bg-black pb-44">
      <div className="marging">
        <Navbar />
        <HeaderTitle
          h1Title="Blog"
          headingPara="
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          "
          ButtonText="Get Started"
          buttonShow="hidden"
        />
      </div>
    </header>
  );
}

export default Blog;
