import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const MoreProduct = ({ Image, Title }) => {
  return (
    <div className="relative">
      <img src={Image} alt="Product Image" />
      <div className="absolute flex items-center justify-between blur-bg ">
        <p className="capitalize">{Title}</p>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};
MoreProduct.propTypes = {
  Image: PropTypes.string,
  Title: PropTypes.string,
};
export default MoreProduct;
