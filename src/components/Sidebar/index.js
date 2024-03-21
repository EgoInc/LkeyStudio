import "./sidebar.scss";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoL from "../../assets/images/logo.svg";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faGithub,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  // const [language, setLanguage] = useState(() => {
  //   const locale = navigator.language;
  //   return locale.startsWith("en") ? "en" : "ru"; // установка языка на основе языка браузера
  // });

  const handleLanguageChange = (e) => {
    props.onLanguageChanged(e.target.value);
  };

  return (
    <>
      <div className="nav-bar">
        {/* logo */}
        <Link className="logo" to="/">
          <img src={LogoL} alt="logo" />
        </Link>

        {/* language settings */}
        <div className="radio-group">
          <input
            type="radio"
            id="option-one"
            name="selector"
            value="ru-RU"
            checked={props.language === "ru-RU"}
            onChange={(e) => handleLanguageChange(e)}
          />
          <label htmlFor="option-one">Ru</label>

          <input
            type="radio"
            id="option-three"
            name="selector"
            value="en-US"
            checked={props.language === "en-US"}
            onChange={(e) => handleLanguageChange(e)}
          />
          <label htmlFor="option-three">Eng</label>
        </div>

        {/* navigation */}
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>

        {/* links */}
        <ul>
          <li>
            <a
              href="https://t.me/+79940199114"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTelegram}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send/?phone=79940199114"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                color="#4d4d4e"
                className="anchor-icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
