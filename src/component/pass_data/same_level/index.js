import React, { Component } from 'react';
import Child_1 from './Child_1';
import Child_2 from './Child_2';
// 观察者模式:类似vue里边的$emit和$on事件触发机制
class NewPage extends Component {
    render() {
        return (
            <div>
                {/*注意参数的名称*/}
                <div><h1>parent 父组件</h1>:这是通过路由跳转时候传递的参数: <br/>{this.props.match.params.id}</div><br/><br/>
                <div>
                    <Child_1></Child_1> <br/><br/>
                    <Child_2></Child_2>
                </div>
            </div>
        );
    }
}
export default NewPage;