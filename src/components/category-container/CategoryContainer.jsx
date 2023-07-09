import React from "react";

export const CategoryContainer = ({ name }) => {
  return (
    <div className="category-container">
      <div className='background-image' />
      <div className="category-body-container">
        <h2>{name}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
