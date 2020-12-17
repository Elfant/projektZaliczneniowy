import * as React from "react";

const Header: React.FC = () => {
  return (
    <header className="container header">
      <nav className="header__navbar navbar">
        <p className="navbar__logo logo logo--big">U<br/><strong className="logo__bolded-word">mnie</strong><br />dziala</p>
        <div className="navbar__toggler-box">
          <div className="navbar__triangle"></div>
          <div className="navbar__toggler toggler">
            <div className="toggler__bar"></div>
            <div className="toggler__bar"></div>
            <div className="toggler__bar"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;