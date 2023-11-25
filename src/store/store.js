import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
import { rootReducer } from "./root-reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const sagaMiddleWare = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  // thunk,
  sagaMiddleWare,
].filter(Boolean);
// const thunkMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(dispatch);
//   }
// };
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
sagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);
