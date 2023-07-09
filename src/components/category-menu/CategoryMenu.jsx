import CategoryContainer from "../category-container/CategoryContainer";

import "./category-menu.styles.scss";

const CategoryMenu = ({ categories }) => {
  return (
    <>
      {categories.map((item) => (
        <CategoryContainer key={item.id} category={item} />
      ))}
    </>
  );
};

export default CategoryMenu;
