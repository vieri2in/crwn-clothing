import { CART_ACTION_TYPES } from "./cart.types";
const addItemToCartHelper = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeItemFromCartHelper = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const clearItemFromCartHelper = (cartItems, productToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== productToClear.id);
};

export const setIsCartOpen = (bool) => {
  return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool };
};
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addItemToCartHelper(cartItems, productToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeItemFromCartHelper(cartItems, productToRemove);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = clearItemFromCartHelper(cartItems, productToClear);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};
