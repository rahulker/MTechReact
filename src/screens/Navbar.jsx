import { NavLink } from "react-router-dom";
import ImagePath from "../constant/ImagePath";
function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <div>
        <img src={ImagePath.LOGO} alt="company-logo" />
      </div>
      <div>
        <ul className="flex items-center link-gap">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "opacity-50 text-white hover:opacity-100 transition-all"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "opacity-50 text-white hover:opacity-100 transition-all"
              }
              to="/product"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "opacity-50 text-white hover:opacity-100 transition-all"
              }
              to="/about-us"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "opacity-50 text-white hover:opacity-100 transition-all"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white"
                  : "opacity-50 text-white hover:opacity-100 transition-all"
              }
              to="/contact-us"
            >
              contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
