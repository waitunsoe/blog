import React, { useEffect, useState } from "react";
import Category from "./Category";
import { fetchData } from "../services/api";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const response = await fetchData(`category`);
    const { data: categories } = await response.data;
    setCategories((prevItems) => [...prevItems, ...categories]);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="lg:sticky lg:top-20">
      <h3 className="text-white font-bold text-2xl mb-8 text-center">
        Category
      </h3>
      <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-3">
        {categories.map((category) => (
          <Category key={category.id} name={category.name} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
