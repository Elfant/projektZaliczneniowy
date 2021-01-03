import * as React from "react";

import Post from "../models/Post";

const BlogCard: React.FC<Post> = ({ author, title, date }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__text">
        <p className="blog-card__author">{author}</p>
        <h5 className="blog-card__title">{title}</h5>
        <p className="blog-card__date">{date}</p>
      </div>
      <div className="blog-card__img"></div>
    </div>
  );
};

export default BlogCard;
