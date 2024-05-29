import PropTypes from "prop-types";
function BoxText({ boxTextData }) {
  return (
    <div className="box-text-container  text-white">
      <li className="list-none">{boxTextData}</li>
    </div>
  );
}
BoxText.propTypes = {
  boxTextData: PropTypes.string,
};
export default BoxText;
