import React from "react";
// import CategoryItem from "../category-item/category-item.component";
import CategoryItem from "../category-item/category-item.component";
// import "./category-menu.styles.scss";
import "./directory.styles.scss";

const CategoryDirectory = ({ categories }) => {
  console.log("this is category:=>", categories);
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
