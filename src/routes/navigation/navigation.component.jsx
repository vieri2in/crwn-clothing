import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { UserContext } from "../../contexts/user.context";
// import { CartContext } from "../../contexts/cart.context";
import { selectIsCarOpen } from "../../store/cart/cart.selector";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import { signOutStart } from "../../store/user/user.action";
import {
  NavgationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
const Navgation = () => {
  // const { currentUser } = useContext(UserContext);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCarOpen);

  const signOutHanlder = async () => {
    // await signOutUser();
    // setCurrentUser(null);
    dispatch(signOutStart());
  };
  // console.log(currentUser);
  return (
    <>
      <NavgationContainer>
        <LogoContainer to={"/"}>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/shop"}>SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHanlder}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropDown />}
      </NavgationContainer>
      <Outlet />
    </>
  );
};
export default Navgation;
