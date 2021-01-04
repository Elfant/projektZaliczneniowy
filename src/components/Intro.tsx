import * as React from "react";

import Post from "../models/Post";

interface OwnProps {
  posts: Post[];
  setFilteredPosts: Function;
}

const Intro: React.FC<OwnProps> = ({ posts, setFilteredPosts }) => {
  const handleFiltering = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      const regEx = new RegExp(e.target.value, "i");

      const filtredPosts = posts.filter((item) => regEx.test(item.title));

      setFilteredPosts(filtredPosts);
    };

    if (e.target.value.length === 0) {
      setFilteredPosts([]);
    }
  };

  return (
    <section className="container">
      <div className="intro">
        <div className="intro__header">
          <h1 className="intro__greeting">
            Witaj na blogu o IT. <br /> Znajdź temat dla siebie:
          </h1>
        </div>
        <div className="intro__image"></div>
        <label className="intro__search-label">
          <i className="intro__icon"></i>
          <input
            className="intro__search"
            placeholder="Wyszukaj"
            type="text"
            onChange={handleFiltering}
          />
        </label>
      </div>
    </section>
  );
};

export default Intro;
