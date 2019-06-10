import React, {Component} from 'react';
import './css/index.scss'
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
                                        <a href="/">
                                            <div className={'goods_shop'}>
                                                <img src={item.picurl} alt=""/>
                                            </div>
                                            <div className={'info'}>
                                                <p className={'goods_title'}>{item.title}</p>
                                                <p className={'goods_des'}>{item.des}</p>
                                                <p className={'goods_price'}> {item.symbol}{item.price}{item.font}</p>
                                            </div>
                                        </a>
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