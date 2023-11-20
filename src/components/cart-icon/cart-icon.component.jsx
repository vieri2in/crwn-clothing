// import { useContext } from "react";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import { CartContext } from "../../contexts/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCarOpen,
} from "../../store/cart/cart.selector";
// import "./cart-icon.styles.jsx";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
const CartIcon = () => {
  const dispatch = useDispatch();
  // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCarOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};
export default CartIcon;
