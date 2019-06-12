import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './css/index.scss'
import LazyLoad,{ lazyload } from 'react-lazyload';
@lazyload({
    height: 200,
    once: true,
    offset: 100
})

class Goods extends Component {
    state = {
        data:[]
    }
    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/goods')
            .then(res=>res.json())
            .then((data) => {
                if(data.status === 200){
                    this.setState({
                        data:data.data
                    })
                }
                // console.log(data)
            })
    }
    render() {
        const data = this.state.data
        return (
            <div className={'goods'}>
                <ul>
                    {
                        data.length > 0 && (
                            data.map((item, index) => {
                                return (
                                    <li key={item.id}>
                                        <Link to={`/shop/${item.shopid}`}>
                                            <div className={'goods_shop'}>
                                                <LazyLoad height={200}>
                                                    <img src={item.picurl} alt=""/>
                                                </LazyLoad>
                                            </div>
                                            <div className={'info'}>
                                                <p className={'goods_title'}>{item.title}</p>
                                                <p className={'goods_des'}>{item.des}</p>
                                                <p className={'goods_price'}> {item.symbol}{item.price}{item.font}</p>
                                            </div>
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                    {/* <li>
                        <a href="/">
                            <div className={'goods_shop'}>
                                <img src={require('./img/1.jpg')} alt=""/>
                            </div>
                            <div className={'info'}>
                                <p className={'goods_title'}>小米8 清新版</p>
                                <p className={'goods_des'}>潮流镜面渐变色，自拍旗舰</p>
                                <p className={'goods_price'}> ￥3199 起</p>
                            </div>
                        </a>
                    </li>*/}
                </ul>
            </div>
        );
    }
}

export default Goods;