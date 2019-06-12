import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './css/index.scss'

class Head extends Component {
    state = {
        name:'wuye小米商城'
    }
    componentDidMount(){
        // fetch('http://47.100.98.54:9020/api/name')
        //     .then(res=>res.json())
        //     .then((data) => {
        //         if(data.status === 200){
        //             this.setState({
        //                 name:data.name
        //             })
        //         }
        //         // console.log(data)
        //     })

    }
    render() {
        return (
            <header className={'index_top'}>
                <div className={'logo'}>
                    <img src={require('./img/logo.png')} alt="" width='100%' height='100%'/>
                </div>
                <div className={'search'}>
                    <i className={'iconfont icon-sousuo'}></i>
                    <span>{this.state.name}</span>
                </div>
                <Link to={'/my'}>
                    <div className={'login iconfont icon-sself'}></div>
                </Link>
            </header>
        );
    }
}

export default Head;