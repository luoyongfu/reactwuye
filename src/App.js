import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
// import Head from './components/indextop/index'
// import Banner from './components/banner/index'
// import Category from './components/category/index'
// import Romd from './components/recommend/index'
// import Conference from './components/conference/index'
// import Goods from './components/goods/index'
// import Tabbar from './components/tabbar/index'
// import Shop from './components/shop/index'
import Shopcar from './components/shopcar/index'
import My from './components/my/index.jsx'
import Home from './components/home/index'
import NotFound from './components/notfound/index'
import Shop from "./components/shop";
class App extends Component{
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/my'} component={My} />
                    <Route path={'/shopcar'} component={Shopcar}/>
                    <Route path={'/shop/:shopid'} component={Shop}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
