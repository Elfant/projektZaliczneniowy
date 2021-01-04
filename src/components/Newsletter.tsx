import * as React from "react";

import { useState } from "react";

const Newsletter = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setisValiEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const label = document.querySelector(".label");

    const reqEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (reqEx.test(inputValue)) {
      setisValiEmail(true);

      setInputValue("");
      label.textContent = "";
    } else {
      label.textContent = "Niepoprawny email";
    }
  };

  return (
    <div className="newsletter">
      <div className="newsletter__content">
        <h2 className="newsletter__header">
          Chcesz, zeby u <br />
          <strong className="newsletter__bolded-word">
            Ciebie
          </strong> <br /> też działało?
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            disabled={isValidEmail ? true : false}
            name="email"
            type="text"
            className="newsletter__input"
            placeholder="Twoj email"
          />
          <label
            htmlFor="email"
            className={`newsletter__label label ${
              isValidEmail ? "" : "label--incorrect"
            }`}
          ></label>
          <button
            disabled={isValidEmail ? true : false}
            type="submit"
            className="newsletter__button"
          >
            {isValidEmail ? "Dziękujemy!" : "Zapisz się"}
          </button>
        </form>
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
