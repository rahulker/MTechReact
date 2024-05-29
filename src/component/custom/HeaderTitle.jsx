import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HeaderTitle({ h1Title, headingPara, ButtonText, buttonShow }) {
  return (
    <div className="header-title grid grid-cols-2 gap-2 items-start text-white">
      <h1>{h1Title}</h1>
      <div>
        <p>{headingPara}</p>
        <button className={`header-btn ${buttonShow}`}>
          {ButtonText}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}
HeaderTitle.propTypes = {
  h1Title: PropTypes.string,
  ButtonText: PropTypes.string,
  headingPara: PropTypes.string,
  buttonShow: PropTypes.string,
};
export default HeaderTitle;
