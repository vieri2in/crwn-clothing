// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div>
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreview title={title} products={categoriesMap[title]} />
      ))}
    </div>
  );
};
export default CategoriesPreview;
