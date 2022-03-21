import React from "react";
import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h1>{title}</h1>
        <h4>SHOP NOW</h4>
      </div>
    </div>
  );
};

export default CategoryItem;
