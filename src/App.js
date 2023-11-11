import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navgation from "./routes/navigation/navigation.component";
const Shop = () => <p>I am a shop</p>;
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navgation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};
export default App;
