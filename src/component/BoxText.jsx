import PropTypes from "prop-types";
const BoxText = ({ boxTextData }) => {
  return (
    <div className="box-text-container  text-white">
      <li className="list-none black-list">{boxTextData}</li>
    </div>
  );
};
BoxText.propTypes = {
  boxTextData: PropTypes.string,
};
export default BoxText;
