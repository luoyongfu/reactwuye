import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './css/index.scss'
class Shopcar extends Component {
    render() {
        return (
            <div className={'shopcar'}>
                <div className={'return'}>
                    <div>
                        <NavLink exact to={'/'}><i className={'iconfont icon-right'}></i></NavLink>
                    </div>
                    <div>
                        购物车
                    </div>
                    <div>
                        <i className={'iconfont icon-search2'}></i>
                    </div>
                </div>
                <div className={'shopcar_com'}>
                    <div className={'shopcar_com_side'}>
                        <div>
                            <i className={'iconfont icon-gouxuan'}></i>
                        </div>
                        <div className={'shopcar_com_side_con'}>
                            <div className={'shopcar_com_side_img'}>
                                <img src={require('./img/2.jpg')} alt=""/>
                            </div>
                            <div className={'shopcar_com_side_text'}>
                                <p>小米8 青春 全网通版 6GB内存 深空灰 64GB</p>
                                <p>售价：1499</p>
                                <div>
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                        <div className={'icon'}>
                            <i className={'iconfont icon-laji'}></i>
                        </div>
                    </div>
                    <div className={'shopcar_com_gua'}>
                        <div className={'shopcar_com_gua_index'}>
                            <img src={require('./img/bao.png')} alt=""/>
                            <p>意外保护 59元起</p>
                            <p>选购</p>
                        </div>
                        <div className={'shopcar_com_gua_index'}>
                            <img src={require('./img/bao.png')} alt=""/>
                            <p>意外保护 59元起</p>
                            <p>选购</p>
                        </div>
                    </div>
                </div>
                <div className={'shopcar_set'}>
                    <div className={'shopcar_set_pic'}>
                        <p>共1件 金额：</p>
                        <p><span>1499</span>元</p>
                    </div>
                    <div className={'shopcar_set_shop'}>
                        <NavLink exact to={'/'}><p>继续购物</p></NavLink>
                    </div>
                    <div className={'shopcar_set_pay'}>
                        <p>去结算</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shopcar;