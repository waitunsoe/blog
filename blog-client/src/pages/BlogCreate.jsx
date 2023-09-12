import React, { useState } from "react";
import FileUpload from "../components/FileUploader";
import FileUploader from "../components/FileUploader";
import CategoryCreateModel from "../components/CategoryCreateModel";
import { createData } from "../services/api";

const BlogCreate = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const [formData, setFormData] = useState({
    cover_photo: null,
    title: "",
    category_id: "",
    description: "",
    photos: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleBlogCreate = async (e) => {
    e.preventDefault();
    console.log(formData);
    await createData("blog", formData);
    console.log("Blog created successfully!");
  };

  return (
    <section className=" relative border border-gray-700 shadow rounded-lg mb-16 mx-auto md:max-w-xl lg:max-w-2xl p-5">
      <h2 className="mb-4 text-xl font-bold text-white text-center">
        Add a new blog
      </h2>
      <form onSubmit={handleBlogCreate}>
        <div className="flex flex-col gap-5">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input"
            >
              Upload cover photo
            </label>
            <input
              className="block w-full text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input"
              type="file"
              name="cover_photo"
              onChange={handleFileChange}
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              id="title"
              className="block w-full p-2  text-sm text-white border  rounded-lg bg-gray-800 border-gray-700 placeholder-gray-400 outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Type Title"
              required=""
            />
          </div>

          <div className="flex flex-wrap items-end justify-between">
            <div className=" w-3/4 md:w-1/2">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-white"
              >
                Category
              </label>
              <select
                name="category_id"
                value={formData.category}
                onChange={handleInputChange}
                id="category"
                className="block w-full p-2  text-sm text-white border  rounded-lg bg-gray-800 border-gray-700 placeholder-gray-400 outline-none  focus:ring-blue-500 focus:border-blue-500"
              >
                <option defaultValue="">Select category</option>
                <option value="1">TV/Monitors</option>
                <option value="2">PC</option>
                <option value="3">Gaming/Console</option>
                <option value="4">Phones</option>
              </select>
            </div>
            <button
              onClick={handleShowModal}
              type="button"
              className=" space-x-3  border focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 md:py-2 py-2.5 text-center flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 "
            >
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
              <span className="hidden md:block">Add New Category</span>
            </button>
          </div>

          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="8"
              className="block w-full p-2  text-sm text-white border  rounded-lg bg-gray-800 border-gray-700 placeholder-gray-400 outline-none  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your description here"
            ></textarea>
          </div>

          <div className="">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blog photos
            </label>
            <FileUploader />
          </div>

          <button className=" w-full  border focus:ring-4 focus:outline-none  font-medium rounded-lg px-5 py-2.5 text-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 ">
            Add Blog
          </button>
        </div>
      </form>

      {showModal && (
        <CategoryCreateModel
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </section>
  );
};

export default BlogCreate;
