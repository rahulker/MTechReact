import PropTypes from "prop-types";
const ProblemCards = ({
  problemImage,
  problemTitle,
  problemDetails,
  imageShow,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center problem-gap">
      <img
        src={problemImage}
        alt="problem image"
        className={`${imageShow} w-full lg:w-auto`}
      />
      <div className="mobile-card">
        <h2>{problemTitle}</h2>
        <p className="md:mt-5 mt-2.5">{problemDetails}</p>
      </div>
    </div>
  );
};
ProblemCards.propTypes = {
  problemImage: PropTypes.string,
  problemTitle: PropTypes.string,
  problemDetails: PropTypes.string,
  imageShow: PropTypes.string,
};
export default ProblemCards;
