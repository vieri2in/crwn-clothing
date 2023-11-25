// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/categories.selector";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(categoriesMap).map((title) => (
            <CategoryPreview title={title} products={categoriesMap[title]} />
          ))}
        </>
      )}
    </div>
  );
};
export default CategoriesPreview;
