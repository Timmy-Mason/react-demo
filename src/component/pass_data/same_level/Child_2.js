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
        // 监听 child1_send 事件
        eventProxy.on('child1_send', (msg) => {
            this.setState({
                msg
            });
        });
    }
    render() {
        return (
            <div>
                <h1>child_2 子组件</h1> <br/><br/><br/><br/><br/>
                <h1 style={{color:"red"}}>{this.state.msg}</h1>
            </div>
        );
    }
}
export default NewPage;