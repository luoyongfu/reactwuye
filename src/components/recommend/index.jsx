import React, {Component} from 'react';
import './css/index.scss'
class Romd extends Component {
    state = {
        data:{}
    }
    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/recommend')
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
            <div className={'romd'}>
                {
                    data.shopid && (
                        <a href="/"><img src={data.picurl} alt=""/></a>
                    )
                }

            </div>
        );
    }
}

export default Romd;