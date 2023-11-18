// import "./category-item.styles.jsx";
import { useNavigate } from "react-router-dom";
import {
  Body,
  CategoryItemContainer,
  BackgroundImage,
} from "./category-item.styles";
const CategoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop now</p>
      </Body>
    </CategoryItemContainer>
  );
};
export default CategoryItem;
