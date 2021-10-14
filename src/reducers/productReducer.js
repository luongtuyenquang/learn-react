
const initialState = [
    {
        id: 1,
        name: 'iPhone 11 Pro Max',
        image: 'https://salt.tikicdn.com/cache/400x400/ts/product/b0/39/57/a5c7b46a18cd2e077fb2d805ed600e67.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 1000,
        inventory: 10,
        rating: 4,
    },
    {
        id: 2,
        name: 'iPhone 12 Pro Max',
        image: 'https://www.viendongmobile.com/vnt_upload/product/09_2021/Blue.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 2000,
        inventory: 15,
        rating: 5,
    },
    {
        id: 1,
        name: 'iPhone XS Max',
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 800,
        inventory: 5,
        rating: 4,
    },
    {
        id: 1,
        name: 'Samsung Galaxy Note 20',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220522/samsung-galaxy-note-20-ultra-trang-600x600-200x200.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 1200,
        inventory: 7,
        rating: 3,
    },
]

const products = (state = initialState, action) => {
    switch (action.type){

        default: return [...state]
    }
}

export default products