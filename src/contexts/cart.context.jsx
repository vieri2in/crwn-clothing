import { createContext, useState, useEffect, useReducer } from "react";
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
const removeItemToCartHelper = (cartItems, productToRemove) => {
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
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};
const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};
const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer.`);
  }
};
export const CartProvider = ({ children }) => {
  const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };
  const addItemToCart = (productToAdd) => {
    const newCartItems = addItemToCartHelper(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };
  const removeItemToCart = (productToRemove) => {
    const newCartItems = removeItemToCartHelper(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };
  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearItemFromCartHelper(cartItems, productToClear);
    updateCartItemsReducer(newCartItems);
  };
  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
