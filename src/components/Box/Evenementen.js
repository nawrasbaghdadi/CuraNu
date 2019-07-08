import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";

const Evenementen = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--evenementen">
      <BoxHeader title={props.title} icon="calendar" />
      <div className="box__content box__content--default">
        <ul>
          <li className="box__content__item">
            <a href="" className="link">
              <time dateTime="2016-12-10" className="item__date">
                10/12/2016
              </time>
              <span className="item__text bold">Zorgmarathon</span>
            </a>
          </li>
          <li className="box__content__item">
            <a href="" className="link">
              <time dateTime="2016-12-10" className="item__date">
                10/12/2016
              </time>
              <span className="item__text bold">Beurs</span>
            </a>
          </li>
          <li className="box__content__item">
            <a href="" className="link">
              <time dateTime="2016-12-10" className="item__date">
                10/12/2016
              </time>
              <span className="item__text bold">Onze zorgevenement</span>
            </a>
          </li>
        </ul>
      </div>

      {withFooter ? <BoxFooter more={"Meer evenementenr"} /> : ""}
    </div>
  );
};
export default Evenementen;
