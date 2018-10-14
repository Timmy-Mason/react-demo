import React, { Component } from 'react';
import Child_1 from './labelModal'
class Parent extends Component{
    state = {
        // 初始化子组件的值，之后msg会被从子组件传进来的值更新替换掉
        msg: '子组件'
    };
    transferMsg(msg) {
        this.setState({
            msg
        });
    }
    render() {
        return <div>
                <p>child msg: {this.state.msg}</p>
                {/*注释：同时具备: 主组件向子组件传递参数，子组件向主组件传递参数：*/}
                <Child_1 msg={this.state.msg} transferMsg = {msg => this.transferMsg(msg)}/>
            </div>;
    }
}
export default Parent;