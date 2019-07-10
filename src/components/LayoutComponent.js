import React from "react";
const LayoutComponent = props => {
  const columns = {};
  const layout = [];
  for (let i = 0; i < props.columns; i++) {
    columns[`column${i}`] = [];
  }
  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns;
    columns[`column${columnIndex}`].push(<div>{props.children[i]}</div>);
  }

  for (let i = 0; i < props.columns; i++) {
    layout.push(<div className="colum">{columns[`column${i}`]}</div>);
  }

  return <div className="page__container container">{layout}</div>;
};

export default LayoutComponent;
