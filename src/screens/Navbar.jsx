import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className="text-yellow-400" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us">about us</NavLink>
        </li>
        <li>
          <NavLink to="/">contact us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
