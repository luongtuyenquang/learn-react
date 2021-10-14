import * as types from './constants/ActionType'

const addToCart = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quantity: quantity
    }
}