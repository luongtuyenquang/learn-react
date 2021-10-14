import { combineReducers } from "redux";
import products from "./productReducer";
import carts from "./cartReducer";

const reducer = combineReducers({
    products,
    carts
})

export default reducer