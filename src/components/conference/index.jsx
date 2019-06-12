import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './css/index.scss'
class Conference extends Component {
    state = {
        data:{}
    }
    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/conference')
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
            <div className={'conference'}>
                {
                    data.shopid && (
                        <Link to={`/shop/${data.shopid}`}><img src={data.picurl} alt={data.alt}/></Link>
                    )
                }
                {/*<a href="/"><img src={require('./img/conference.jpg')} alt=""/></a>*/}
            </div>
        );
    }
}

export default Conference;