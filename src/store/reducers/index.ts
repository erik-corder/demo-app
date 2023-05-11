import { combineReducers } from "@reduxjs/toolkit";
import productListReducer from "./productListReducer";
import productReducer from "./productReducer";

const appReducer = combineReducers({
  productList: productListReducer,
  product: productReducer,
});

export const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};
