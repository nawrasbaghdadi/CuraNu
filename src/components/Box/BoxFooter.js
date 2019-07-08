import React from "react";
import SvgArrowRight from "../../Icons/ArrowRight";
import SvgAdd from "../../Icons/Add";
const BoxFooter = props => {
  let icon;
  if (props.icon == "add") {
    icon = <SvgAdd width="27px" height="27px" />;
  } else {
    icon = <SvgArrowRight width="27px" height="27px" />;
  }

  return (
    <div className="box__footer">
      <p className="box__more">{props.more}</p>
      <span className="box__icon">{icon}</span>
    </div>
  );
};

export default BoxFooter;
