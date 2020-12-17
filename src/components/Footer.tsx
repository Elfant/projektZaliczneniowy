import * as React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer container">
      <div className="footer__content">
        <p className="footer__logo logo">U<br/> <strong className="logo__bolded-word">mnie</strong><br />dziala</p>
        <ul className="footer__list list">
          <li className="list__item">Kontakt</li>
          <li className="list__item">O nas</li>
        </ul>
      </div>
    </footer>
  );
};


export default Footer;
