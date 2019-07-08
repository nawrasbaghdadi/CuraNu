import React, { useState } from "react";
import Accordion from "./AccordionComponent";

const AccordionContainer = props => {
  let initialState = [];
  initialState = props.data;
  initialState[0].open = props.firstOpen;

  const [actives, setActives] = useState(initialState);

  const changeActive = e => {
    let id = Number(e.currentTarget.dataset.id);
    if (!props.keepOpen) {
      const newActives = actives.map(ele => {
        if (ele.id !== id) {
          return Object.assign({}, ele, { open: false });
        } else {
          return Object.assign({}, ele, { open: !ele.open });
        }
      });
      setActives(newActives);
    } else {
      const newActives = actives.map(ele => {
        if (ele.id === id) {
          return Object.assign({}, ele, { open: !ele.open });
        } else {
          return ele;
        }
      });
      setActives(newActives);
    }
  };
  const Accordions = actives.map(ele => {
    return (
      <Accordion
        title={ele.title}
        content={ele.content}
        onClickHandle={changeActive}
        active={ele.open}
        accordionID={ele.id}
        key={ele.id + "_acc"}
      />
    );
  });

  return <div className="box">{Accordions}</div>;
};
export default AccordionContainer;
