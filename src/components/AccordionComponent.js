import React, { useState, useCallback } from "react";
import SvgArrowRight from "../Icons/ArrowRight";
import "../styles/BoxComponent.scss";

const Accordion = props => {
  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.scrollHeight + 20);
    }
  }, []);
  const [height, setHeight] = useState(0);
  let styles = {
    height: height
  };
  return (
    <div className="box__element">
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
          style={styles}
          ref={measuredRef}
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
