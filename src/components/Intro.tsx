import * as React from "react";

import Post from "../models/Post";

interface OwnProps {
  posts: Post[];
  filterPosts: Function;
}

const Intro: React.FC<OwnProps> = ({ posts, filterPosts }) => {
  const handleFiltering = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      const regEx = new RegExp(e.target.value, "i");

      const filtredPosts = posts.filter((item) => regEx.test(item.title));
      
      filterPosts(filtredPosts);
    };

    if(e.target.value.length === 0) {
      filterPosts([]);
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
