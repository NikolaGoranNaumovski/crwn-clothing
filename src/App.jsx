import { CategoryContainer } from "./components/category-container/CategoryContainer";

import './categories.styles.scss'

const App = () => {
  const categories = ["Hats", "Jackets", "Sneakers", "Womens", "Mens"];

  return (
    <div className="categories-container">
      {categories.map((item) => (
        <CategoryContainer key={item} name={item} />
      ))}
    </div>
  );
};

export default App;
