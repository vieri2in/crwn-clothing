import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview title={title} products={categoriesMap[title]} />
      ))}
    </div>
  );
};
export default CategoriesPreview;
