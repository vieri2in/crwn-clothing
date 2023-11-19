import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  onAuthStateChangedListener,
  // signOutUser,
  createUserDocumnetFromAuth,
} from "../src/utils/firebase/firebase.utils";
import Home from "./routes/home/home.component";
import Navgation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import CategoriesPreview from "./routes/categories-preview/categories-preview.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/check-out/check-out.component";
import { setCurrentUser } from "../src/store/user/user.action";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
      if (user) {
        createUserDocumnetFromAuth(user);
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Navgation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};
export default App;
