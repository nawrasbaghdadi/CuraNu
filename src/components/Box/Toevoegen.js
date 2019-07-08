import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";

const MijnLinks = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--evenementen box--mijnlinks">
      <BoxFooter more="Widget toevoegen" icon="add" />
    </div>
  );
};
export default MijnLinks;
