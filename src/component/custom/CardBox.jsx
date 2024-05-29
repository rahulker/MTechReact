// import React from 'react'
import PropTypes from "prop-types";

function CardBox({
  background,
  image,
  headingCard,
  spaces,
  paraData,
  paraSpace,
  headingSpace,
  headingSize,
  headingFont,
  children,
}) {
  return (
    <div className={`${background} ${spaces} text-left`}>
      <div className="h-full">
        <img src={image} alt="understand" />
        <h3 className={`${headingSpace} ${headingFont}`}>{headingCard}</h3>
        <p className={`${paraSpace} ${headingSize} `}>{paraData}</p>
        <div>{children}</div>
      </div>
    </div>
  );
}
CardBox.propTypes = {
  background: PropTypes.string,
  image: PropTypes.string,
  headingCard: PropTypes.string,
  spaces: PropTypes.string,
  paraData: PropTypes.string,
  paraSpace: PropTypes.string,
  headingSpace: PropTypes.string,
  headingSize: PropTypes.string,
  headingFont: PropTypes.string,
  children: PropTypes.any,
};

export default CardBox;
