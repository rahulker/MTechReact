import PropTypes from "prop-types";

function Title({ headerContent, headingFont, paraContent }) {
  return (
    <div className="text-center title">
      <h2 className={`${headingFont}`}>{headerContent}</h2>
      <p className="mt-5 mx-auto">{paraContent}</p>
    </div>
  );
}
Title.propTypes = {
  headerContent: PropTypes.string,
  paraContent: PropTypes.string,
  headingFont: PropTypes.string,
};
export default Title;
