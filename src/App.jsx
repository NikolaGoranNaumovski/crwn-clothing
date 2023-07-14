import { categories } from "./utils.js";
import CategoryMenu from "./components/category-menu/CategoryMenu.jsx";

const App = () => {
  return (
    <div className="categories-container">
      <CategoryMenu categories={categories} />
    </div>
  );
};

export default App;
