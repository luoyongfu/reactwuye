import shoptools from '../util/shoptools'

// 购物车功能
// 事件交互 所改变的状态都交给redux处理
export default function(state={}, action){
    let goods = action.data
    switch (action.type) {
        case 'CART_ADD':
            // console.log(goods)
            shoptools.addUpdate(goods)
            return shoptools.getShop()
        case 'CART_DEL':
            shoptools.delete(goods)
            return shoptools.getShop()
        case 'CART_GOODS_NUM':
            let newState = Object.assign({},state,goods)
            return newState
        case 'GET_USER_INFO':
            // console.log(action)
            let newMapInfo = Object.assign({},state,action.map)
            return newMapInfo
        default:
            return shoptools.getShop()
    }
}