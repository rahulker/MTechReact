import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ImagePath from "../constant/ImagePath";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);
  let body = document.getElementById("actualBody");
  if (active == true) {
    body.classList.add("overflow-body");
  } else {
    body.classList.remove("overflow-body");
  }
  return (
    <>
      {/* desktop navbar */}
      <nav className="lg:flex items-center hidden mobile-space justify-between">
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
      {/* mobile nav bar */}
      <nav className="flex lg:hidden  items-center fixed top-0 bg-black w-full justify-between ">
        <div className="flex items-center justify-between">
          <img src={ImagePath.LOGO} alt="company-logo" className="w-3/4" />
        </div>
        <div>
          <button
            className="text-white transition-opacity"
            onClick={() => {
              setActive(!active);
            }}
          >
            <FontAwesomeIcon icon={active ? faXmark : faBars} />
          </button>
        </div>
        <div
          className={`absolute ${active ? "mobile-nav active" : "mobile-nav "}`}
        >
          <ul className="flex items-center flex-col link-gap ">
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
    </>
  );
};

export default Navbar;
