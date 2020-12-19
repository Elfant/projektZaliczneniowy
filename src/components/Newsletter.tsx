import * as React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <h2 className="newsletter__header">
          Chcesz, zeby u <br />
          <strong className="newsletter__bolded-word">
            Ciebie
          </strong> <br /> też działało?
        </h2>
        <input
          type="text"
          className="newsletter__input"
          placeholder="Twoj email"
        />
        <button className="newsletter__button">Zapisz się</button>
        <p className="newsletter__explanation">
          *Zapisując się akceptujesz Regulamin Newslettera i Politykę
          Prywatności, oraz wyrażasz zgodę na otrzymywanie na podany adres
          e-mail informacji handlowych w rozumieniu ustawy z dnia 18 lipca 2002
          r. o świadczeniu usług drogą elektroniczną.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
