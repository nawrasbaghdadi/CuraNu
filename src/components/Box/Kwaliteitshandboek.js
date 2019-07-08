import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";

const Kwaliteitshandboek = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--evenementen">
      <BoxHeader title={props.title} icon="kwaliteitshandboek" />
      <div className="box__content box__content--default">
        <ul>
          <li className="box__content__item Kwaliteitshandboek ">
            <a href="" className="link">
              <span className="clm-wrapper">
                <span className="item__text bold">Klachtenprocedure</span>
                <time dateTime="2016-04-18" className="item__date">
                  bijgewerk / 18-04-2016
                </time>
              </span>
            </a>
          </li>
          <li className="box__content__item Kwaliteitshandboek ">
            <a href="" className="link">
              <span className="clm-wrapper">
                <span className="item__text bold">
                  Periodieke test gebruikersgroepen
                </span>
                <time dateTime="2016-02-10" className="item__date">
                  bijgewerk / 10-02-2016
                </time>
              </span>
            </a>
          </li>
          <li className="box__content__item Kwaliteitshandboek ">
            <a href="" className="link">
              <span className="clm-wrapper">
                <span className="item__text bold">
                  Dienstrichtlijn tweede niveau
                </span>
                <time dateTime="2016-05-09" className="item__date">
                  bijgewerk / 09-05-2015
                </time>
              </span>
            </a>
          </li>
        </ul>
      </div>

      {withFooter ? <BoxFooter more={"Naar kwaliteitshandboek"} /> : ""}
    </div>
  );
};
export default Kwaliteitshandboek;
