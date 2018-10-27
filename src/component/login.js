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

    }
    handleClick(){
        console.log("点击按钮");
        this.setState({
            loginPath:""
        })
    }
    render() {
        return (
            <div>
                {/*<Button onClick={this.handleClick.bind(this)} type="primary">点击我跳转</Button>*/}
                {/*<Route path={this.state.loginPath} component={App}/>*/}
                <Link to="/App">
                    <Button type="primary">点击我跳转</Button>
                </Link>
                <Route path="/App" component={App}></Route>
            </div>
        );
    }
}
export default login;