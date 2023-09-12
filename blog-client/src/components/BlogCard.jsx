import React from "react";
import { Link } from "react-router-dom";
import ReadingTime from "./ReadingTime";

const BlogCard = ({
  title,
  slug,
  description,
  coverPhoto,
  photos,
  categoryName,
}) => {
  return (
    <article className="group md:max-w-md lg:max-w-4xl xl:max-w-4xl shadow rounded-md border border-gray-800 hover:border-gray-700 duration-200  grid grid-cols-1 lg:grid-cols-2">
      <div className="col-start-1 row-start-1 sm:mb-6 lg:row-span-6 md:mb-0  lg:mr-3">
        <img
          src={coverPhoto}
          alt=""
          className="w-full h-60 object-cover rounded-s sm:h-full"
          loading="lazy"
        />
      </div>
      <div className="flex justify-between items-start mt-3 lg:mt-0">
        <button className="  border focus:ring-4 focus:outline-none  px-5 py-2 text-center  focus:ring-gray-600 bg-gray-800 border-gray-700 text-white group-hover:bg-gray-700">
          {categoryName}
        </button>
        <div>
          <Link to={`/blog-edit/${slug}`}>
            <button className=" border focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center  focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </button>
          </Link>
          <button className=" border focus:ring-4 focus:outline-none  font-medium text-sm px-5 py-2.5 text-center  focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative p-3 sm:pb-0 col-start-1 row-start-1 lg:col-start-2 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/100 via-black/0 sm:bg-none sm:row-start-2 ">
        <h5
          className="text-xl font-bold tracking-tight text-white line-clamp-1"
          style={{ textWrap: "balance" }}
        >
          {title}
        </h5>
      </div>
      <div className="p-3 pb-0 lg:col-start-2 lg:row-start-3">
        <div className="flex items-end  justify-between ">
          <div className="flex items-center space-x-2 md:space-x-4">
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt=""
            />

            <p className="font-medium text-white">
              <span className="text-sm text-gray-400">By</span> Jese Leos
              <span className="block text-sm text-gray-400 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock-history inline-block"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <span>1 day ago</span>
              </span>
            </p>
          </div>
          <ReadingTime text={description} />
        </div>
      </div>
      <div className="p-3 flex flex-col lg:col-start-2 lg:row-start-4 justify-between leading-normal">
        <p className="mb-3 font-normal text-gray-400 line-clamp-3">
          {description}
        </p>
        <Link to={`blog/${slug}`}>
          <button className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
