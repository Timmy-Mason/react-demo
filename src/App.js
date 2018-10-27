import React, { Component } from 'react';
// 三个都必须要引入
import {Link,HashRouter,Switch,Redirect,Route,BrowserRouter as Router} from 'react-router-dom'
import Game from './component/game/index';
import Tabs from  './component/projectShufflingTab/index'
import Parent from  './component/test/test3/parent'
import child from  './component/test/test3/child'
import test2 from './component/test/test2/index';
import test1 from './component/test/test1/index';

import './App.css';
import { Button } from 'antd';

const projectNav = {
    backgroundColor:"#F8F8F8",
    color:"#778BBA",
    borderBottom:"1px solid #e7e7e7"
};

class App extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        this.props.history.push({ pathname : '/'})
    }

    render() {
        return (
            <div id="container">
                <h1 style={projectNav}>游戏管理后台<Button type="primary" onClick={this.handleClick.bind(this)}>点击退出登陆</Button></h1>
                <HashRouter>
                    <div className="side-bar-content">
                        <ul className="side-bar">
                            <li><Link to="/">游戏</Link></li>
                            <li><Link to="/tabs">tabs</Link></li>
                            {/*通过路由切换传递参数*/}
                            {/*<li><Link to="/test1:canshu和parmas">test1</Link></li>*/}
                            {/*<li><Link to="/test2">test2</Link></li>*/}
                            <li><Link to="/parent">parent组件</Link></li>
                        </ul>
                        <div className="content">
                            <Switch>
                                {/*备注: 如果第一个为"/",那么必须在第一个Route标签上边加上 exact*/}
                                <Route path="/games" component={Game}></Route>
                                <Route path="/tabs" component={Tabs}></Route>
                                {/*<Route path="/test1:id" component={test1}></Route>*/}
                                {/*<Route path="/test2" component={test2} ></Route>*/}
                                {/*嵌套路由*/}
                                <Route path="/parent" component={Parent}></Route>
                                <Redirect to="/games"/>
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}
export default App;