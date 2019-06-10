import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.min'
import 'swiper/dist/css/swiper.min.css'
import './css/index.scss'
class Banner extends Component {
    state = {
        data:[]
    }
    play(){
        let mySwiper = new Swiper('.swiper-container', {
            loop:true,
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    componentDidMount(){

        fetch('http://47.100.98.54:9020/api/banner')
            .then(res=>res.json())
            .then((data) => {
                if(data.status === 200){
                    this.setState({
                        data:data.data
                    })
                    this.play()
                }
                // console.log(this.state.data)
            })
    }
    render() {
        return (
            <div className={'banner swiper-container'}>
                <ul className={'swiper-wrapper'}>
                    {/*<li className={'swiper-slide'}><a href="/"><img src={require('./img/1.jpg')} alt=""/></a></li>
                    <li className={'swiper-slide'}><a href="/"><img src={require('./img/2.jpg')} alt=""/></a></li>
                    <li className={'swiper-slide'}><a href="/"><img src={require('./img/3.jpg')} alt=""/></a></li>*/}
                    {
                        this.state.data.length > 0 && (
                            this.state.data.map((item,index) => {
                                return (
                                    <li className={'swiper-slide'} key={index}>
                                        <Link to={`/shop/${item.shopid}`}>
                                            <img src={item.picurl} alt={item.alt}/>
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
                <div className={"swiper-pagination"}></div>
            </div>
        );
    }
}

export default Banner;