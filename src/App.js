import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import Game from './component/game/index';
import Label from './component/label/index';
import Page from './component/homePage/index';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="side-bar">
                <Router>
                    <div className="side-bar-content">
                        <ul className="side-bar">
                            <li><Link to="/">游戏</Link></li>
                            <li><Link to="/label">标签</Link></li>
                            {/*通过路由切换传递参数*/}
                            <li><Link to="/page:canshu和parmas">首页</Link></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={Game}></Route>
                            <Route path="/label" component={Label} ></Route>
                            <Route path="/page:id" component={Page}></Route>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;