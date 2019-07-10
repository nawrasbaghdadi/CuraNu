import React from "react";
import SvgArrowRight from "../Icons/ArrowRight";
import "../styles/BoxComponent.scss";

const Accordion = props => {
  return (
    <div className="box__element" key={`acciner_${props.accordionID}`}>
      <div
        className={`box__header ${props.active ? "box__header--active" : ""}`}
        onClick={props.onClickHandle}
        data-id={props.accordionID}
        data-active={props.active}>
        <h2 className="box__title">{props.title}</h2>
        <span
          className={`box__icon ${props.active ? "box__icon--rotate" : ""} `}>
          <SvgArrowRight width="13px" height="21px" />
        </span>
      </div>
      {
        <div
          className={`box__content ${
            props.active ? "box__content--open" : ""
          }`}>
          {props.content}
        </div>
      }
    </div>
  );
};
export default Accordion;
