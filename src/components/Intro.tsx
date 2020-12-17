import * as React from "react";

// import "../images/thinking_guy.svg";

const Intro: React.FC = () => {
  return (
    <section className="container">
      <div className="intro">
        <div className="intro__header">
          <h1 className="intro__greeting">Witaj na blogu o IT. <br /> Znajdź temat dla siebie:</h1>
        </div>
        <div className="intro__image"></div>
        <label className="intro__search-label">
          <i className="intro__icon"></i> 
          <input className="intro__search" placeholder="Wyszukaj" type="text"/>
        </label>
       
      </div>
    </section>
  );
};

export default Intro;
