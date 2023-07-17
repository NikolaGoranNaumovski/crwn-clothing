import { categories } from "../../utils";
import CategoryMenu from "../../components/category-menu/CategoryMenu";

const Home = () => {
  return (
    <div className="categories-container">
      <CategoryMenu categories={categories} />
    </div>
  );
};

export default Home;
