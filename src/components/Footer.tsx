import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        <a href="#" className="footer__link link-reset">
          <p className="footer__logo logo logo--small">U<br/> <strong className="logo__bolded-word">mnie</strong><br />dziala</p>
        </a>
        <ul className="footer__list list">
          <a href="#" className="list__link link-reset">
            <li className="list__item">Kontakt</li>
          </a>
          <a href="#" className="list__link link-reset">
            <li className="list__item">O nas</li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
