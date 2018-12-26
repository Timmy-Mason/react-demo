import React, { Component } from 'react';
import {Button} from 'antd';

import ButtonActions from '../actions/ButtonActions'
import ListStore from '../stores/ListStores'


class child extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    // 监听事件（必须是回调）
    componentDidMount() {
        ListStore.addChangeListener1(this._onChange);
    }
    // 解除事件（必须是回调）
    componentWillUnmount(){
        ListStore.removeChangeListener1(this._onChange);
    }
    _onChange(){
        alert(11232)
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

