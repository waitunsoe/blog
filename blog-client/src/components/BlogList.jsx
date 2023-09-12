import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Search from "./Search";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { fetchData } from "../services/api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchBlogs = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetchData(`blog?page=${page}`);
      const { data: blogs } = await response.data;
      if (blogs.length === 0) {
        setHasMore(false);
      }
      setBlogs((prevItems) => [...prevItems, ...blogs]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-5 sticky top-[65px] py-3 z-10 bg-gray-900">
        <Search />
        <Link to={"/blog-create"}>
          <button className=" space-x-3  border focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <span className="hidden sm:block">Add Blog</span>
          </button>
        </Link>
      </div>

      <InfiniteScroll
        dataLength={blogs.length}
        next={fetchBlogs}
        hasMore={hasMore}
        loader={<Loading />}
        endMessage={
          <p className="text-white text-lg mt-5">No More Blog! It's the end.</p>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10 md:gap-5  lg:gap-10">
          {blogs?.map((blog) => (
            <BlogCard
              key={blog.id + Math.random()}
              title={blog.title}
              slug={blog.slug}
              description={blog.description}
              coverPhoto={blog.cover_photo}
              photos={blog.photos}
              categoryName={blog.category.name}
            />
          ))}
        </div>
      </InfiniteScroll>
      {error && <p className="text-red text-xl">Error: {error.message}</p>}
    </>
  );
};

export default BlogList;
