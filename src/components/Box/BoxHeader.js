import React from "react";
import SvgExternalLink from "../../Icons/ExternalLink";
import SvgShape2 from "../../Icons/Shape2";
import SvgArrowRightCopy2 from "../../Icons/ArrowRightCopy2";
import SvgCalendar from "../../Icons/Calendar";
import SvgNotificationBell from "../../Icons/NotificationBell";
import SvgShape from "../../Icons/Shape";
import SvgNewspaper from "../../Icons/Newspaper";
import SvgKwaliteitshandboek from "../../Icons/Kwaliteitshandboek";
import SvgGroups from "../../Icons/Groups";

const BoxHeader = props => {
  let Icon;
  switch (props.icon) {
    case "calendar":
      Icon = <SvgCalendar width="27px" height="27px" />;
      break;
    case "notification":
      Icon = <SvgNotificationBell width="27px" height="27px" />;
      break;
    case "pen":
      Icon = <SvgShape width="27px" height="27px" />;
      break;
    case "newspaper":
      Icon = <SvgNewspaper width="27px" height="27px" />;
      break;
    case "kwaliteitshandboek":
      Icon = <SvgKwaliteitshandboek width="27px" height="27px" />;
      break;
    case "Groups":
      Icon = <SvgGroups width="27px" height="27px" />;
      break;
    default:
      Icon = <SvgExternalLink width="27px" height="27px" />;
  }

  return (
    <div className="box__header box__header--default">
      <div className="box__icon">
        <a href="">{Icon}</a>
      </div>
      <h2 className="box__title">{props.title}</h2>
      <span className="box__icon inline-icon">
        <a href="">
          <SvgArrowRightCopy2 width="21px" height="13px" />
        </a>
      </span>
      <div className="box__icon">
        <a href="#">
          <SvgShape2 width="19px" height="19px" />
        </a>
      </div>
    </div>
  );
};

export default BoxHeader;
