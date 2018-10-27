import React, { Component } from 'react';
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import App from '../App'
import Game from './game/index';
import { Button } from 'antd';

class login extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            loginPath:"aaa"
        }
    }
    componentDidMount() {
        // 已生效
        // if("判断是否登陆的条件"){
        //     this.props.history.push({ pathname : '/APP'})
        // }
    }
    handleClick(){
        this.props.history.push({ pathname : '/APP'})
    }
    render() {
        return (
            <div>
                {/*<Button onClick={this.handleClick.bind(this)} type="primary">点击我跳转</Button>*/}
                {/*<Route path={this.state.loginPath} component={App}/>*/}
                {/*<Link to="/App">*/}
                    {/*<Button type="primary">点击我跳转</Button>*/}
                {/*</Link>*/}
                {/*<Route path="/App" component={App}></Route>*/}
                <Button onClick={this.handleClick.bind(this)} type="primary">点击我跳转</Button>
            </div>
        );
    }
}
export default login;