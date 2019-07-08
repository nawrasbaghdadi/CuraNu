import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";

const MijnLinks = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--evenementen box--mijnlinks">
      <BoxHeader title={props.title} icon="link" />
      <div className="box__content box__content--default">
        <ul>
          <li className="box__content__item Kwaliteitshandboek ">
            <a href="" className="link">
              <span className="clm-wrapper">
                <span className="item__text bold">Zorggroep.nl</span>
              </span>
            </a>
          </li>
          <li className="box__content__item Kwaliteitshandboek ">
            <a href="" className="link">
              <span className="clm-wrapper">
                <span className="item__text bold">zorgvisie.nl</span>
              </span>
            </a>
          </li>
          <li className="box__content__item Kwaliteitshandboek ">
            <a href="" className="link">
              <span className="clm-wrapper">
                <span className="item__text bold">medicalfacts.nl</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      {withFooter ? <BoxFooter more={"Naar kwaliteitshandboek"} /> : ""}
    </div>
  );
};
export default MijnLinks;
