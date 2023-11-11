import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem id={category.id} category={category} />
    ))}
  </div>
);
export default Directory;
