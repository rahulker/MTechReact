import PropTypes from "prop-types";

const UniqueSelling = ({ CardImage, ImageAlt, CardTitle }) => {
  return (
    <div className="unique-card">
      <img src={CardImage} alt={ImageAlt} />
      <h2>{CardTitle}</h2>
    </div>
  );
};
UniqueSelling.propTypes = {
  CardImage: PropTypes.string,
  ImageAlt: PropTypes.string,
  CardTitle: PropTypes.string,
};
export default UniqueSelling;
