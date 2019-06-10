import React, {Component} from 'react';
import Head from "../indextop";
import Banner from "../banner";
import Category from "../category";
import Romd from "../recommend";
import Conference from "../conference";
import Goods from "../goods";
import Tabbar from "../tabbar";
import Shop from "../shop";
import Shopcar from "../shopcar";
import My from "../my";

class Home extends Component {
    render() {
        return (
            <div className="App">
                <Head />
                <Banner />
                <Category />
                <Romd />
                <Conference />
                <Goods />
                <Tabbar />
                {/*<Shop />*/}
                {/*<Shopcar />*/}
                {/*<My />*/}
            </div>
        );
    }
}

export default Home;