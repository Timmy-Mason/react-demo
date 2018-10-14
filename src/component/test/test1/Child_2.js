import React, { Component } from 'react';
// 观察者模式:类似vue里边的$emit和$on事件触发机制
import eventProxy from '../../../eventProxy'
class NewPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: 'start'
        };
    }
    componentDidMount() {
        // 监听 msg 事件
        eventProxy.on('msg', (msg) => {
            this.setState({
                msg
            });
        });
    }
    render() {
        return (
            <div>
                <h2>child_2组件</h2>
                <p>child_2 component: {this.state.msg}</p>
            </div>
        );
    }
}
export default NewPage;