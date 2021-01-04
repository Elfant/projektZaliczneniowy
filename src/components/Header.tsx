import * as React from "react";

import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    const menu = document.querySelector(".menu");
    const toggler = document.querySelector(".toggler");

    if (isOpen) {
      toggler.classList.remove("toggler--clicked");
      menu.classList.remove("menu--open");

      document.body.style.overflow = "auto";

      setIsOpen(false);
    } else {
      toggler.classList.add("toggler--clicked");
      menu.classList.add("menu--open");

      document.body.style.overflow = "hidden";

      setIsOpen(true);
    }
  };

  return (
    <header className="header">
      <nav className="header__navbar navbar container">
        <p className="navbar__logo logo logo--big">
          U<br />
          <strong className="logo__bolded-word">mnie</strong>
          <br />
          dziala
        </p>
        <div className="navbar__toggler-box ">
          <div className="navbar__triangle"></div>
          <div className="navbar__toggler toggler" onClick={handleMenu}>
            <div className="toggler__bar"></div>
            <div className="toggler__bar"></div>
            <div className="toggler__bar"></div>
          </div>
        </div>
        <ul className="header__menu menu">
          <li className="menu__item">
            <a className="menu__link" href="#">
              Posty
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              O nas
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">
              Kursy
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
