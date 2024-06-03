import ImagePath from "../constant/ImagePath";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="my-20">
      <div className="grid grid-cols-4 marging justify-between footer-query">
        {/* 1 */}
        <div className="col-span-2">
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
        <div className="flex items-start justify-between footer-address col-span-2">
          <div className="flex flex-col items-center gap-4">
            <h3>Quick Links</h3>
            <ul className="flex flex-col items-start gap-4">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/Product">Product</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
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
