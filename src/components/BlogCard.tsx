import * as React from "react";

const BlogCard: React.FC = () => {
  return (
    <div className="blog-card">
      <div className="blog-card__text">
        <p className="blog-card__author">Aleksander Tański</p>
        <h5 className="blog-card__title">Framework, który pomoże szybko ...</h5>
        <p className="blog-card__date"> 10 lis</p>
      </div>
      <div className="blog-card__img"></div>
    </div>
  );
};

export default BlogCard;
