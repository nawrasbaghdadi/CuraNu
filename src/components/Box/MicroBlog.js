import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";
import profile from "../../styles/gfx/Oval 2 2.png";
import likes from "../../styles/gfx/Bitmap-4.png";
import img from "../../styles/gfx/img.png";
import link from "../../styles/gfx/link.png";
import unnamed from "../../styles/gfx/unnamed.png";
const MicroBlog = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--blogs box--microblogs">
      <BoxHeader title={props.title} icon="pen" />
      <div className="box__content box__content--default">
        <div className="box__content__item">
          <form>
            <textarea className="box__textArea" />
            <div className="labels">
              <a href="#">
                <img src={img} />
              </a>
              <a href="#">
                <img src={link} />
              </a>
              <button type="button">Plaats</button>
            </div>
          </form>
        </div>
        <div className="box__content__item">
          <span className="item__media">
            <a href="">
              <img src={profile} />
            </a>
          </span>

          <span className="item__text item__text--blogs">
            <span className="item__info">
              Ria de Vries
              <time className="item__date" dateTime="2016-09-12">
                12/09/2016 - 11:10
              </time>
            </span>

            <span className="interaction">
              <a href="#">
                <img src={likes} />
                <span>1</span>
              </a>
            </span>
          </span>
          <p className="item__slogon">
            Nieuwe campagne CuraNed gisteren van start gegaan
          </p>
        </div>
        <div className="box__content__item img-box">
          <img src={unnamed} />
          <p className="item__slogon">Lees meer en reacties (0)</p>
        </div>
      </div>

      {withFooter ? <BoxFooter more={"Toon meer"} /> : ""}
    </div>
  );
};
export default MicroBlog;
