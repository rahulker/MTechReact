import ImagePath from "../constant/ImagePath";
import { NavLink } from "react-router-dom";
import Scroll from "../constant/Scroll";
const Footer = () => {
  return (
    <footer className="lg:my-20 my-5">
      <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 marging mobile-space justify-between footer-query">
        {/* 1 */}
        <div className="xl:col-span-2 col-auto">
          <img src={ImagePath.LOGO} alt="site logo" />
          <p className="mt-5">
            Glide gives you the powers of a developer and a designer. Create
            remarkable tools to solve the business problems you thought you
            never could.
          </p>
          <div className="mt-8">
            <p>Have any queries?</p>
            <a href="mailto:help@manektech.com">help@manektech.com</a>
          </div>
        </div>
        {/* 2 */}
        <div className="flex items-start flex-col justify-between xl:flex-row footer-address col-span-2 lg:col-auto xl:col-span-2">
          <div className="flex flex-col xl:items-center  items-start gap-4">
            <h3>Quick Links</h3>
            <ul className="flex md:flex-col lg:flex-row xl:flex-col items-start gap-4">
              <li>
                <NavLink to="/" onClick={Scroll}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Product" onClick={Scroll}>
                  Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" onClick={Scroll}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" onClick={Scroll}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>Address</h3>
            <p className="mt-6">
              4th Floor, Timber Point, Beside Kotak Mahindra Bank, Near
              Prahaladnagar Garden, Prahaladnagar Road, Ahmedabad, Gujarat
              380015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
