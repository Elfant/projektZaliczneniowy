import * as React from "react";

import BlogCard from "./BlogCard";

import Post from "../models/Post";

interface OwnProps {
  posts: Post[];
}

const Posts: React.FC<OwnProps> = ({ posts }) => (
  <div className="posts">
    {posts.length
      ? posts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            author={post.author}
            title={post.title}
            date={post.date}
          />
        ))
      : null}
  </div>
);

export default Posts;
