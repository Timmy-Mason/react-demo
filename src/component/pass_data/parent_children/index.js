import React, { Component } from 'react';
import LabelModal from './labelModal'
class Parent extends Component{
    state = {
        // 初始化子组件的值，之后msg会被从子组件传进来的值更新替换掉
        msg: '父组件中的msg,通过组件标签 Child_1 上边的 ‘msg’ 属性 将值传递给子组件'
    };
    handleClick(msg) {
        this.setState({
            msg
        });
    }
    render() {
        return <div>
                <h1>父组件: </h1>
                <h2 style={{color:"red"}}>{this.state.msg}</h2> <br/><br/><br/><br/><br/><br/>
                <LabelModal msg={this.state.msg} transferMsg = {msg => this.handleClick(msg)}/> <br/><br/><br/><br/><br/><br/>
            </div>;
    }
}
export default Parent

// 注释：msg={this.state.msg}: 主组件向子组件传递参数的值，transferMsg = {msg => this.handleClick(msg):子组件向主组件传递参数的方法,其中 transferMsg 为父组件和子组件之间交互的方法

// msg为标签的一个属性，值为要传递的目标的值。再子组件中通过 this.props.msg 来接收

// transferMsg 为父组件和子组件之间互相传递的方法，参数为对应的值


