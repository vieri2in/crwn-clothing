import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../../routes/category/category.component";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
// import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { fetchCategoriesStart } from "../../store/categories/categories.action";
import "./shop.styles.scss";
const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("fetch async is fired");
    // dispatch(fetchCategoriesAsync());
    // fetchCategoriesAsync()(dispatch);
    dispatch(fetchCategoriesStart());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
