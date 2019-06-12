import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import './css/index.scss'
import {addCart,delCart,getGoodsNum} from '../../actions/cart'
import {connect} from 'react-redux'

@connect(
    state=>({shop:state}),
    {addCart,delCart,getGoodsNum}
)

class Shopcar extends Component {
    constructor(props){
        super(props)

        this.state = {
            adr: '北京市 通州区 梨园镇 新华联家园44栋5单元402号室',
            goods:[],
            count:0,
            price:0,
            map:''
        }
    }

    //减少
    reduceGoods = (index) => {
        // console.log(index)
        let goods = this.state.goods
        let {addCart} = this.props
        let id = goods[index].shopid
        if(goods[index].num !== 0 ){
            goods[index].num--
            this.setState({
                goods
            })
            addCart({
                id,
                // 每点击一次是+1 不是累加当前数量
                num:-1
            })
        }
        this.totalPrice()
    }
    //增加
    addGoods = (index) => {
        // console.log(index)
        let goods = this.state.goods
        let {addCart} = this.props
        let id = goods[index].shopid
        goods[index].num ++
        this.setState({
            goods
        })
        addCart({
            id,
            // 每点击一次是+1 不是累加当前数量
            num:1
        })
        this.totalPrice()
    }
    //删除商品
    delGoods = (index) => {
        let goods = this.state.goods
        let {delCart} = this.props
        let id = goods[index].shopid
        // console.log(id)
        //删除当前组件state的数据
        goods.splice(index,1)
        this.setState({goods})
        // 删除redux本地存储
        delCart(id)
        this.totalPrice()
    }

    // getDate获取数据
    getDate = () => {
        // 默认返回的数据 就是获取数据
        let {cartCount} = this.props.shop
        let {goods} = this.state
        // {11: 23, 12: 2, 21: 2}
        // console.log(cartCount)
        let shopid = Object.keys(cartCount) // 返回一个数组 [11,12,21]
        shopid.forEach((item,index) => {
            if(!isNaN(item)){// 判断键值的键是否是数字 商品id
                fetch('http://47.100.98.54:9020/api/buygoods/'+ item)
                    .then(res=>res.json())
                    .then(data=> {
                        // 把商品对应的数量挂载上去 goods
                        data['num'] = cartCount[item]
                        goods.push(data)
                        this.setState({
                            goods
                        })
                    })
            }

            this.getResoult()
        })
    }
    getResoult = () => {
        let cartCount = this.props.shop.cartCount
        let timer = setTimeout(() => {
            clearTimeout(timer)
            this.totalPrice()
        },200)
        if(cartCount.map){
            this.setState({
                map:cartCount.map
            })
        }
    }
    totalPrice= ()=> {
        let goods = this.state.goods
        // let {getGoodsNum} = this.props
        let count = 0
        let price = 0
        for (let key of goods){
            // console.log(key)
            // 循环累加价格以及数量
            price += key.num * key.price
            count += key.num
        }
        this.setState({
            count,
            price
        })
        // getGoodsNum({data:count})
    }


    componentDidMount(){
        this.getDate()
    }
    render() {
        let {map,goods,price,count} = this.state
        // console.log(this.props)
        // console.log(this.state.goods)
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
                <div className={'shop_site'}>
                    <p>送货地址：{map&&map}</p>
                    <p>编辑地址</p>
                </div>
                {
                    goods.length > 0 && (
                        goods.map((item,index) => {
                            return (
                                <div key={index} className={'shopcar_com'}>
                                    <div className={'shopcar_com_side'}>
                                        <div>
                                            <i className={'iconfont icon-gouxuan'}></i>
                                        </div>
                                        <div className={'shopcar_com_side_con'}>
                                            <div className={'shopcar_com_side_img'}>
                                                <img src={item.picurl} alt=""/>
                                            </div>
                                            <div className={'shopcar_com_side_text'}>
                                                <p>{item.title}</p>
                                                <p>{item.des}</p>
                                                <p>售价：{item.price}</p>
                                                <div>
                                                    <span onClick={this.reduceGoods.bind(this,index)}>-</span>
                                                    <span>{item.num}</span>
                                                    <span onClick={this.addGoods.bind(this,index)}>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={'icon'} onClick={this.delGoods.bind(this,index)}>
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
                            )
                        })
                    )
                }
                {/*<div className={'shopcar_com'}>
                    <div className={'shopcar_com_side'}>
                        <div>
                            <i className={'iconfont icon-gouxuan'}></i>
                        </div>
                        <div className={'shopcar_com_side_con'}>
                            <div className={'shopcar_com_side_img'}>
                                <img src={require('./img/2.jpg')} alt=""/>
                            </div>
                            <div className={'shopcar_com_side_text'}>
                                <p>小米8 青春 全网通版 </p>
                                <p>6GB内存 深空灰 64GB</p>
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
                </div>*/}
                <div className={'shopcar_set'}>
                    <div className={'shopcar_set_pic'}>
                        <p>共{count}件 金额：</p>
                        <p><span>{price}</span>元</p>
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