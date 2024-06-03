import PropTypes from "prop-types";
const CustomerTarget = ({ headingTitle, paraContent }) => {
  return (
    <div className="bg-white trageted-customer">
      <h3>{headingTitle}</h3>
      <p className="mt-5">{paraContent}</p>
    </div>
  );
};
CustomerTarget.propTypes = {
  headingTitle: PropTypes.string,
  paraContent: PropTypes.string,
};
export default CustomerTarget;
