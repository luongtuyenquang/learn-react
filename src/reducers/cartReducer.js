import * as types from '../constants/ActionType'

// const data = JSON.parse(localStorage.getItem('CART'))
const initialState = [
    {
        product: {
            id: 1,
            name: 'iPhone 11 Pro Max',
            image: 'https://salt.tikicdn.com/cache/400x400/ts/product/b0/39/57/a5c7b46a18cd2e077fb2d805ed600e67.jpg',
            description: 'Sản phẩm do Apple sản xuất',
            price: 1000,
            inventory: 10,
            rating: 4,
        },
        quantity: 5
    },
    {
        product: {
            id: 2,
            name: 'iPhone 12 Pro Max',
            image: 'https://www.viendongmobile.com/vnt_upload/product/09_2021/Blue.png',
            description: 'Sản phẩm do Apple sản xuất',
            price: 2000,
            inventory: 15,
            rating: 5,
        },
        quantity: 10
    },
]


const carts = (state = initialState, action) => {
    switch (action.type){
        case types.ADD_TO_CART:
            console.log(action);
            return [...state]
        default: return [...state]
    }
}

export default carts