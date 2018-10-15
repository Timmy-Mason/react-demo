import React, { Component } from 'react';
import { Link } from "react-router-dom";
import App from '../App'
import { Button } from 'antd';
class login extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    passParams(){

    }
    render() {
        return (
            <div>
                <h2>login组件:</h2>
                <Button type="primary" onClick={this.passParams.bind()}>跳转主界面</Button>
                <Link to="/App">
                    <Button type="primary">跳转主界面</Button>
                </Link>
            </div>
        );
    }
}
export default login;