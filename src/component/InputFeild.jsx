import PropTypes from "prop-types";
const InputFeild = ({ LabelInput, inputType }) => {
  return (
    <>
      <label htmlFor={LabelInput}>{LabelInput}</label>
      <br />
      <input
        type={inputType}
        id={LabelInput}
        name={LabelInput}
        className="input-field border border-solid border-black mt-2 w-full rounded-sm"
      />
    </>
  );
};
InputFeild.propTypes = {
  LabelInput: PropTypes.string,
  inputType: PropTypes.string,
};
export default InputFeild;
