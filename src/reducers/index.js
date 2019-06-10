import {combineReducers} from 'redux'
import cartCount from './carcount'
import user from './user'

export default combineReducers({
    cartCount,
    user
})

//随着应用变得非常复杂 需要对reducer函数进行拆分 拆分后的每一个独立负责state的一部分
//把由多个不同的reducers函数 作为value的object 合并成一个最终的 reducer
//然后就可以对这个reducer调用createStore