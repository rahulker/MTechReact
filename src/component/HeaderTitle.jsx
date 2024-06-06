import PropTypes from "prop-types";
import ScrollToUp from "../constant/ScrollToUp";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeaderTitle = ({ h1Title, headingPara, ButtonText, buttonShow }) => {
  return (
    <div className="header-title grid lg:grid-cols-2 grid-cols-1 gap-2 items-start text-white">
      <h1>{h1Title}</h1>
      <div>
        <p>{headingPara}</p>
        <NavLink
          to="/contact-us"
          onClick={ScrollToUp}
          title="Contact us"
          className={`header-btn ${buttonShow} inline-block`}
        >
          {ButtonText}
          <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
      </div>
    </div>
  );
};
HeaderTitle.propTypes = {
  h1Title: PropTypes.string,
  ButtonText: PropTypes.string,
  headingPara: PropTypes.string,
  buttonShow: PropTypes.string,
};
export default HeaderTitle;
