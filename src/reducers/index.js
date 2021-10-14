import { combineReducers } from "redux";
import products from "./productReducer";

const reducer = combineReducers({
    products
})

export default reducer