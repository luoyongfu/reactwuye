import React, {Component} from 'react';
import {
    NavLink
} from 'react-router-dom'
import './css/index.scss'
class Tabbar extends Component {
    render() {
        return (
            <div className={'tabbar'}>
                <ul>
                    <li>
                        <NavLink exact to={'/'} >
                            <i className={'iconfont icon-home'}></i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/map'} >
                            <i className={'iconfont icon-ditu'}></i>
                            <span>定位</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/shopcar'}>
                            <i className={'iconfont icon-icon1'}>
                            </i>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/my'}>
                            <i className={'iconfont icon-sself'}></i>
                            <span>我的</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Tabbar;