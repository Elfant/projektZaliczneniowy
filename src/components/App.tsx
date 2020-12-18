import * as React from "react";

import Header from "./Header";
import Intro from "./Intro";
import SectionHeader from "./SectionHeader";
import Footer from "./Footer";
import BlogCard from "./BlogCard";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Intro />
      <section className="container">
        <SectionHeader text="Popularne" />
        <BlogCard />
      </section>
      <section className="container">
        <SectionHeader text="Newsletter" />
      </section>
    </>
  );
};

export default App;
