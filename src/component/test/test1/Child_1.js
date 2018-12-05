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
            eventProxy.trigger('msg', 'end');
        }, 1000);
    }
    passParams(){
        eventProxy.trigger('msg', '来自child_1的数据');
    }

    render() {
        return (
            <div>
                <h2>child_1子组件</h2>
                <Button type="primary" onClick={this.passParams.bind(this)}>传递参数到兄弟组件</Button>
            </div>
        );
    }
}
export default NewPage;