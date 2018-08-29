import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import Newsdetail from './component/nwesDetail/index';
import Newslist from './component/newList/index';
import NewPage from './component/newPage/index';
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">详情</Link></li>
                            <li><Link to="/Newslist">列表</Link></li>
                            <li><Link to="/NewPage:canshu和parmas">页面</Link></li>
                        </ul>
                        <hr/>
                        <Route exact path="/" component={Newsdetail}></Route>
                        <Route path="/Newslist" component={Newslist} ></Route>
                        <Route path="/NewPage:id" component={NewPage}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;