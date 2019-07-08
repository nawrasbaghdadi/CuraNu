import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";

const Peilingen = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--evenementen">
      <BoxHeader title={props.title} icon="kwaliteitshandboek" />
      <div className="box__content box__content--default peilingen">
        <p>Er zijn geen peilingen beschikbaar.</p>
      </div>

      {withFooter ? <BoxFooter more={"Naar kwaliteitshandboek"} /> : ""}
    </div>
  );
};
export default Peilingen;
