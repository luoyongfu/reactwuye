import {createStore} from 'redux'
import Reducer from '../reducers/index'

export default function(init){
    // init 参数是state的初始值
    const store = createStore(
        Reducer,
        init,
        // 调用调试工具
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}