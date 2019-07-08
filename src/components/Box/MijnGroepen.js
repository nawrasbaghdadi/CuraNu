import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";
import img1 from "../../styles/gfx/Oval 2.png";
import img2 from "../../styles/gfx/Oval 2 Copy 2.png";

const MijnGroepen = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--mijnGroepen">
      <BoxHeader title={props.title} icon="Groups" />
      <div className="box__content box__content--default">
        <ul>
          <li className="box__content__item">
            <a href="">
              <span className="item__media">
                <img src={img1} />
              </span>
              <span className="item__text bold">HRM</span>
            </a>
          </li>
          <li className="box__content__item">
            <a href="">
              <span className="item__media">
                <img src={img2} />
              </span>
              <span className="item__text bold">Marketing & Communicatie</span>
            </a>
          </li>
        </ul>
      </div>

      {withFooter ? <BoxFooter more={"Meer groepen"} /> : ""}
    </div>
  );
};
export default MijnGroepen;
