import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import productListReducer from "./productList-reducer";
import singleProductDataReducer from "./singleProductData-reducer";

export default combineReducers({
  logged: userReducer,
  products: productListReducer,
  singleProductData: singleProductDataReducer
});
