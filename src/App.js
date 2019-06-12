import React,{Component} from 'react';
import {
    HashRouter as Router,
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
import Map from "./components/map";
// 页面跳转时显示组件顶部
import ScrollTop from './components/scrolltop/index'
class App extends Component{

    render() {
        return (
            <Router basename={'reactwuye'}>
                <ScrollTop>
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/map'} component={Map}/>
                        <Route path={'/my'} component={My} />
                        <Route path={'/shopcar'} component={Shopcar}/>
                        <Route path={'/shop/:shopid'} component={Shop}/>
                        <Route component={NotFound} />
                    </Switch>
                </ScrollTop>
            </Router>
        );
    }
}

export default App;
