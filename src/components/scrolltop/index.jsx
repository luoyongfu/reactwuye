import {Component} from 'react';
import {withRouter} from 'react-router-dom'

class ScrollTop extends Component {
    componentDidUpdate(pervProps){
        if(this.props.location.pathname !== pervProps.location.pathname){
            window.scrollTo(0,0)
        }
    }
    render() {
        return this.props.children
    }
}

export default withRouter(ScrollTop)  ;