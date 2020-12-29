import * as React from "react";
import { useEffect, useState } from "react";

import Header from "./Header";
import Intro from "./Intro";
import SectionHeader from "./SectionHeader";
import Footer from "./Footer";
import BlogCard from "./BlogCard";
import Newsletter from "./Newsletter";

const App: React.FC = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("/src/mocks/posts.json")
      .then((resp) => resp.json())
      .then((data) => setPost(data.posts));
    // .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <section className="container">
        <SectionHeader text="Popularne" />
        <div className="posts">
          {posts.length
            ? posts.map((post) => (
                <BlogCard
                  key={post.id}
                  author={post.author}
                  title={post.title}
                  date={post.date}
                />
              ))
            : null}
        </div>
      </section>
      <section className="container">
        <SectionHeader text="Newsletter" />
        <Newsletter />
      </section>
      <Footer />
    </>
  );
};

export default App;
