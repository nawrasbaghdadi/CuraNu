import React from "react";
import BoxHeader from "./BoxHeader";
import BoxFooter from "./BoxFooter";
import profile from "../../styles/gfx/Oval 2 2.png";
import comments from "../../styles/gfx/comments.png";
import likes from "../../styles/gfx/Bitmap-4.png";

const Blogs = props => {
  const withFooter = props.footer;

  return (
    <div className="box box--blogs">
      <BoxHeader title={props.title} icon="notification" />
      <div className="box__content box__content--default">
        <div className="box__content__item">
          <span className="item__media">
            <a href="">
              <img src={profile} />
            </a>
          </span>

          <span className="item__text item__text--blogs">
            <span className="item__info">
              Jacob Cobijn
              <time className="item__date" dateTime="2016-04-12">
                12/04/2016
              </time>
            </span>

            <span className="interaction">
              <a href="#">
                <img src={likes} />
                <span>1</span>
              </a>
              <a href="">
                <img src={comments} />
                <span>12</span>
              </a>
            </span>
          </span>
        </div>
      </div>

      {withFooter ? <BoxFooter more={"Meer blogs"} /> : ""}
    </div>
  );
};
export default Blogs;
