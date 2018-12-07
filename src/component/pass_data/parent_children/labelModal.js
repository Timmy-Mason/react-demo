import React, { Component } from 'react';
import { Button } from 'antd';

// 第二个按钮style
const secondButton = {
    marginTop:10,
    color:"red"
};

class Child_1 extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:this.props.msg
        }
    }
    changeMsg(){
        // 从子组件传递值到主组件,调用的是主组件里边的方法
        this.props.transferMsg("我是子组件里边的值,传递给父组件");
    };
    render() {
        return <div>
            <h2>child_1 component</h2>
            <h2 style={secondButton}>{this.state.msg}</h2>
            <Button onClick={this.changeMsg.bind(this)} type="primary">{this.state.msg}</Button><br/>
        </div>
    }
}
export default Child_1;