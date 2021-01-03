import * as React from "react";
import { useEffect, useState } from "react";

import Header from "./Header";
import Intro from "./Intro";
import SectionHeader from "./SectionHeader";
import Footer from "./Footer";
import Posts from "./Posts";
import Newsletter from "./Newsletter";

const App: React.FC = () => {
  const [posts, setPost] = useState([]);
  const [filterdPost, setFilteredPost] = useState([]);

  useEffect(() => {
    fetch("/src/mocks/posts.json")
      .then((resp) => resp.json())
      .then((data) => setPost(data.posts))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Header />
      <Intro setFilteredPosts={setFilteredPost} posts={posts} />
      <section className="container">
        <SectionHeader text="Popularne" />
        <Posts posts={filterdPost.length === 0 ? posts : filterdPost} />
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
