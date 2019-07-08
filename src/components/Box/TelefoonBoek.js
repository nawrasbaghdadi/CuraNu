import React from "react";

import BoxFooter from "./BoxFooter";
import SvgZoeken from "../../Icons/Zoeken";

const TelefoonBoek = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--telfoonboek">
      <div className="box__content box__content--default">
        <h2 className="box__title">{props.title}</h2>
        <p>Vind collega’s op naam, trefwoord, functie, etc.</p>
        <form className="box__search">
          <input type="text" className="box__input" />
          <span className="box__btn">
            <a href="">
              <SvgZoeken width="45px" height="45px" />
            </a>
          </span>
        </form>
      </div>

      {withFooter ? <BoxFooter more={"Direct naar"} /> : ""}
    </div>
  );
};
export default TelefoonBoek;
