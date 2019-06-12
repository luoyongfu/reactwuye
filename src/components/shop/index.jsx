import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './css/index.scss'
import {connect} from 'react-redux'
import {addCart} from '../../actions/cart'

@connect(
    state=>({shop:state}),
    {addCart}
)

class Shop extends Component {
    state = {
        data:{},
        num:0,
        id:0
    }
    componentDidMount(){
        let id = this.props.match.params.shopid
        // console.log(id)
        fetch('http://47.100.98.54:9020/api/buygoods/'+ id)
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                // console.log(res)
                this.setState({
                    data:res,
                    id
                })
            })
    }
    // 减少商品
    reduceGoods = () =>{
        let num = this.state.num
        num = num ? num-1 : num
        this.setState({
            num
        })
    }
    // 增加商品
    addGoods = () =>{
        let num = this.state.num
        // console.log(n)
        num++
        this.setState({
            num
        })
    }

    //加入购物车提交到redux
    submitRedux = () => {
        let {num,id} = this.state
        let {addCart} = this.props
        num && (
            // console.log('提交到redux')
            addCart({
                id,
                num
            })
        )
    }

    render() {
        // console.log(this.props)
        let {num,data} = this.state
        let {picurl,title,des,symbol,price} = data
        return (
            <div className={'shop'}>
                <div className={'shop_img'}>
                    <img src={picurl} alt=""/>
                </div>
                <div className={'shop_par'}>
                    <p className={'shop_title'}>
                        {title}
                    </p>
                    <p className={'shop_des'}>
                        <span>{des}</span>
                        与小米9相同的超级夜景算法 / 2400万旗舰自拍 / Dual PD 双核对焦 / 潮流镜面渐变色 / 7.5mm超薄机身 / 6.26"小刘海全面屏 / 骁龙660AIE处理器
                    </p>
                    <div className={'shop_price'}>
                        {symbol}{price}
                        <div>
                            <span onClick={this.reduceGoods}>-</span>
                            <span>{num}</span>
                            <span onClick={this.addGoods}>+</span>
                        </div>
                    </div>
                </div>
                <div className={'shop_con'}>
                    <ul>
                        <li>
                            <i className={'iconfont icon-CPU'}></i>
                            <span>CPU</span>
                            <span>骁龙660八核</span>
                        </li>
                        <li>
                            <i className={'iconfont icon-shexiangtou'}></i>
                            <span>双摄像头</span>
                            <span>1200万+500...</span>
                        </li>
                        <li>
                            <i className={'iconfont icon-pingmu'}></i>
                            <span>超大屏</span>
                            <span>6.29英寸</span>
                        </li>
                        <li>
                            <i className={'iconfont icon-pingmufenbianshuai'}></i>
                            <span>屏幕分辨率</span>
                            <span>2280×1080</span>
                        </li>
                        <li>
                            <i className={'iconfont icon-shexiangtou'}></i>
                            <span>CPU</span>
                            <span>骁龙660八核</span>
                        </li>
                    </ul>
                </div>
                <div className={'shop_option'}>
                    <div className={'shop_dis'}>
                        <div className={'shop_dis_top'}>
                            <span>领券</span>
                            <span>小米8青春专属 200元优惠券</span>
                            <i className={'iconfont icon-jiantou'}></i>
                        </div>
                        <div className={'shop_dis_bot'}>
                            <span>促销</span>
                            <div>
                                <span>赠品</span>
                                <span>赠米粉卡，最高含100元话费</span>
                            </div>
                            <i className={'iconfont icon-jiantou'}></i>
                        </div>
                    </div>
                    <div className={'shop_side'}>
                        <div className={'shop_side_top'}>
                            <div>已选</div>
                            <div>小米8 青春版 6GB+64GB 深空灰 x 1</div>
                            <div><i className={'right iconfont icon-jiantou'}></i></div>
                        </div>
                        <div className={'shop_side_center'}>
                            <div>送至</div>
                            <div>北京市 通州区
                                <span> 有现货</span>
                            </div>
                            <div><i className={'right iconfont icon-jiantou'}></i></div>
                        </div>
                        <div className={'shop_side_bot'}>
                            <div><i className={'iconfont icon-gouxuan'}></i><span>小米自营</span></div>
                            <div><i className={'iconfont icon-gouxuan'}></i><span>小米发货</span></div>
                            <div><i className={'iconfont icon-gouxuan'}></i><span>7天无理由退货</span></div>
                            <div><i className={'right iconfont icon-jiantou'}></i></div>
                        </div>
                    </div>
                    <div className={'shop_com'}>
                        <div className={'shop_com_top'}>
                            <div><img src={require('./img/1.jpg')} alt=""/></div>
                            <div>
                                <p>五葉</p>
                                <p>2019-03-21</p>
                            </div>
                            <div>
                                <i className={'iconfont icon-zan'}></i>
                                <span>214</span>
                            </div>
                        </div>
                        <div className={'shop_com_text'}>
                            <p>很漂亮，大小也合适，照相棒棒哒没毛病！值了</p>
                        </div>
                        <div className={'shop_com_img'}>
                            <div><img src={require('./img/3.jpg')} alt=""/></div>
                            <div><img src={require('./img/4.jpg')} alt=""/></div>
                            <div><img src={require('./img/5.jpg')} alt=""/></div>
                        </div>
                        <div className={'shop_com_prply'}>
                            <span>官方回复：</span>
                            每天把牢骚拿出来晒晒太阳，心情就不会缺钙。(*￣︶￣)感谢您对小米的支...
                        </div>
                    </div>
                    <div className={'shop_com_more'}>
                        <span>更多评论</span>
                        <i className={'iconfont icon-arrfill_l'}></i>
                    </div>
                </div>
                <div className={'shop_botnav'}>
                    <div>
                        <Link to={'/'}>
                            <i className={'iconfont icon-home'}></i>
                        </Link>
                        <span>首页</span>
                    </div>
                    <div>
                        <Link to={'/shopcar'}>
                            <i  className={'iconfont icon-icon1'}></i>
                        </Link>
                        <span>购物车</span>
                    </div>
                    <div>
                        <p  onClick={this.submitRedux}>加入购物车</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;