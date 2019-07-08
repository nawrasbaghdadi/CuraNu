import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";
import YouForce from "../../styles/gfx/images.png";
import MIP from "../../styles/gfx/Bitmap.png";
import Topdesk from "../../styles/gfx/topdesk.png";

const DirectNaar = props => {
  const withFooter = props.footer;

  return (
    <div className="box">
      <BoxHeader title={props.title} />
      <div className="box__content box__content--default">
        <ul>
          <li className="box__content__item">
            <a href="">
              <span className="item__media">
                <img src={YouForce} />
              </span>
              <span className="item__text">Youforce</span>
            </a>
          </li>
          <li className="box__content__item">
            <a href="">
              <span className="item__media">
                <img src={MIP} />
              </span>
              <span className="item__text">MIP-meldingen</span>
            </a>
          </li>
          <li className="box__content__item">
            <a href="">
              <span className="item__media">
                <img src={Topdesk} />
              </span>
              <span className="item__text">Topdesk</span>
            </a>
          </li>
        </ul>
      </div>

      {withFooter ? <BoxFooter more={"Direct naar"} /> : ""}
    </div>
  );
};
export default DirectNaar;
