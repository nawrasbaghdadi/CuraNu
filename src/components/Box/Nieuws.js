import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";
import img1 from "../../styles/gfx/Rectangle 5.png";
import img2 from "../../styles/gfx/Rectangle 5 Copy 2.png";
import img3 from "../../styles/gfx/Rectangle 5 Copy.png";
import likes from "../../styles/gfx/Bitmap-4.png";
const Nieuws = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--evenementen">
      <BoxHeader title={props.title} icon="newspaper" />
      <div className="box__content box__content--default">
        <ul>
          <li className="box__content__item niews ">
            <a href="" className="link">
              <img src={img1} />
              <span className="clm-wrapper">
                <time dateTime="2016-12-10" className="item__date">
                  10/12/2016
                </time>
                <span className="item__text bold">Zorgmarathon</span>
              </span>
            </a>
            <span className="interaction">
              <a href="#">
                <img src={likes} />
                <span>1</span>
              </a>
            </span>
          </li>
          <li className="box__content__item niews ">
            <a href="" className="link">
              <img src={img2} />
              <span className="clm-wrapper">
                <time dateTime="2016-12-10" className="item__date">
                  10/12/2016
                </time>
                <span className="item__text bold">
                  Commissiebrief over nieuwe Wlz
                </span>
              </span>
            </a>
            <span className="interaction">
              <a href="#">
                <img src={likes} />
                <span>1</span>
              </a>
            </span>
          </li>
          <li className="box__content__item niews ">
            <a href="" className="link">
              <img src={img3} />
              <span className="clm-wrapper">
                <time dateTime="2016-12-10" className="item__date">
                  10/12/2016
                </time>
                <span className="item__text bold">
                  VIO erkend als theoretisch goed
                </span>
              </span>
            </a>
            <span className="interaction">
              <a href="#">
                <img src={likes} />
                <span>1</span>
              </a>
            </span>
          </li>
        </ul>
      </div>

      {withFooter ? <BoxFooter more={"Meer evenementenr"} /> : ""}
    </div>
  );
};
export default Nieuws;
