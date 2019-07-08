import React from "react";
import SvgBlackSettingsButton from "../Icons/BlackSettingsButton";
import SvgNotificationBell from "../Icons/NotificationBell";
import SvgZoeken from "../Icons/Zoeken";
import logo from "../styles/gfx/Bitmap.png";

const HeaderComponent = props => {
  return (
    <header className="header">
      <div className="header__element">
        <ul className="header__element__list header__element__list--site-nav container">
          <li className="header__link">
            <a href="#">Groepen Contact</a>
          </li>
          <li className="header__link">
            <a href="#">FAQ</a>
          </li>
          <li className="header__link">
            <a href="#">Smoelenboek</a>
          </li>
          <li className="header__link">
            <a href="#">Microblog</a>
          </li>
          <li className="header__link">
            <a href="#">Over ons</a>
          </li>
          <li className="header__link header__link--profile-settings">
            <a href="#">
              <SvgBlackSettingsButton width="30px" height="30px" />
            </a>
          </li>
          <li className="header__link header__link--notification">
            <a href="#">
              <SvgNotificationBell width="30px" height="30px" />
              <span className="notification">1</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="header__element ">
        <div className="header__logo container">
          <a href="#">
            <img src={logo} alt="CuraNu" className="header__logo__img" />
            <span className="header__logo__slogan">
              <span className="header__logo__name">CuraNu</span>
              <span className="header__logo__title">Zorg en welzijn</span>
            </span>
            <span className="header__logo__status">Intranet</span>
          </a>
        </div>
      </div>
      <div className="header__element header__element--full-bg">
        <ul className="header__element__list header__element__list--main-nav container">
          <li className="header__link">
            <a href="#">Artikelen</a>
          </li>
          <li className="header__link">
            <a href="#">Nieuws</a>
          </li>
          <li className="header__link">
            <a href="#">Evenementen</a>
          </li>
          <li className="header__link">
            <a href="#">Kwaliteitshandboek</a>
          </li>
          <li className="header__link">
            <form className="header__search">
              <input type="text" className="header__input" />
              <span className="header__btn">
                <SvgZoeken width="45px" height="45px" />
              </span>
            </form>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
