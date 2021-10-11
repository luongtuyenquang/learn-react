import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducers/product'
import { cartReducer } from './reducers/cart'

const reducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})

const store = createStore(reducer)

console.log(store.getState());