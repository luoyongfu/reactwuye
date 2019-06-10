
// 购物车功能
export default function(state={}, action){
    let goods = action.data
    switch (action.type) {
        case 'CART_NAME':
            return goods
        default:
            return state
    }
}