import { useState } from "react";

const Categories = () => {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState<number>(0);

  const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

  const categoriesElements = categories.map((category, idx) => {
    return (
      <li
        className={idx === categoryActiveIndex ? "active" : ""}
        onClick={() => setCategoryActiveIndex(idx)}
      >
        {category}
      </li>
    );
  });

  return (
    <div className="categories">
      <ul>
        {categoriesElements}
      </ul>
    </div>
  );
};

export default Categories;
