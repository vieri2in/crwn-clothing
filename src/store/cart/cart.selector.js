import { createSelector } from "reselect";
const selectCarReducer = (state) => state.cart;
export const selectCartItems = createSelector(
  [selectCarReducer],
  (cart) => cart.cartItems
);
export const selectIsCarOpen = createSelector(
  [selectCarReducer],
  (cart) => cart.isCartOpen
);
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
