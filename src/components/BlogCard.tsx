import * as React from "react";

interface OwnProps {
  key: string;
  author: string;
  title: string;
  date: string;
}

const BlogCard: React.FC<OwnProps> = ({ author, title, date }) => {
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
