import React from "react";
import SvgArrowRight from "../../Icons/ArrowRight";
const BoxFooter = props => {
  return (
    <div className="box__footer">
      <p className="box__more">{props.more}</p>
      <span className="box__icon">
        <SvgArrowRight width="13px" height="21px" />
      </span>
    </div>
  );
};

export default BoxFooter;
