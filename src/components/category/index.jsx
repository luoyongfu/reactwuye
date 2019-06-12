import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './css/index.scss'
class Category extends Component {
    state = {
        data :[]
    }
    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/category')
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
            <div className={'category'}>
                {
                    data.length > 0 && (
                        data.map((item,index) => {
                            return (
                                <Link to={`/shop/${item.shopid}`} key={item.id}>
                                    <img src={item.picurl} alt={item.alt}/>
                                </Link>
                            )
                        })
                    )
                }
                {/*<a href="/"><img src={require('./img/1.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/2.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/3.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/4.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/5.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/6.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/7.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/8.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/9.jpg')} alt=""/></a>
                <a href="/"><img src={require('./img/10.jpg')} alt=""/></a>*/}
            </div>
        );
    }
}

export default Category;