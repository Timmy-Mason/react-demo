import React, { Component } from 'react';
import { Button } from 'antd';
// 观察者模式:类似vue里边的$emit和$on事件触发机制
import eventProxy from '../../../eventProxy'
class NewPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        setTimeout(() => {
            // 发布 msg 事件
            eventProxy.trigger('child1_send', 'end');
        }, 1000);
    }
    passParams(){
        // 通过 trigger 和 on 发送和接收事件，同时带上参数
        eventProxy.trigger('child1_send', '来自兄当组件child_1的数据');
    }

    render() {
        return (
            <div>
                <h1>child_1 子组件</h1>
                <Button type="primary" onClick={this.passParams.bind(this)}>传递参数到兄弟组件</Button>
            </div>
        );
    }
}
export default NewPage;

// 触发事件，eventProxy.trigger ，传递参数：
// 另一个兄弟页面, eventProxy.on 接收参数