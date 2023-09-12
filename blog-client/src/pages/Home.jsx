import React from "react";
import BlogList from "../components/BlogList";
import CategoryList from "../components/CategoryList";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <main className=" lg:row-start-1 lg:col-span-2">
        <BlogList />
      </main>
      <aside className="lg:row-start-1 ">
        <CategoryList />
      </aside>
    </div>
  );
};

export default Home;
