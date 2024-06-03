import PropTypes from "prop-types";
const ProblemCards = ({ problemImage, problemTitle, problemDetails }) => {
  return (
    <div className="flex items-center problem-gap">
      <img src={problemImage} alt="problem image" />
      <div>
        <h2>{problemTitle}</h2>
        <p className="mt-5">{problemDetails}</p>
      </div>
    </div>
  );
};
ProblemCards.propTypes = {
  problemImage: PropTypes.string,
  problemTitle: PropTypes.string,
  problemDetails: PropTypes.string,
};
export default ProblemCards;
