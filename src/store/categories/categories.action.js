import { CATEGORIES_ACTION_TYPES } from "./categories.types";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
export const fetchCategoriesStart = () => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
  };
};
export const fetchCategoriesSuccess = (categoriesArray) => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray,
  };
};
export const fetchCategoriesFailed = (error) => {
  return {
    type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
};
