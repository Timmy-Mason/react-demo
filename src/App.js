import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import Game from './component/game/index';
import tabs from  './component/projectShufflingTab/index'
import test2 from './component/test/test2/index';
import test1 from './component/test/test1/index';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="container">
                <Router>
                    <div className="side-bar-content">
                        <ul className="side-bar">
                            <li><Link to="/">游戏</Link></li>
                            <li><Link to="/tabs">tabs</Link></li>
                            {/*通过路由切换传递参数*/}
                            {/*<li><Link to="/test1:canshu和parmas">test1</Link></li>*/}
                            {/*<li><Link to="/test2">test2</Link></li>*/}
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={Game}></Route>
                            <Route path="/tabs" component={tabs}></Route>
                            {/*<Route path="/test1:id" component={test1}></Route>*/}
                            {/*<Route path="/test2" component={test2} ></Route>*/}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;