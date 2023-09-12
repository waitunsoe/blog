import React from "react";

const CategoryCreateModel = ({ showModal, setShowModal }) => {
  return (
    <section
      className={`${
        showModal ? "absolute" : "hidden"
      } top-40 right-4 bg-gray-800 border border-gray-700 shadow rounded-lg mb-16 mx-auto w-full  max-w-sm p-5`}
    >
      <button onClick={() => setShowModal(!showModal)} className="absolute top-2 right-2 text-gray-400 bg-gray-600 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:text-white">
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <h2 className="mb-4 text-xl font-bold text-white text-center">
        Add a new category
      </h2>
      <form>
        <div className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full p-2  text-sm text-white border  rounded-lg bg-gray-800 border-gray-700 placeholder-gray-400 outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type Name"
              required=""
            />
          </div>

          <button className=" w-full  border focus:ring-4 focus:outline-none  font-medium rounded-lg px-5 py-2.5 text-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 ">
            Add Category
          </button>
        </div>
      </form>
    </section>
  );
};

export default CategoryCreateModel;
