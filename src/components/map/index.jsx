import React, {Component} from 'react';
import './css/index.scss'
import Tabber from '../tabbar/index'
import {connect} from 'react-redux'
import {getUserInfo} from '../../actions/cart'

@connect(
    state=>({shop:state}),
    {getUserInfo}
)

class Map extends Component {
    componentDidMount(){
        let {getUserInfo} = this.props
        let {AMap} = window
        let map = new AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //获取用户所在城市信息
        function showCityInfo() {
            //实例化城市查询类
            let citysearch = new AMap.CitySearch();
            //自动获取用户IP，返回当前城市
            citysearch.getLocalCity(function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    if (result && result.city && result.bounds) {
                        let cityinfo = result.city;
                        let citybounds = result.bounds;
                        document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                        //地图显示当前城市
                        map.setBounds(citybounds);
                        getUserInfo({map:cityinfo})
                    }
                } else {
                    document.getElementById('info').innerHTML = result.info;
                }
            });
        }
        showCityInfo();
    }
    render() {
        return (
            <div className={'map'} >
                <div id={'container'}></div>
                <div id={'info'}></div>
                <Tabber />
            </div>
        );
    }
}

export default Map;