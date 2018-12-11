import React, { Component } from 'react';
import {Button} from 'antd';

import ButtonActions from '../actions/ButtonActions'

class child extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    addButtonData = () => {
        // 1. 事件触发 action
        ButtonActions.addNewItem('修改后的数据');
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.addButtonData.bind(this)}>flux组件</Button>
                <br/>
            </div>
        );
    }
}
export default child;

