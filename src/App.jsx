import CategoryMenu from "./components/category-menu/CategoryMenu.jsx";
import { categories } from "./utils.js";

import "./categories.styles.scss";

const App = () => {
  return (
    <div className="categories-container">
      <CategoryMenu categories={categories} />
    </div>
  );
};

export default App;
